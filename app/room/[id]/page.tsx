"use client";
import { error } from "console";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR, { Fetcher, useSWRConfig } from "swr";
import { Map } from "./components/map";
import { useForm } from "react-hook-form";

type MovePost = {
  move: string;
};

type RoomResponse = {
  roomName: string;
};

type GameResponse = {
  phase: number;
  turn: string;
  nowPosition: Player[];
  history?: Phase[];
  ticket?: Ticket[];
  next: NextMove[];
};

type NormalWay = "TAXI" | "BUS" | "UNDERGROUND" | "SECRET";
type DoubleWay = "DOUBLE";
type NormalMove = [NormalWay, number];

type NextMove = NormalMove | [DoubleWay, NormalMove, NormalMove];

type Ticket = {
  TAXI: string;
  BUS: string;
  UNDERGROUND: string;
  SECRET: string;
  DOUBLE: string;
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
const getNextMove = (next: NextMove): number => {
  if (next[0] === "DOUBLE") {
    return next[2][1];
  } else {
    return next[1];
  }
};
const getNextMoves = (nexts: NextMove[]): number[] => {
  const arr = [];
  for (const next of nexts) {
    arr.push(getNextMove(next));
  }
  return arr;
};
const getNowTurnPosition = (turn: string, nowPosition: Player[]): number => {
  for (const player of nowPosition) {
    if (player.name === turn) {
      return player.position || 0;
    }
  }
  return 0;
};

const listNextWay = (
  nowPosition: number,
  destPosition: number,
  next: NextMove[]
): (
  | [number, number, NormalWay]
  | [DoubleWay, [number, number, NormalWay], [number, number, NormalWay]]
)[] => {
  const arr: (
    | [number, number, NormalWay]
    | [DoubleWay, [number, number, NormalWay], [number, number, NormalWay]]
  )[] = [];
  for (const nextMove of next) {
    if (getNextMove(nextMove) === destPosition) {
      if (nextMove[0] === "DOUBLE") {
        arr.push([
          "DOUBLE",
          [nowPosition, nextMove[1][1], nextMove[1][0]],
          [nextMove[1][1], nextMove[2][1], nextMove[2][0]],
        ]);
      } else {
        arr.push([nowPosition, nextMove[1], nextMove[0]]);
      }
    }
  }
  return arr;
};

const getIndexFromTurn = (turn: string, nowPosition: Player[]): number => {
  for (let i = 0; i < nowPosition.length; i++) {
    if (nowPosition[i].name === turn) {
      return i;
    }
  }
  return 0;
};

export default function Page({ params }: { params: { id: string } }) {
  const [strokeColor, setStrokeColor] = useState<any>([]);
  const [fillColor, setFillColor] = useState<any>([]);
  const [dest, setDest] = useState<number>(0);
  const moveForm = useForm<MovePost>();
  // const { mutate } = useSWRConfig();

  const onMoveSubmit = (data: MovePost) => {
    console.log("onMoveSubmit", data);
    const move = JSON.parse(data.move);
    console.log("move", move);
    if (move[0] === "SINGLE") {
      console.log("single", move);
      fetch(`/api/v1/game/${params.id}/move`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
        // JSON: [Ticket(String), Dest(Number)]
        body: JSON.stringify({
          ticket: move[1],
          destination: move[2],
        }),
      }).then((res) => {
        if (res.status === 200) {
          return res.json().then((_) => {
            console.log("ok");
            roomResponse.mutate();
            gameResponse.mutate();
          });
        } else {
          alert("移動に失敗しました");
          console.log(res);
        }
      });
    }
    if (move[0] === "DOUBLE") {
      console.log("double", move);
      fetch(`/api/v1/game/${params.id}/double-move`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
        // JSON: [[Ticket(String), Dest(Number)], [Ticket(String), Dest(Number)]]
        body: JSON.stringify({
          ticket1: move[1][0],
          destination1: move[1][1],
          ticket2: move[2][0],
          destination2: move[2][1],
        }),
      }).then((res) => {
        if (res.status === 200) {
          return res.json().then((_) => {
            console.log("ok");
            roomResponse.mutate();
            gameResponse.mutate();
          });
        } else {
          alert("移動に失敗しました");
          console.log(res);
        }
      });
    }

    return;
  };
  const onClickNode = (nodeId: number) => {
    setDest(nodeId);
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
  const roomResponse = useSWR(`/api/v1/room/${params.id}`, getRoomData, {
    refreshInterval: 1000,
  });
  const gameResponse = useSWR(`/api/v1/game/${params.id}`, getGameData, {
    refreshInterval: 1000,
  });
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
  console.log(
    "listNextWay",
    listNextWay(
      getNowTurnPosition(
        gameResponse.data?.turn || "",
        gameResponse.data?.nowPosition || []
      ),
      dest,
      gameResponse.data?.next || []
    )
  );
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
        <Map
          onClickNode={onClickNode}
          fillColor={fillColor}
          candidates={getNextMoves(gameResponse.data?.next || [])}
          highlightColor="#ff00ff"
        />
      </div>
      <div className="text-center">
        Turn: {gameResponse.data?.turn} / Phase:{" "}
        {gameResponse.data?.phase || 0 + 1}
      </div>
      <form
        onSubmit={moveForm.handleSubmit(onMoveSubmit)}
        className="px-10 text-left flex flex-col"
      >
        {listNextWay(
          getNowTurnPosition(
            gameResponse.data?.turn || "",
            gameResponse.data?.nowPosition || []
          ),
          dest,
          gameResponse.data?.next || []
        ).length !== 0 && (
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Move
          </label>
        )}

        {listNextWay(
          getNowTurnPosition(
            gameResponse.data?.turn || "",
            gameResponse.data?.nowPosition || []
          ),
          dest,
          gameResponse.data?.next || []
        ).map((value, index) => {
          if (value[0] === "DOUBLE") {
            // double move
            return (
              <div key={`input-${index}`}>
                <input
                  type="radio"
                  className="mr-2"
                  value={JSON.stringify([
                    "DOUBLE",
                    [value[1][2], value[1][1]],
                    [value[2][2], value[2][1]],
                  ])}
                  {...moveForm.register("move")}
                />
                <span>{`${value[0]}: ${value[1][0]} -> (${value[1][2]}) ->${value[1][1]} -> (${value[2][2]}) -> ${value[2][1]}`}</span>
              </div>
            );
          }
          // single move
          return (
            <div key={`input-${index}`}>
              <input
                type="radio"
                className="mr-2"
                value={JSON.stringify(["SINGLE", value[2], value[1]])}
                {...moveForm.register("move")}
              />
              <span>{`${value[0]} -> (${value[2]}) -> ${value[1]}`}</span>
            </div>
          );
        })}
        {listNextWay(
          getNowTurnPosition(
            gameResponse.data?.turn || "",
            gameResponse.data?.nowPosition || []
          ),
          dest,
          gameResponse.data?.next || []
        ).length !== 0 &&
          Object.keys(moveForm.watch()).length !== 0 &&
          moveForm.watch().move !== null && (
            <input
              className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="submit"
              value={`移動する`}
            />
          )}
      </form>
      <div className="flex justify-center">
        <table>
          <thead>
            <tr>
              <th></th>
              {gameResponse.data?.nowPosition.map((value, index) => {
                return (
                  <th
                    key={`thead-${index}`}
                    className={
                      getIndexFromTurn(
                        gameResponse.data?.turn || "",
                        gameResponse.data?.nowPosition || []
                      ) === index
                        ? `bg-blue-500`
                        : ""
                    }
                  >
                    {value.name}
                  </th>
                );
              })}
            </tr>
            <tr>
              <th></th>
              {gameResponse.data?.ticket?.map((value, index) => {
                return (
                  <th key={`thead-${index}`}>
                    {value.BUS} / {value.TAXI} / {value.UNDERGROUND} /{" "}
                    {value.SECRET} / {value.DOUBLE}
                  </th>
                );
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
      <div className="text-center">
        Ticket: BUS / TAXI / UNDERGROUND / SECRET / DOUBLE
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
