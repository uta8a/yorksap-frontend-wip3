"use client";

import Link from "next/link";
import useSWR, { Fetcher } from "swr";
import { useForm } from "react-hook-form";

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

export default function Home() {
  const userInfoForm = useForm<UserInfoValues>();
  const { data, error, isLoading } = useSWR("/api/v1/room", getData);
  const onUserInfoSubmit = (data: UserInfoValues) => console.log(data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <main className="flex  flex-col justify-between p-24">
      <h1 className="font-bold text-3xl pb-5">わくわくyorksapランド</h1>
      <form onSubmit={userInfoForm.handleSubmit(onUserInfoSubmit)}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          {...userInfoForm.register("username")}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
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
          どのルームに登録しますか？
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
          defaultValue="ログイン"
        />
      </form>
    </main>
  );
}
