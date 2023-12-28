"use client";
import { error } from "console";
import Cookies from "js-cookie";
import Link from "next/link";
import React from "react";
import useSWR, { Fetcher } from "swr";

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
  const onClickNode = (nodeId: number) => {
    console.log(nodeId);
  };
  const roomResponse = useSWR(`/api/v1/room/${params.id}`, getRoomData);
  const gameResponse = useSWR(`/api/v1/game/${params.id}`, getGameData);

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
        <svg
          width="1024"
          height="1024"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1024" height="1024" fill="white" />
          <path
            d="M146.95363 61.076096,108.56148 117.09702"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M146.95363 61.076096,178.98067 115.86467"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M321.50552 36.924683,378.99841 100.69551"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M321.50552 36.924683,216.5172 136.85501"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M434.79761 34.459274,431.57043 109.498"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M434.79761 34.459274,475.96646 96.624352"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M434.79761 34.459274,504.95227 23.804806"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M504.95227 23.804806,556.24951 90.440384"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M782.21185 34.223984,721.87207 58.313278"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M782.21185 34.223984,802.14563 98.218048"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M869.35254 33.290138,869.66241 157.69121"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M869.35254 33.290138,952.27789 43.453575"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M952.27789 43.453575,946.83337 130.9677"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M108.56148 117.09702,71.859413 159.61589"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M108.56148 117.09702,135.42819 167.50096"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M178.98067 115.86467,135.42819 167.50096"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M178.98067 115.86467,216.5172 136.85501"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M378.99841 100.69551,299.96857 180.67493"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M378.99841 100.69551,383.03928 219.23373"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M378.99841 100.69551,431.57043 109.498"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M431.57043 109.498,434.69092 190.67252"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M475.96646 96.624352,499.80444 141.53888"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M556.24951 90.440384,499.80444 141.53888"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M556.24951 90.440384,603.79456 147.62567"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M639.16016 67.927223,649.79126 163.15764"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M639.16016 67.927223,721.87207 58.313278"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M721.87207 58.313278,716.15356 94.843628"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M721.87207 58.313278,757.1076 129.02621"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M721.87207 58.313278,802.14563 98.218048"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M802.14563 98.218048,757.1076 129.02621"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M802.14563 98.218048,869.66241 157.69121"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M946.83337 130.9677,869.66241 157.69121"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M946.83337 130.9677,975.65985 152.17581"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M71.859413 159.61589,52.591331 247.02478"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M71.859413 159.61589,97.253754 199.17503"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M135.42819 167.50096,192.19846 225.69246"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M216.5172 136.85501,262.73459 206.88477"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M299.96857 180.67493,262.73459 206.88477"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M434.69092 190.67252,383.03928 219.23373"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M434.69092 190.67252,455.81717 239.55623"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M434.69092 190.67252,499.80444 141.53888"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M499.80444 141.53888,528.96265 191.85478"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M603.79456 147.62567,528.96265 191.85478"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M603.79456 147.62567,625.68079 195.43672"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M649.79126 163.15764,625.68079 195.43672"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M649.79126 163.15764,669.30627 186.48553"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M716.15356 94.843628,669.30627 186.48553"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M716.15356 94.843628,726.44342 147.89021"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M726.44342 147.89021,757.1076 129.02621"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M726.44342 147.89021,745.3125 229.47316"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M757.1076 129.02621,779.17072 209.88429"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M869.66241 157.69121,779.17072 209.88429"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M869.66241 157.69121,950.45471 210.63693"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M975.65985 152.17581,950.45471 210.63693"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M97.253754 199.17503,52.591331 247.02478"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M97.253754 199.17503,145.70999 271.10458"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M192.19846 225.69246,145.70999 271.10458"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M192.19846 225.69246,214.79053 283.10504"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M192.19846 225.69246,262.73459 206.88477"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M262.73459 206.88477,275.17416 256.9953"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M383.03928 219.23373,320.05286 238.58875"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M383.03928 219.23373,396.33963 283.30963"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M455.81717 239.55623,396.33963 283.30963"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M455.81717 239.55623,504.41446 345.90948"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M455.81717 239.55623,486.21323 244.57619"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M486.21323 244.57619,510.01608 280.93188"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M486.21323 244.57619,528.96265 191.85478"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M528.96265 191.85478,558.06464 241.32014"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M625.68079 195.43672,558.06464 241.32014"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M625.68079 195.43672,654.62201 252.35388"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M669.30627 186.48553,654.62201 252.35388"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M669.30627 186.48553,700.75604 235.87636"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M745.3125 229.47316,700.75604 235.87636"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M745.3125 229.47316,753.57025 276.11069"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M745.3125 229.47316,779.17072 209.88429"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M779.17072 209.88429,789.13385 259.43298"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M950.45471 210.63693,932.05475 321.97729"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M950.45471 210.63693,982.45325 271.28653"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M52.591331 247.02478,82.286629 293.68863"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M145.70999 271.10458,174.43199 308.45334"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M214.79053 283.10504,174.43199 308.45334"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M214.79053 283.10504,189.20694 334.27368"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M214.79053 283.10504,226.73618 327.16241"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M214.79053 283.10504,275.17416 256.9953"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M275.17416 256.9953,288.41095 337.3938"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M275.17416 256.9953,320.05286 238.58875"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M320.05286 238.58875,321.95636 321.54617"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M396.33963 283.30963,321.95636 321.54617"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M396.33963 283.30963,403.06802 373.8869"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M510.01608 280.93188,535.83643 336.37375"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M510.01608 280.93188,558.06464 241.32014"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M654.62201 252.35388,592.94574 322.65686"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M654.62201 252.35388,659.23279 302.97595"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M654.62201 252.35388,700.75604 235.87636"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M700.75604 235.87636,719.7384 297.16681"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M753.57025 276.11069,719.7384 297.16681"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M753.57025 276.11069,789.13385 259.43298"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M789.13385 259.43298,794.14508 313.46014"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M789.13385 259.43298,873.3598 258.31061"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M873.3598 258.31061,862.23547 313.48062"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M982.45325 271.28653,973.00665 379.27951"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M82.286629 293.68863,81.583687 344.7608"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M82.286629 293.68863,174.43199 308.45334"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M174.43199 308.45334,109.72914 391.94711"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M174.43199 308.45334,189.20694 334.27368"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M174.43199 308.45334,156.14526 375.99426"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M189.20694 334.27368,156.14526 375.99426"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M189.20694 334.27368,215.93044 373.16641"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M226.73618 327.16241,215.93044 373.16641"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M226.73618 327.16241,288.41095 337.3938"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M288.41095 337.3938,215.93044 373.16641"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M288.41095 337.3938,302.80154 402.12589"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M288.41095 337.3938,321.95636 321.54617"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M321.95636 321.54617,338.80798 394.52795"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M403.06802 373.8869,338.80798 394.52795"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M403.06802 373.8869,418.71542 414.64731"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M403.06802 373.8869,454.00867 361.67966"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M454.00867 361.67966,488.83429 428.3905"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M454.00867 361.67966,504.41446 345.90948"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M504.41446 345.90948,516.06781 403.37393"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M504.41446 345.90948,535.83643 336.37375"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M535.83643 336.37375,516.06781 403.37393"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M535.83643 336.37375,592.94574 322.65686"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M592.94574 322.65686,627.72021 360.44183"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M592.94574 322.65686,659.23279 302.97595"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M659.23279 302.97595,664.59619 342.46494"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M659.23279 302.97595,719.7384 297.16681"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M719.7384 297.16681,732.93207 376.95294"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M794.14508 313.46014,798.22974 398.96921"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M794.14508 313.46014,862.23547 313.48062"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M862.23547 313.48062,859.07739 375.03702"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M862.23547 313.48062,932.05475 321.97729"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M932.05475 321.97729,904.9104 376.68112"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M932.05475 321.97729,973.00665 379.27951"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M81.583687 344.7608,51.168648 441.69525"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M81.583687 344.7608,109.72914 391.94711"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M109.72914 391.94711,51.168648 441.69525"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M109.72914 391.94711,156.14526 375.99426"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M156.14526 375.99426,113.24825 458.66672"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M215.93044 373.16641,251.6972 416.23441"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M251.6972 416.23441,146.08047 449.94495"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M251.6972 416.23441,288.79532 473.44312"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M251.6972 416.23441,302.80154 402.12589"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M302.80154 402.12589,312.03918 464.45685"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M302.80154 402.12589,338.80798 394.52795"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M338.80798 394.52795,355.72827 440.56119"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M418.71542 414.64731,396.6553 446.04736"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M418.71542 414.64731,462.49658 476.01227"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M488.83429 428.3905,462.49658 476.01227"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M488.83429 428.3905,516.06781 403.37393"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M516.06781 403.37393,531.83655 441.68503"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M580.67566 386.85696,531.83655 441.68503"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M580.67566 386.85696,619.50409 395.871"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M627.72021 360.44183,664.59619 342.46494"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M664.59619 342.46494,675.08331 383.37003"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M732.93207 376.95294,675.08331 383.37003"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M732.93207 376.95294,732.0874 418.34909"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M798.22974 398.96921,833.466 407.1897"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M833.466 407.1897,816.93591 551.87891"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M833.466 407.1897,859.07739 375.03702"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M859.07739 375.03702,887.28424 435.17877"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M904.9104 376.68112,887.28424 435.17877"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M904.9104 376.68112,973.00665 379.27951"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M973.00665 379.27951,887.28424 435.17877"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M973.00665 379.27951,987.10205 446.44778"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M51.168648 441.69525,54.893803 476.39517"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M54.893803 476.39517,113.24825 458.66672"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M113.24825 458.66672,146.08047 449.94495"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M146.08047 449.94495,121.31674 638.91956"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M288.79532 473.44312,328.33691 542.69537"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M288.79532 473.44312,312.03918 464.45685"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M312.03918 464.45685,328.33691 542.69537"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M312.03918 464.45685,355.72827 440.56119"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M355.72827 440.56119,378.57172 482.39136"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M355.72827 440.56119,396.6553 446.04736"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M396.6553 446.04736,378.57172 482.39136"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M396.6553 446.04736,424.6561 508.62238"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M462.49658 476.01227,424.6561 508.62238"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M462.49658 476.01227,493.03732 512.60327"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M462.49658 476.01227,531.83655 441.68503"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M531.83655 441.68503,541.31824 489.30679"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M619.50409 395.871,618.19904 457.48734"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M619.50409 395.871,675.08331 383.37003"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M732.0874 418.34909,735.98645 511.41077"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M887.28424 435.17877,877.52924 524.39978"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M887.28424 435.17877,943.91125 446.78683"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M943.91125 446.78683,987.10205 446.44778"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M987.10205 446.44778,985.07355 592.52826"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M877.52924 524.39978,816.93591 551.87891"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M877.52924 524.39978,985.07355 592.52826"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M328.33691 542.69537,314.38766 609.36237"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M328.33691 542.69537,378.57172 482.39136"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M378.57172 482.39136,405.28644 524.77686"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M405.28644 524.77686,424.6561 508.62238"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M405.28644 524.77686,314.38766 609.36237"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M424.6561 508.62238,446.45462 551.26221"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M493.03732 512.60327,446.45462 551.26221"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M493.03732 512.60327,541.31824 489.30679"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M541.31824 489.30679,463.5108 580.00537"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M541.31824 489.30679,542.43475 577.53119"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M541.31824 489.30679,574.40765 522.68268"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M541.31824 489.30679,618.19904 457.48734"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M618.19904 457.48734,574.40765 522.68268"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M618.19904 457.48734,667.72656 550.26697"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M735.98645 511.41077,667.72656 550.26697"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M735.98645 511.41077,737.55017 575.46326"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M735.98645 511.41077,816.93591 551.87891"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M816.93591 551.87891,811.63531 585.98547"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M737.55017 575.46326,695.6908 604.98688"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M737.55017 575.46326,739.24103 675.49884"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M737.55017 575.46326,811.63531 585.98547"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M985.07355 592.52826,964.74084 685.43793"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M37.149261 638.71637,72.201385 641.7854"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M37.149261 638.71637,39.619053 758.44165"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M72.201385 641.7854,76.220284 754.14948"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M72.201385 641.7854,121.31674 638.91956"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M121.31674 638.91956,124.55231 748.44995"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M121.31674 638.91956,244.60786 631.60223"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M244.60786 631.60223,197.74309 687.92969"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M244.60786 631.60223,212.61447 725.10229"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M244.60786 631.60223,254.65511 717.22382"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M244.60786 631.60223,314.38766 609.36237"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M314.38766 609.36237,336.6597 650.0979"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M314.38766 609.36237,423.67401 616.98218"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M446.45462 551.26221,463.5108 580.00537"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M574.40765 522.68268,540.71906 642.82593"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M574.40765 522.68268,667.72656 550.26697"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M667.72656 550.26697,630.56555 633.24048"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M667.72656 550.26697,695.6908 604.98688"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M788.69983 735.85101,739.24103 675.49884"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M788.69983 735.85101,764.10999 810.76776"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M788.69983 735.85101,834.70679 879.44421"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M788.69983 735.85101,850.59967 755.49396"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M788.69983 735.85101,814.79492 661.05566"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M811.63531 585.98547,739.24103 675.49884"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M811.63531 585.98547,814.79492 661.05566"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M811.63531 585.98547,842.16437 623.88446"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M423.67401 616.98218,417.88681 656.82776"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M423.67401 616.98218,463.5108 580.00537"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M542.43475 577.53119,540.71906 642.82593"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M630.56555 633.24048,540.71906 642.82593"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M630.56555 633.24048,655.06775 656.14966"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M695.6908 604.98688,655.06775 656.14966"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M695.6908 604.98688,739.24103 675.49884"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M842.16437 623.88446,814.79492 661.05566"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M842.16437 623.88446,918.35254 744.84167"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M842.16437 623.88446,964.74084 685.43793"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M964.74084 685.43793,1007.2585 746.57202"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M197.74309 687.92969,161.73372 736.7323"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M336.6597 650.0979,304.5611 691.8302"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M336.6597 650.0979,360.59189 692.97302"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M417.88681 656.82776,380.49347 731.70355"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M417.88681 656.82776,466.74203 705.06042"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M417.88681 656.82776,540.71906 642.82593"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M540.71906 642.82593,466.74203 705.06042"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M540.71906 642.82593,553.00958 756.79169"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M655.06775 656.14966,682.91797 716.91833"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M655.06775 656.14966,739.24103 675.49884"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M739.24103 675.49884,682.91797 716.91833"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M739.24103 675.49884,814.79492 661.05566"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M814.79492 661.05566,850.59967 755.49396"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M39.619053 758.44165,58.45089 842.96716"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M39.619053 758.44165,76.220284 754.14948"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M76.220284 754.14948,124.55231 748.44995"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M124.55231 748.44995,116.99824 785.94263"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M124.55231 748.44995,161.73372 736.7323"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M161.73372 736.7323,168.04266 783.63507"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M212.61447 725.10229,168.04266 783.63507"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M212.61447 725.10229,254.65511 717.22382"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M254.65511 717.22382,263.70715 806.45947"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M254.65511 717.22382,304.5611 691.8302"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M304.5611 691.8302,326.36984 725.93677"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M326.36984 725.93677,360.59189 692.97302"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M326.36984 725.93677,263.70715 806.45947"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M326.36984 725.93677,365.57532 775.31812"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M360.59189 692.97302,380.49347 731.70355"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M380.49347 731.70355,365.57532 775.31812"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M380.49347 731.70355,443.37247 796.46484"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M380.49347 731.70355,466.74203 705.06042"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M466.74203 705.06042,495.43552 755.71906"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M495.43552 755.71906,443.37247 796.46484"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M495.43552 755.71906,472.81421 824.14117"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M495.43552 755.71906,553.00958 756.79169"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M553.00958 756.79169,549.88507 810.38483"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M553.00958 756.79169,604.82416 760.83838"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M604.82416 760.83838,595.78821 819.11096"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M604.82416 760.83838,682.91797 716.91833"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M682.91797 716.91833,687.46155 869.10461"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M687.46155 869.10461,595.78821 819.11096"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M687.46155 869.10461,644.1568 909.62103"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M687.46155 869.10461,688.69348 1001.3235"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M687.46155 869.10461,764.10999 810.76776"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M850.59967 755.49396,871.43805 855.27234"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M850.59967 755.49396,918.35254 744.84167"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M918.35254 744.84167,959.10712 818.52643"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M1007.2585 746.57202,1007.7679 869.93182"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M116.99824 785.94263,58.45089 842.96716"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M168.04266 783.63507,134.41104 834.16797"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M168.04266 783.63507,224.90062 845.04382"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M263.70715 806.45947,224.90062 845.04382"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M263.70715 806.45947,280.97235 861.73907"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M365.57532 775.31812,340.18024 838.90002"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M365.57532 775.31812,419.6098 818.3642"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M443.37247 796.46484,419.6098 818.3642"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M443.37247 796.46484,472.81421 824.14117"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M472.81421 824.14117,521.92517 872.38556"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M549.88507 810.38483,521.92517 872.38556"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M595.78821 819.11096,578.03784 929.28149"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M907.69147 969.67072,847.70312 991.42535"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M907.69147 969.67072,871.43805 855.27234"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M907.69147 969.67072,1007.7679 869.93182"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M764.10999 810.76776,739.19427 875.14471"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M871.43805 855.27234,834.70679 879.44421"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M871.43805 855.27234,959.10712 818.52643"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M959.10712 818.52643,1007.7679 869.93182"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M16.796076 855.58215,58.45089 842.96716"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M16.796076 855.58215,55.339531 939.54938"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M134.41104 834.16797,55.339531 939.54938"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M134.41104 834.16797,161.90471 909.13287"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M224.90062 845.04382,161.90471 909.13287"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M280.97235 861.73907,318.33496 913.7627"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M280.97235 861.73907,340.18024 838.90002"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M340.18024 838.90002,318.33496 913.7627"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M340.18024 838.90002,367.06012 851.3075"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M367.06012 851.3075,378.74857 939.42517"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M367.06012 851.3075,419.6098 818.3642"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M419.6098 818.3642,441.6217 891.90863"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M521.92517 872.38556,441.6217 891.90863"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M521.92517 872.38556,451.03909 952.07227"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M521.92517 872.38556,578.03784 929.28149"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M578.03784 929.28149,644.1568 909.62103"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M644.1568 909.62103,688.69348 1001.3235"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M739.19427 875.14471,688.69348 1001.3235"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M739.19427 875.14471,834.70679 879.44421"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M834.70679 879.44421,847.70312 991.42535"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M55.339531 939.54938,96.589531 977.46008"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M96.589531 977.46008,161.90471 909.13287"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M96.589531 977.46008,171.94466 998.83618"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M161.90471 909.13287,171.94466 998.83618"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M171.94466 998.83618,334.20303 943.86353"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M318.33496 913.7627,334.20303 943.86353"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M334.20303 943.86353,378.74857 939.42517"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M378.74857 939.42517,451.03909 952.07227"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M441.6217 891.90863,451.03909 952.07227"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M688.69348 1001.3235,847.70312 991.42535"
            fill="none"
            stroke="gray"
            strokeWidth="5"
          />
          <path
            d="M146.95363 61.076096,174.43199 308.45334"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M146.95363 61.076096,275.17416 256.9953"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M434.79761 34.459274,434.69092 190.67252"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M434.79761 34.459274,499.80444 141.53888"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M952.27789 43.453575,950.45471 210.63693"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M556.24951 90.440384,499.80444 141.53888"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M556.24951 90.440384,700.75604 235.87636"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M556.24951 90.440384,639.16016 67.927223"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M639.16016 67.927223,721.87207 58.313278"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M721.87207 58.313278,779.17072 209.88429"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M721.87207 58.313278,869.66241 157.69121"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M434.69092 190.67252,383.03928 219.23373"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M434.69092 190.67252,504.41446 345.90948"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M434.69092 190.67252,499.80444 141.53888"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M499.80444 141.53888,592.94574 322.65686"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M869.66241 157.69121,779.17072 209.88429"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M869.66241 157.69121,873.3598 258.31061"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M869.66241 157.69121,950.45471 210.63693"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M383.03928 219.23373,275.17416 256.9953"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M383.03928 219.23373,403.06802 373.8869"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M779.17072 209.88429,700.75604 235.87636"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M779.17072 209.88429,798.22974 398.96921"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M950.45471 210.63693,932.05475 321.97729"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M275.17416 256.9953,174.43199 308.45334"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M275.17416 256.9953,302.80154 402.12589"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M700.75604 235.87636,592.94574 322.65686"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M700.75604 235.87636,732.93207 376.95294"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M873.3598 258.31061,859.07739 375.03702"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M174.43199 308.45334,109.72914 391.94711"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M174.43199 308.45334,251.6972 416.23441"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M403.06802 373.8869,338.80798 394.52795"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M403.06802 373.8869,462.49658 476.01227"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M403.06802 373.8869,504.41446 345.90948"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M504.41446 345.90948,516.06781 403.37393"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M504.41446 345.90948,592.94574 322.65686"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M592.94574 322.65686,516.06781 403.37393"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M592.94574 322.65686,619.50409 395.871"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M932.05475 321.97729,887.28424 435.17877"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M932.05475 321.97729,987.10205 446.44778"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M109.72914 391.94711,113.24825 458.66672"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M251.6972 416.23441,113.24825 458.66672"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M251.6972 416.23441,314.38766 609.36237"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M251.6972 416.23441,302.80154 402.12589"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M302.80154 402.12589,338.80798 394.52795"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M516.06781 403.37393,462.49658 476.01227"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M516.06781 403.37393,540.71906 642.82593"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M732.93207 376.95294,619.50409 395.871"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M732.93207 376.95294,735.98645 511.41077"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M732.93207 376.95294,798.22974 398.96921"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M798.22974 398.96921,887.28424 435.17877"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M859.07739 375.03702,887.28424 435.17877"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M54.893803 476.39517,113.24825 458.66672"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M462.49658 476.01227,405.28644 524.77686"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M619.50409 395.871,667.72656 550.26697"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M887.28424 435.17877,987.10205 446.44778"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M887.28424 435.17877,877.52924 524.39978"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M987.10205 446.44778,918.35254 744.84167"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M877.52924 524.39978,735.98645 511.41077"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M877.52924 524.39978,842.16437 623.88446"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M405.28644 524.77686,314.38766 609.36237"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M735.98645 511.41077,667.72656 550.26697"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M735.98645 511.41077,739.24103 675.49884"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M121.31674 638.91956,39.619053 758.44165"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M121.31674 638.91956,244.60786 631.60223"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M244.60786 631.60223,39.619053 758.44165"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M244.60786 631.60223,263.70715 806.45947"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M244.60786 631.60223,314.38766 609.36237"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M314.38766 609.36237,380.49347 731.70355"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M667.72656 550.26697,630.56555 633.24048"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M788.69983 735.85101,739.24103 675.49884"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M788.69983 735.85101,739.19427 875.14471"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M788.69983 735.85101,847.70312 991.42535"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M788.69983 735.85101,918.35254 744.84167"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M788.69983 735.85101,842.16437 623.88446"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M630.56555 633.24048,540.71906 642.82593"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M630.56555 633.24048,604.82416 760.83838"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M842.16437 623.88446,788.69983 735.85101"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M842.16437 623.88446,918.35254 744.84167"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M540.71906 642.82593,466.74203 705.06042"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M540.71906 642.82593,553.00958 756.79169"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M739.24103 675.49884,604.82416 760.83838"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M39.619053 758.44165,116.99824 785.94263"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M380.49347 731.70355,280.97235 861.73907"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M380.49347 731.70355,521.92517 872.38556"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M380.49347 731.70355,466.74203 705.06042"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M466.74203 705.06042,553.00958 756.79169"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M553.00958 756.79169,521.92517 872.38556"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M553.00958 756.79169,604.82416 760.83838"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M604.82416 760.83838,578.03784 929.28149"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M604.82416 760.83838,739.24103 675.49884"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M918.35254 744.84167,847.70312 991.42535"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M116.99824 785.94263,16.796076 855.58215"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M116.99824 785.94263,161.90471 909.13287"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M263.70715 806.45947,161.90471 909.13287"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M263.70715 806.45947,280.97235 861.73907"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M16.796076 855.58215,96.589531 977.46008"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M280.97235 861.73907,96.589531 977.46008"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M280.97235 861.73907,521.92517 872.38556"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M521.92517 872.38556,578.03784 929.28149"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M578.03784 929.28149,739.19427 875.14471"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M96.589531 977.46008,161.90471 909.13287"
            fill="none"
            stroke="cyan"
            strokeWidth="5"
          />
          <path
            d="M146.95363 61.076096,275.17416 256.9953"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M556.24951 90.440384,275.17416 256.9953"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M556.24951 90.440384,592.94574 322.65686"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M556.24951 90.440384,859.07739 375.03702"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M275.17416 256.9953,109.72914 391.94711"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M275.17416 256.9953,338.80798 394.52795"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M592.94574 322.65686,338.80798 394.52795"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M592.94574 322.65686,405.28644 524.77686"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M592.94574 322.65686,859.07739 375.03702"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M338.80798 394.52795,405.28644 524.77686"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M338.80798 394.52795,54.893803 476.39517"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M859.07739 375.03702,540.71906 642.82593"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M859.07739 375.03702,788.69983 735.85101"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M405.28644 524.77686,116.99824 785.94263"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M405.28644 524.77686,380.49347 731.70355"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M788.69983 735.85101,540.71906 642.82593"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M788.69983 735.85101,578.03784 929.28149"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M540.71906 642.82593,380.49347 731.70355"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M380.49347 731.70355,116.99824 785.94263"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M380.49347 731.70355,578.03784 929.28149"
            fill="none"
            stroke="red"
            strokeWidth="5"
          />
          <path
            d="M877.52924 524.39978,618.19904 457.48734"
            fill="none"
            stroke="black"
            strokeWidth="5"
          />
          <path
            d="M618.19904 457.48734,604.82416 760.83838"
            fill="none"
            stroke="black"
            strokeWidth="5"
          />
          <path
            d="M604.82416 760.83838,334.20303 943.86353"
            fill="none"
            stroke="black"
            strokeWidth="5"
          />
          <circle
            id="mapnode-1"
            cx="146.95363"
            cy="61.076096"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="137.95363"
            y="64.076096"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            1
          </text>
          <circle
            id="mapnode-2"
            cx="321.50552"
            cy="36.924683"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="312.50552"
            y="39.924683"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            2
          </text>
          <circle
            id="mapnode-3"
            cx="434.79761"
            cy="34.459274"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="425.79761"
            y="37.459274"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            3
          </text>
          <circle
            id="mapnode-4"
            cx="504.95227"
            cy="23.804806"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="495.95227"
            y="26.804806"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            4
          </text>
          <circle
            id="mapnode-5"
            cx="782.21185"
            cy="34.223984"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="773.21185"
            y="37.223984"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            5
          </text>
          <circle
            id="mapnode-6"
            cx="869.35254"
            cy="33.290138"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="860.35254"
            y="36.290138"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            6
          </text>
          <circle
            id="mapnode-7"
            cx="952.27789"
            cy="43.453575"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="943.27789"
            y="46.453575"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            7
          </text>
          <circle
            id="mapnode-8"
            cx="108.56148"
            cy="117.09702"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="99.56148"
            y="120.09702"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            8
          </text>
          <circle
            id="mapnode-9"
            cx="178.98067"
            cy="115.86467"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="169.98067"
            y="118.86467"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            9
          </text>
          <circle
            id="mapnode-10"
            cx="378.99841"
            cy="100.69551"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="369.99841"
            y="103.69551"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            10
          </text>
          <circle
            id="mapnode-11"
            cx="431.57043"
            cy="109.498"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="422.57043"
            y="112.498"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            11
          </text>
          <circle
            id="mapnode-12"
            cx="475.96646"
            cy="96.624352"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="466.96646"
            y="99.624352"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            12
          </text>
          <circle
            id="mapnode-13"
            cx="556.24951"
            cy="90.440384"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="547.24951"
            y="93.440384"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            13
          </text>
          <circle
            id="mapnode-14"
            cx="639.16016"
            cy="67.927223"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="630.16016"
            y="70.927223"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            14
          </text>
          <circle
            id="mapnode-15"
            cx="721.87207"
            cy="58.313278"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="712.87207"
            y="61.313278"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            15
          </text>
          <circle
            id="mapnode-16"
            cx="802.14563"
            cy="98.218048"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="793.14563"
            y="101.218048"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            16
          </text>
          <circle
            id="mapnode-17"
            cx="946.83337"
            cy="130.9677"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="937.83337"
            y="133.9677"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            17
          </text>
          <circle
            id="mapnode-18"
            cx="71.859413"
            cy="159.61589"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="62.859413"
            y="162.61589"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            18
          </text>
          <circle
            id="mapnode-19"
            cx="135.42819"
            cy="167.50096"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="126.42819"
            y="170.50096"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            19
          </text>
          <circle
            id="mapnode-20"
            cx="216.5172"
            cy="136.85501"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="207.5172"
            y="139.85501"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            20
          </text>
          <circle
            id="mapnode-21"
            cx="299.96857"
            cy="180.67493"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="290.96857"
            y="183.67493"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            21
          </text>
          <circle
            id="mapnode-22"
            cx="434.69092"
            cy="190.67252"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="425.69092"
            y="193.67252"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            22
          </text>
          <circle
            id="mapnode-23"
            cx="499.80444"
            cy="141.53888"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="490.80444"
            y="144.53888"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            23
          </text>
          <circle
            id="mapnode-24"
            cx="603.79456"
            cy="147.62567"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="594.79456"
            y="150.62567"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            24
          </text>
          <circle
            id="mapnode-25"
            cx="649.79126"
            cy="163.15764"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="640.79126"
            y="166.15764"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            25
          </text>
          <circle
            id="mapnode-26"
            cx="716.15356"
            cy="94.843628"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="707.15356"
            y="97.843628"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            26
          </text>
          <circle
            id="mapnode-27"
            cx="726.44342"
            cy="147.89021"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="717.44342"
            y="150.89021"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            27
          </text>
          <circle
            id="mapnode-28"
            cx="757.1076"
            cy="129.02621"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="748.1076"
            y="132.02621"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            28
          </text>
          <circle
            id="mapnode-29"
            cx="869.66241"
            cy="157.69121"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="860.66241"
            y="160.69121"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            29
          </text>
          <circle
            id="mapnode-30"
            cx="975.65985"
            cy="152.17581"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="966.65985"
            y="155.17581"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            30
          </text>
          <circle
            id="mapnode-31"
            cx="97.253754"
            cy="199.17503"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="88.253754"
            y="202.17503"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            31
          </text>
          <circle
            id="mapnode-32"
            cx="192.19846"
            cy="225.69246"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="183.19846"
            y="228.69246"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            32
          </text>
          <circle
            id="mapnode-33"
            cx="262.73459"
            cy="206.88477"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="253.73459000000003"
            y="209.88477"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            33
          </text>
          <circle
            id="mapnode-34"
            cx="383.03928"
            cy="219.23373"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="374.03928"
            y="222.23373"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            34
          </text>
          <circle
            id="mapnode-35"
            cx="455.81717"
            cy="239.55623"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="446.81717"
            y="242.55623"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            35
          </text>
          <circle
            id="mapnode-36"
            cx="486.21323"
            cy="244.57619"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="477.21323"
            y="247.57619"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            36
          </text>
          <circle
            id="mapnode-37"
            cx="528.96265"
            cy="191.85478"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="519.96265"
            y="194.85478"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            37
          </text>
          <circle
            id="mapnode-38"
            cx="625.68079"
            cy="195.43672"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="616.68079"
            y="198.43672"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            38
          </text>
          <circle
            id="mapnode-39"
            cx="669.30627"
            cy="186.48553"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="660.30627"
            y="189.48553"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            39
          </text>
          <circle
            id="mapnode-40"
            cx="745.3125"
            cy="229.47316"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="736.3125"
            y="232.47316"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            40
          </text>
          <circle
            id="mapnode-41"
            cx="779.17072"
            cy="209.88429"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="770.17072"
            y="212.88429"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            41
          </text>
          <circle
            id="mapnode-42"
            cx="950.45471"
            cy="210.63693"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="941.45471"
            y="213.63693"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            42
          </text>
          <circle
            id="mapnode-43"
            cx="52.591331"
            cy="247.02478"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="43.591331"
            y="250.02478"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            43
          </text>
          <circle
            id="mapnode-44"
            cx="145.70999"
            cy="271.10458"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="136.70999"
            y="274.10458"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            44
          </text>
          <circle
            id="mapnode-45"
            cx="214.79053"
            cy="283.10504"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="205.79053"
            y="286.10504"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            45
          </text>
          <circle
            id="mapnode-46"
            cx="275.17416"
            cy="256.9953"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="266.17416"
            y="259.9953"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            46
          </text>
          <circle
            id="mapnode-47"
            cx="320.05286"
            cy="238.58875"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="311.05286"
            y="241.58875"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            47
          </text>
          <circle
            id="mapnode-48"
            cx="396.33963"
            cy="283.30963"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="387.33963"
            y="286.30963"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            48
          </text>
          <circle
            id="mapnode-49"
            cx="510.01608"
            cy="280.93188"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="501.01608"
            y="283.93188"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            49
          </text>
          <circle
            id="mapnode-50"
            cx="558.06464"
            cy="241.32014"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="549.06464"
            y="244.32014"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            50
          </text>
          <circle
            id="mapnode-51"
            cx="654.62201"
            cy="252.35388"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="645.62201"
            y="255.35388"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            51
          </text>
          <circle
            id="mapnode-52"
            cx="700.75604"
            cy="235.87636"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="691.75604"
            y="238.87636"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            52
          </text>
          <circle
            id="mapnode-53"
            cx="753.57025"
            cy="276.11069"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="744.57025"
            y="279.11069"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            53
          </text>
          <circle
            id="mapnode-54"
            cx="789.13385"
            cy="259.43298"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="780.13385"
            y="262.43298"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            54
          </text>
          <circle
            id="mapnode-55"
            cx="873.3598"
            cy="258.31061"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="864.3598"
            y="261.31061"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            55
          </text>
          <circle
            id="mapnode-56"
            cx="982.45325"
            cy="271.28653"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="973.45325"
            y="274.28653"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            56
          </text>
          <circle
            id="mapnode-57"
            cx="82.286629"
            cy="293.68863"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="73.286629"
            y="296.68863"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            57
          </text>
          <circle
            id="mapnode-58"
            cx="174.43199"
            cy="308.45334"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="165.43199"
            y="311.45334"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            58
          </text>
          <circle
            id="mapnode-59"
            cx="189.20694"
            cy="334.27368"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="180.20694"
            y="337.27368"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            59
          </text>
          <circle
            id="mapnode-60"
            cx="226.73618"
            cy="327.16241"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="217.73618"
            y="330.16241"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            60
          </text>
          <circle
            id="mapnode-61"
            cx="288.41095"
            cy="337.3938"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="279.41095"
            y="340.3938"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            61
          </text>
          <circle
            id="mapnode-62"
            cx="321.95636"
            cy="321.54617"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="312.95636"
            y="324.54617"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            62
          </text>
          <circle
            id="mapnode-63"
            cx="403.06802"
            cy="373.8869"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="394.06802"
            y="376.8869"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            63
          </text>
          <circle
            id="mapnode-64"
            cx="454.00867"
            cy="361.67966"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="445.00867"
            y="364.67966"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            64
          </text>
          <circle
            id="mapnode-65"
            cx="504.41446"
            cy="345.90948"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="495.41446"
            y="348.90948"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            65
          </text>
          <circle
            id="mapnode-66"
            cx="535.83643"
            cy="336.37375"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="526.83643"
            y="339.37375"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            66
          </text>
          <circle
            id="mapnode-67"
            cx="592.94574"
            cy="322.65686"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="583.94574"
            y="325.65686"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            67
          </text>
          <circle
            id="mapnode-68"
            cx="659.23279"
            cy="302.97595"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="650.23279"
            y="305.97595"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            68
          </text>
          <circle
            id="mapnode-69"
            cx="719.7384"
            cy="297.16681"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="710.7384"
            y="300.16681"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            69
          </text>
          <circle
            id="mapnode-70"
            cx="794.14508"
            cy="313.46014"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="785.14508"
            y="316.46014"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            70
          </text>
          <circle
            id="mapnode-71"
            cx="862.23547"
            cy="313.48062"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="853.23547"
            y="316.48062"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            71
          </text>
          <circle
            id="mapnode-72"
            cx="932.05475"
            cy="321.97729"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="923.05475"
            y="324.97729"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            72
          </text>
          <circle
            id="mapnode-73"
            cx="81.583687"
            cy="344.7608"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="72.583687"
            y="347.7608"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            73
          </text>
          <circle
            id="mapnode-74"
            cx="109.72914"
            cy="391.94711"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="100.72914"
            y="394.94711"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            74
          </text>
          <circle
            id="mapnode-75"
            cx="156.14526"
            cy="375.99426"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="147.14526"
            y="378.99426"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            75
          </text>
          <circle
            id="mapnode-76"
            cx="215.93044"
            cy="373.16641"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="206.93044"
            y="376.16641"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            76
          </text>
          <circle
            id="mapnode-77"
            cx="251.6972"
            cy="416.23441"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="242.6972"
            y="419.23441"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            77
          </text>
          <circle
            id="mapnode-78"
            cx="302.80154"
            cy="402.12589"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="293.80154"
            y="405.12589"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            78
          </text>
          <circle
            id="mapnode-79"
            cx="338.80798"
            cy="394.52795"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="329.80798"
            y="397.52795"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            79
          </text>
          <circle
            id="mapnode-80"
            cx="418.71542"
            cy="414.64731"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="409.71542"
            y="417.64731"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            80
          </text>
          <circle
            id="mapnode-81"
            cx="488.83429"
            cy="428.3905"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="479.83429"
            y="431.3905"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            81
          </text>
          <circle
            id="mapnode-82"
            cx="516.06781"
            cy="403.37393"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="507.06781"
            y="406.37393"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            82
          </text>
          <circle
            id="mapnode-83"
            cx="580.67566"
            cy="386.85696"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="571.67566"
            y="389.85696"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            83
          </text>
          <circle
            id="mapnode-84"
            cx="627.72021"
            cy="360.44183"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="618.72021"
            y="363.44183"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            84
          </text>
          <circle
            id="mapnode-85"
            cx="664.59619"
            cy="342.46494"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="655.59619"
            y="345.46494"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            85
          </text>
          <circle
            id="mapnode-86"
            cx="732.93207"
            cy="376.95294"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="723.93207"
            y="379.95294"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            86
          </text>
          <circle
            id="mapnode-87"
            cx="798.22974"
            cy="398.96921"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="789.22974"
            y="401.96921"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            87
          </text>
          <circle
            id="mapnode-88"
            cx="833.466"
            cy="407.1897"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="824.466"
            y="410.1897"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            88
          </text>
          <circle
            id="mapnode-89"
            cx="859.07739"
            cy="375.03702"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="850.07739"
            y="378.03702"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            89
          </text>
          <circle
            id="mapnode-90"
            cx="904.9104"
            cy="376.68112"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="895.9104"
            y="379.68112"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            90
          </text>
          <circle
            id="mapnode-91"
            cx="973.00665"
            cy="379.27951"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="964.00665"
            y="382.27951"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            91
          </text>
          <circle
            id="mapnode-92"
            cx="51.168648"
            cy="441.69525"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="42.168648"
            y="444.69525"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            92
          </text>
          <circle
            id="mapnode-93"
            cx="54.893803"
            cy="476.39517"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="45.893803"
            y="479.39517"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            93
          </text>
          <circle
            id="mapnode-94"
            cx="113.24825"
            cy="458.66672"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="104.24825"
            y="461.66672"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            94
          </text>
          <circle
            id="mapnode-95"
            cx="146.08047"
            cy="449.94495"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="137.08047"
            y="452.94495"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            95
          </text>
          <circle
            id="mapnode-96"
            cx="288.79532"
            cy="473.44312"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="279.79532"
            y="476.44312"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            96
          </text>
          <circle
            id="mapnode-97"
            cx="312.03918"
            cy="464.45685"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="303.03918"
            y="467.45685"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            97
          </text>
          <circle
            id="mapnode-98"
            cx="355.72827"
            cy="440.56119"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="346.72827"
            y="443.56119"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            98
          </text>
          <circle
            id="mapnode-99"
            cx="396.6553"
            cy="446.04736"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="387.6553"
            y="449.04736"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            99
          </text>
          <circle
            id="mapnode-100"
            cx="462.49658"
            cy="476.01227"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="453.49658"
            y="479.01227"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            100
          </text>
          <circle
            id="mapnode-101"
            cx="531.83655"
            cy="441.68503"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="522.83655"
            y="444.68503"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            101
          </text>
          <circle
            id="mapnode-102"
            cx="619.50409"
            cy="395.871"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="610.50409"
            y="398.871"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            102
          </text>
          <circle
            id="mapnode-103"
            cx="675.08331"
            cy="383.37003"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="666.08331"
            y="386.37003"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            103
          </text>
          <circle
            id="mapnode-104"
            cx="732.0874"
            cy="418.34909"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="723.0874"
            y="421.34909"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            104
          </text>
          <circle
            id="mapnode-105"
            cx="887.28424"
            cy="435.17877"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="878.28424"
            y="438.17877"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            105
          </text>
          <circle
            id="mapnode-106"
            cx="943.91125"
            cy="446.78683"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="934.91125"
            y="449.78683"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            106
          </text>
          <circle
            id="mapnode-107"
            cx="987.10205"
            cy="446.44778"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="978.10205"
            y="449.44778"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            107
          </text>
          <circle
            id="mapnode-108"
            cx="877.52924"
            cy="524.39978"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="868.52924"
            y="527.39978"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            108
          </text>
          <circle
            id="mapnode-109"
            cx="328.33691"
            cy="542.69537"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="319.33691"
            y="545.69537"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            109
          </text>
          <circle
            id="mapnode-110"
            cx="378.57172"
            cy="482.39136"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="369.57172"
            y="485.39136"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            110
          </text>
          <circle
            id="mapnode-111"
            cx="405.28644"
            cy="524.77686"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="396.28644"
            y="527.77686"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            111
          </text>
          <circle
            id="mapnode-112"
            cx="424.6561"
            cy="508.62238"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="415.6561"
            y="511.62238"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            112
          </text>
          <circle
            id="mapnode-113"
            cx="493.03732"
            cy="512.60327"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="484.03732"
            y="515.60327"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            113
          </text>
          <circle
            id="mapnode-114"
            cx="541.31824"
            cy="489.30679"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="532.31824"
            y="492.30679"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            114
          </text>
          <circle
            id="mapnode-115"
            cx="618.19904"
            cy="457.48734"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="609.19904"
            y="460.48734"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            115
          </text>
          <circle
            id="mapnode-116"
            cx="735.98645"
            cy="511.41077"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="726.98645"
            y="514.41077"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            116
          </text>
          <circle
            id="mapnode-117"
            cx="816.93591"
            cy="551.87891"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="807.93591"
            y="554.87891"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            117
          </text>
          <circle
            id="mapnode-118"
            cx="737.55017"
            cy="575.46326"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="728.55017"
            y="578.46326"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            118
          </text>
          <circle
            id="mapnode-119"
            cx="985.07355"
            cy="592.52826"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="976.07355"
            y="595.52826"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            119
          </text>
          <circle
            id="mapnode-120"
            cx="37.149261"
            cy="638.71637"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="28.149261000000003"
            y="641.71637"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            120
          </text>
          <circle
            id="mapnode-121"
            cx="72.201385"
            cy="641.7854"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="63.201385"
            y="644.7854"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            121
          </text>
          <circle
            id="mapnode-122"
            cx="121.31674"
            cy="638.91956"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="112.31674"
            y="641.91956"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            122
          </text>
          <circle
            id="mapnode-123"
            cx="244.60786"
            cy="631.60223"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="235.60786"
            y="634.60223"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            123
          </text>
          <circle
            id="mapnode-124"
            cx="314.38766"
            cy="609.36237"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="305.38766"
            y="612.36237"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            124
          </text>
          <circle
            id="mapnode-125"
            cx="446.45462"
            cy="551.26221"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="437.45462"
            y="554.26221"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            125
          </text>
          <circle
            id="mapnode-126"
            cx="574.40765"
            cy="522.68268"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="565.40765"
            y="525.68268"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            126
          </text>
          <circle
            id="mapnode-127"
            cx="667.72656"
            cy="550.26697"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="658.72656"
            y="553.26697"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            127
          </text>
          <circle
            id="mapnode-128"
            cx="788.69983"
            cy="735.85101"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="779.69983"
            y="738.85101"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            128
          </text>
          <circle
            id="mapnode-129"
            cx="811.63531"
            cy="585.98547"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="802.63531"
            y="588.98547"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            129
          </text>
          <circle
            id="mapnode-130"
            cx="423.67401"
            cy="616.98218"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="414.67401"
            y="619.98218"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            130
          </text>
          <circle
            id="mapnode-131"
            cx="463.5108"
            cy="580.00537"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="454.5108"
            y="583.00537"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            131
          </text>
          <circle
            id="mapnode-132"
            cx="542.43475"
            cy="577.53119"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="533.43475"
            y="580.53119"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            132
          </text>
          <circle
            id="mapnode-133"
            cx="630.56555"
            cy="633.24048"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="621.56555"
            y="636.24048"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            133
          </text>
          <circle
            id="mapnode-134"
            cx="695.6908"
            cy="604.98688"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="686.6908"
            y="607.98688"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            134
          </text>
          <circle
            id="mapnode-135"
            cx="842.16437"
            cy="623.88446"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="833.16437"
            y="626.88446"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            135
          </text>
          <circle
            id="mapnode-136"
            cx="964.74084"
            cy="685.43793"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="955.74084"
            y="688.43793"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            136
          </text>
          <circle
            id="mapnode-137"
            cx="197.74309"
            cy="687.92969"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="188.74309"
            y="690.92969"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            137
          </text>
          <circle
            id="mapnode-138"
            cx="336.6597"
            cy="650.0979"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="327.6597"
            y="653.0979"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            138
          </text>
          <circle
            id="mapnode-139"
            cx="417.88681"
            cy="656.82776"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="408.88681"
            y="659.82776"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            139
          </text>
          <circle
            id="mapnode-140"
            cx="540.71906"
            cy="642.82593"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="531.71906"
            y="645.82593"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            140
          </text>
          <circle
            id="mapnode-141"
            cx="655.06775"
            cy="656.14966"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="646.06775"
            y="659.14966"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            141
          </text>
          <circle
            id="mapnode-142"
            cx="739.24103"
            cy="675.49884"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="730.24103"
            y="678.49884"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            142
          </text>
          <circle
            id="mapnode-143"
            cx="814.79492"
            cy="661.05566"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="805.79492"
            y="664.05566"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            143
          </text>
          <circle
            id="mapnode-144"
            cx="39.619053"
            cy="758.44165"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="30.619053"
            y="761.44165"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            144
          </text>
          <circle
            id="mapnode-145"
            cx="76.220284"
            cy="754.14948"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="67.220284"
            y="757.14948"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            145
          </text>
          <circle
            id="mapnode-146"
            cx="124.55231"
            cy="748.44995"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="115.55231"
            y="751.44995"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            146
          </text>
          <circle
            id="mapnode-147"
            cx="161.73372"
            cy="736.7323"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="152.73372"
            y="739.7323"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            147
          </text>
          <circle
            id="mapnode-148"
            cx="212.61447"
            cy="725.10229"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="203.61447"
            y="728.10229"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            148
          </text>
          <circle
            id="mapnode-149"
            cx="254.65511"
            cy="717.22382"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="245.65511"
            y="720.22382"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            149
          </text>
          <circle
            id="mapnode-150"
            cx="304.5611"
            cy="691.8302"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="295.5611"
            y="694.8302"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            150
          </text>
          <circle
            id="mapnode-151"
            cx="326.36984"
            cy="725.93677"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="317.36984"
            y="728.93677"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            151
          </text>
          <circle
            id="mapnode-152"
            cx="360.59189"
            cy="692.97302"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="351.59189"
            y="695.97302"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            152
          </text>
          <circle
            id="mapnode-153"
            cx="380.49347"
            cy="731.70355"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="371.49347"
            y="734.70355"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            153
          </text>
          <circle
            id="mapnode-154"
            cx="466.74203"
            cy="705.06042"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="457.74203"
            y="708.06042"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            154
          </text>
          <circle
            id="mapnode-155"
            cx="495.43552"
            cy="755.71906"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="486.43552"
            y="758.71906"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            155
          </text>
          <circle
            id="mapnode-156"
            cx="553.00958"
            cy="756.79169"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="544.00958"
            y="759.79169"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            156
          </text>
          <circle
            id="mapnode-157"
            cx="604.82416"
            cy="760.83838"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="595.82416"
            y="763.83838"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            157
          </text>
          <circle
            id="mapnode-158"
            cx="682.91797"
            cy="716.91833"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="673.91797"
            y="719.91833"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            158
          </text>
          <circle
            id="mapnode-159"
            cx="687.46155"
            cy="869.10461"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="678.46155"
            y="872.10461"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            159
          </text>
          <circle
            id="mapnode-160"
            cx="850.59967"
            cy="755.49396"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="841.59967"
            y="758.49396"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            160
          </text>
          <circle
            id="mapnode-161"
            cx="918.35254"
            cy="744.84167"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="909.35254"
            y="747.84167"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            161
          </text>
          <circle
            id="mapnode-162"
            cx="1007.2585"
            cy="746.57202"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="998.2585"
            y="749.57202"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            162
          </text>
          <circle
            id="mapnode-163"
            cx="116.99824"
            cy="785.94263"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="107.99824"
            y="788.94263"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            163
          </text>
          <circle
            id="mapnode-164"
            cx="168.04266"
            cy="783.63507"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="159.04266"
            y="786.63507"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            164
          </text>
          <circle
            id="mapnode-165"
            cx="263.70715"
            cy="806.45947"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="254.70715"
            y="809.45947"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            165
          </text>
          <circle
            id="mapnode-166"
            cx="365.57532"
            cy="775.31812"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="356.57532"
            y="778.31812"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            166
          </text>
          <circle
            id="mapnode-167"
            cx="443.37247"
            cy="796.46484"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="434.37247"
            y="799.46484"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            167
          </text>
          <circle
            id="mapnode-168"
            cx="472.81421"
            cy="824.14117"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="463.81421"
            y="827.14117"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            168
          </text>
          <circle
            id="mapnode-169"
            cx="549.88507"
            cy="810.38483"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="540.88507"
            y="813.38483"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            169
          </text>
          <circle
            id="mapnode-170"
            cx="595.78821"
            cy="819.11096"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="586.78821"
            y="822.11096"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            170
          </text>
          <circle
            id="mapnode-171"
            cx="907.69147"
            cy="969.67072"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="898.69147"
            y="972.67072"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            171
          </text>
          <circle
            id="mapnode-172"
            cx="764.10999"
            cy="810.76776"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="755.10999"
            y="813.76776"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            172
          </text>
          <circle
            id="mapnode-173"
            cx="871.43805"
            cy="855.27234"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="862.43805"
            y="858.27234"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            173
          </text>
          <circle
            id="mapnode-174"
            cx="959.10712"
            cy="818.52643"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="950.10712"
            y="821.52643"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            174
          </text>
          <circle
            id="mapnode-175"
            cx="1007.7679"
            cy="869.93182"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="998.7679"
            y="872.93182"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            175
          </text>
          <circle
            id="mapnode-176"
            cx="16.796076"
            cy="855.58215"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="7.796075999999999"
            y="858.58215"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            176
          </text>
          <circle
            id="mapnode-177"
            cx="58.45089"
            cy="842.96716"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="49.45089"
            y="845.96716"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            177
          </text>
          <circle
            id="mapnode-178"
            cx="134.41104"
            cy="834.16797"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="125.41104000000001"
            y="837.16797"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            178
          </text>
          <circle
            id="mapnode-179"
            cx="224.90062"
            cy="845.04382"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="215.90062"
            y="848.04382"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            179
          </text>
          <circle
            id="mapnode-180"
            cx="280.97235"
            cy="861.73907"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="271.97235"
            y="864.73907"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            180
          </text>
          <circle
            id="mapnode-181"
            cx="340.18024"
            cy="838.90002"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="331.18024"
            y="841.90002"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            181
          </text>
          <circle
            id="mapnode-182"
            cx="367.06012"
            cy="851.3075"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="358.06012"
            y="854.3075"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            182
          </text>
          <circle
            id="mapnode-183"
            cx="419.6098"
            cy="818.3642"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="410.6098"
            y="821.3642"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            183
          </text>
          <circle
            id="mapnode-184"
            cx="521.92517"
            cy="872.38556"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="512.92517"
            y="875.38556"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            184
          </text>
          <circle
            id="mapnode-185"
            cx="578.03784"
            cy="929.28149"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="569.03784"
            y="932.28149"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            185
          </text>
          <circle
            id="mapnode-186"
            cx="644.1568"
            cy="909.62103"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="635.1568"
            y="912.62103"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            186
          </text>
          <circle
            id="mapnode-187"
            cx="739.19427"
            cy="875.14471"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="730.19427"
            y="878.14471"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            187
          </text>
          <circle
            id="mapnode-188"
            cx="834.70679"
            cy="879.44421"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="825.70679"
            y="882.44421"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            188
          </text>
          <circle
            id="mapnode-189"
            cx="55.339531"
            cy="939.54938"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="46.339531"
            y="942.54938"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            189
          </text>
          <circle
            id="mapnode-190"
            cx="96.589531"
            cy="977.46008"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="87.589531"
            y="980.46008"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            190
          </text>
          <circle
            id="mapnode-191"
            cx="161.90471"
            cy="909.13287"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="152.90471"
            y="912.13287"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            191
          </text>
          <circle
            id="mapnode-192"
            cx="171.94466"
            cy="998.83618"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="162.94466"
            y="1001.83618"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            192
          </text>
          <circle
            id="mapnode-193"
            cx="318.33496"
            cy="913.7627"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="309.33496"
            y="916.7627"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            193
          </text>
          <circle
            id="mapnode-194"
            cx="334.20303"
            cy="943.86353"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="325.20303"
            y="946.86353"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            194
          </text>
          <circle
            id="mapnode-195"
            cx="378.74857"
            cy="939.42517"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="369.74857"
            y="942.42517"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            195
          </text>
          <circle
            id="mapnode-196"
            cx="441.6217"
            cy="891.90863"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="432.6217"
            y="894.90863"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            196
          </text>
          <circle
            id="mapnode-197"
            cx="451.03909"
            cy="952.07227"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="442.03909"
            y="955.07227"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            197
          </text>
          <circle
            id="mapnode-198"
            cx="688.69348"
            cy="1001.3235"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="679.69348"
            y="1004.3235"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            198
          </text>
          <circle
            id="mapnode-199"
            cx="847.70312"
            cy="991.42535"
            r="12"
            fill="white"
            stroke="black"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              onClickNode(parseInt(target.id.substring(8)));
            }}
          />
          <text
            x="838.70312"
            y="994.42535"
            fontFamily="sans-serif"
            fontSize="12"
            style={{ pointerEvents: "none" }}
          >
            199
          </text>
        </svg>
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
