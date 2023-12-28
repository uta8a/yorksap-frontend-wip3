import { NextResponse, NextRequest } from "next/server";

const data = `{
    "turn": 0,
    "accessToken": "test-token"
}`;

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json(JSON.parse(data));
}
