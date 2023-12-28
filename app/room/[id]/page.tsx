"use client";
import { error } from "console";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR, { Fetcher } from "swr";
import {Map} from './components/map';

type RoomResponse = {
  roomName: string;
};

type GameResponse = {
  phase: number;
  turn: number;
  nowPosition: Player[];
  history?: Phase[];
};

type Player = {
  name: string;
  position?: number;
  selectedTicket?: string;
};

type Phase = {
  phase: number;
  player: Player[];
};

const colorScheme = [
  "#ff9999",
  "#ffcc99",
  "#ccff99",
  "#ff99ff",
  "#cc99ff",
  "#ff99cc",
];

const getRoomData: Fetcher<RoomResponse, string> = async (url) => {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("accessToken")}`,
    },
  });
  console.log(res.ok);
  if (!res.ok) {
    const error = new Error("error");
    throw error;
  }
  return res.json();
};
const getGameData: Fetcher<GameResponse, string> = async (url) => {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("accessToken")}`,
    },
  });
  console.log(res.ok);
  if (!res.ok) {
    const error = new Error("error");
    throw error;
  }
  return res.json();
};

export default function Page({ params }: { params: { id: string } }) {
  const [strokeColor, setStrokeColor] = useState<any>([]);
  const [fillColor, setFillColor] = useState<any>([]);

  const onClickNode = (nodeId: number) => {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push("#C9C9C9");
    }
    arr[nodeId] = "red";
    setStrokeColor(arr);
    const arr2 = [];
    for (let i = 0; i < 200; i++) {
      arr2.push("white");
    }
    if (gameResponse.data) {
      for (let i = 0; i < gameResponse.data!.nowPosition.length; i++) {
        const pos = gameResponse.data?.nowPosition[i].position;
        if (pos) {
          arr2[pos] = colorScheme[i];
        }
      }
    }
    arr2[nodeId] = "red";
    setFillColor(arr2);
    console.log(nodeId);
  };
  const roomResponse = useSWR(`/api/v1/room/${params.id}`, getRoomData);
  const gameResponse = useSWR(`/api/v1/game/${params.id}`, getGameData);
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push("#C9C9C9");
    }
    const arr2 = [];
    for (let i = 0; i < 200; i++) {
      arr2.push("white");
    }
    if (gameResponse.data) {
      for (let i = 0; i < gameResponse.data!.nowPosition.length; i++) {
        const pos = gameResponse.data?.nowPosition[i].position;
        if (pos) {
          arr2[pos] = colorScheme[i];
        }
      }
    }
    setStrokeColor(arr);
    setFillColor(arr2);
  }, [gameResponse.data?.nowPosition]);
  console.log("data", roomResponse, gameResponse);
  if (roomResponse.error || gameResponse.error)
    return (
      <main>
        failed to load...{" "}
        <div>
          <Link
            className="font-medium text-sl text-blue-500 hover:underline"
            href={`/`}
          >
            ホームに戻る
          </Link>
        </div>
      </main>
    );
  if (roomResponse.isLoading || gameResponse.isLoading)
    return <main>Now loading...</main>;
  return (
    <main>
      <h1 className="text-3xl text-center">
        Room: {roomResponse.data?.roomName}
      </h1>
      <div className="flex justify-center text-center">
      <Map onClickNode={onClickNode} fillColor={fillColor} strokeColor={strokeColor} candidates={[]} />
      </div>
      <div className="flex justify-center">
        <table>
          <thead>
            <tr>
              <th></th>
              {gameResponse.data?.nowPosition.map((value, index) => {
                return <th key={`thead-${index}`}>{value.name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {gameResponse.data?.history?.map((value, index) => {
              return (
                <React.Fragment key={`frag-${index}`}>
                  <tr key={`tbody-tr-1-${index}`}>
                    <td key={`tbody-td-1-${index}`}>{value.phase}</td>
                    {value.player.map((value, index) => {
                      return <td key={`tbody-1-${index}`}>{value.position}</td>;
                    })}
                  </tr>
                  <tr key={`tbody-tr-2-${index}`}>
                    <td key={`tbody-td-2-${index}`}></td>
                    {value.player.map((value, index) => {
                      return (
                        <td key={`tbody-2-${index}`}>
                          {value.selectedTicket === "UNDERGROUND"
                            ? "UG"
                            : value.selectedTicket}
                        </td>
                      );
                    })}
                  </tr>
                </React.Fragment>
              );
            })}
            <tr>
              <td>Now</td>
              {gameResponse.data?.nowPosition.map((value, index) => {
                return <td key={index}>{value.position}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
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
