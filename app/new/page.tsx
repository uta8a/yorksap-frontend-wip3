"use client";

import Link from "next/link";
import useSWR, { Fetcher } from "swr";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

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
  roomname: string;
};

function RealNew() {
  const userInfoForm = useForm<UserInfoValues>();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const onUserInfoSubmit = async (data: UserInfoValues) => {
    console.log(data);

    let reCaptchaToken = "";
    if (executeRecaptcha) {
      reCaptchaToken = await executeRecaptcha("CreateRoom");
    }

    fetch(`/api/v1/room`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: data.username,
        userPassword: data.password,
        roomName: data.roomname,
        reCaptchaToken: reCaptchaToken,
      }),
    }).then((res) => {
      if (res.status === 200) {
        return res.json().then((jsonValue) => {
          Cookies.set("accessToken", jsonValue.accessToken);
          Cookies.set("roomid", jsonValue.roomId);
          window.location.href = `/room/${jsonValue.roomId}`;
        });
      } else {
        alert("アカウントの作成に失敗しました");
        console.log(res);
      }
    });
  };
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
          登録するルーム名
        </label>
        <input
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          {...userInfoForm.register("roomname", { required: true })}
        />
        <input
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="submit"
          value="部屋を作る"
        />
      </form>
      {/* TODO: ログイン機能を実装する。ログイン時には roomid が必要 */}
      <div className="flex">
        <Link
          className="font-medium text-sl text-blue-500 hover:underline"
          href={`/`}
        >
          アカウントを作成
        </Link>
      </div>
    </main>
  );
}

export default function New() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY!}
      language="ja"
    >
      <RealNew />
    </GoogleReCaptchaProvider>
  );
}
