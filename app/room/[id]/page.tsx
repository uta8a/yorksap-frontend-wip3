"use client";
import Cookies from "js-cookie";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      My Post: {params.id}
      <button
        onClick={() => {
          Cookies.remove("accessToken");
          Cookies.remove("roomid");
          window.location.href = "/";
        }}
        className="font-medium text-sl text-blue-500 hover:underline"
      >
        ログアウト
      </button>
    </main>
  );
}
