"use client";

import Link from "next/link";
import useSWR, { Fetcher } from "swr";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
const getData: Fetcher<RoomList, string> = (url) =>
  fetch(url).then((res) => res.json());

type RoomList = {
  roomlist: Room[];
};
type Room = {
  id: string;
  name: string;
};
type UserInfoValues = {
  username: string;
  password: string;
  roomid: string;
};

export default function Login() {
  const userInfoForm = useForm<UserInfoValues>();
  const { data, error, isLoading } = useSWR("/api/v1/room", getData);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (Cookies.get("roomid")) {
      setLogin(true);
    }
  }, []);
  const onUserInfoSubmit = (data: UserInfoValues) => {
    console.log(data);
    fetch(`/api/v1/room/${data.roomid}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: data.username,
        userPassword: data.password,
      }),
    }).then((res) => {
      if (res.status === 200) {
        return res.json().then((jsonValue) => {
          Cookies.set("accessToken", jsonValue.accessToken);
          Cookies.set("roomid", data.roomid);
          window.location.href = `/room/${data.roomid}`;
        });
      } else {
        alert("ログインに失敗しました");
        console.log(res);
      }
    });
  };
  if (error) return <main>failed to load</main>;
  if (isLoading) return <main>loading...</main>;
  if (login) {
    return (
      <main>
        すでにログインしているようです。
        <p>
          あなたのルームはこちら:{" "}
          <Link
            className="font-medium text-xl text-blue-500 hover:underline"
            href={`/room/${Cookies.get("roomid")}`}
          >
            {`/room/${Cookies.get("roomid")}`}
          </Link>
        </p>
        ログアウトは
        <button
          onClick={() => {
            Cookies.remove("accessToken");
            Cookies.remove("roomid");
            window.location.href = "/";
          }}
          className="font-medium text-sl text-blue-500 hover:underline"
        >
          こちら
        </button>
      </main>
    );
  }
  return (
    <main className="flex  flex-col justify-between p-24">
      <h1 className="font-bold text-3xl pb-5">わくわくyorksapランド</h1>
      <form onSubmit={userInfoForm.handleSubmit(onUserInfoSubmit)}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          お名前
        </label>
        <input
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          {...userInfoForm.register("username")}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          パスワード
        </label>
        <input
          type="password"
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          {...userInfoForm.register("password", { required: true })}
        />
        {userInfoForm.formState.errors.password && (
          <span>This field is required</span>
        )}
        <label className="block text-gray-700 text-sm font-bold mb-2">
          どのルームにログインしますか？
        </label>
        <ul className="flex flex-col font-bold">
          {data?.roomlist.map((room) => (
            <li className="" key={room.id}>
              <input
                type="radio"
                className="mr-2"
                value={`${room.id}`}
                {...userInfoForm.register("roomid")}
              />
              <Link
                className="font-medium text-xl text-blue-500 hover:underline"
                href={`/room/${room.id}`}
              >
                {room.name}
              </Link>
            </li>
          ))}
        </ul>
        <input
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="submit"
          value={`ログイン`}
        />
      </form>
      {/* TODO: ログイン機能を実装する。ログイン時には roomid が必要 */}
      <div className="flex">
        <Link
          className="font-medium text-sl text-blue-500 hover:underline"
          href={`/register`}
        >
          アカウントを作成
        </Link>
        <span className="">&nbsp;/&nbsp;</span>
        <Link
          className="font-medium text-sl text-blue-500 hover:underline"
          href={`/new`}
        >
          ルームを作成
        </Link>
      </div>
    </main>
  );
}
