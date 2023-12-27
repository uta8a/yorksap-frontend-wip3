import { NextResponse, NextRequest } from "next/server";

const data1 = `{
    "roomlist": [
        {
            "id": "aa317643-a121-49e8-a7f9-6698a7a8be31",
            "name": "room1"
        },
        {
            "id": "efc85b80-8c54-4bf4-a5c0-9855a7952c45",
            "name": "wakuwaku-yorkland"
        },
        {
            "id": "8a3cba69-a048-409a-a4cb-0f79b3bd1a95",
            "name": "welcome room"
        }
    ]
}`;

const data2 = `{
    "roomlist": [
        {
            "id": "aa317643-a121-49e8-a7f9-6698a7a8be31",
            "name": "room1"
        },
        {
            "id": "efc85b80-8c54-4bf4-a5c0-9855a7952c45",
            "name": "wakuwaku-yorkland"
        },
        {
            "id": "8a3cba69-a048-409a-a4cb-0f79b3bd1a95",
            "name": "welcome room"
        }
    ]
}`;

export async function GET() {
  return NextResponse.json(JSON.parse(data1));
}

export async function POST(req: NextRequest) {
  console.log(req.body);
  return NextResponse.json(JSON.parse(data2));
}
