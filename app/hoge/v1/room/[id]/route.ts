import { NextResponse, NextRequest } from "next/server";

const data = `{
    "roomName": "room1"
}`;

export async function GET() {
  return NextResponse.json(JSON.parse(data));
}
