import { NextResponse, NextRequest } from "next/server";

const data = `{}`;

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json(JSON.parse(data));
}
