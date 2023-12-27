import { NextResponse, NextRequest } from "next/server";

const data = `{
    "phase": 3,
    "turn": 0,
    "nowPosition": [
        {
            "name": "Alice"
        },
        {
            "name": "Bob",
            "position": 15
        },
        {
            "name": "Charlie",
            "position": 130
        },
        {
            "name": "Dave",
            "position": 105
        },
        {
            "name": "Eve",
            "position": 112
        },
        {
            "name": "Frank",
            "position": 139
        }
    ],
    "history": [
        {
            "phase": 0,
            "player": [
                {
                    "name": "Alice"
                },
                {
                    "name": "Bob",
                    "position": 12,
                    "selectedTicket": "TAXI"
                },
                {
                    "name": "Charlie",
                    "position": 123,
                    "selectedTicket": "BUS"
                },
                {
                    "name": "Dave",
                    "position": 101,
                    "selectedTicket": "UNDERGROUND"
                },
                {
                    "name": "Eve",
                    "position": 112,
                    "selectedTicket": "TAXI"
                },
                {
                    "name": "Frank",
                    "position": 134,
                    "selectedTicket": "TAXI"
                }
            ]
        },
        {
            "phase": 1,
            "player": [
                {
                    "name": "Alice"
                },
                {
                    "name": "Bob",
                    "position": 15,
                    "selectedTicket": "TAXI"
                },
                {
                    "name": "Charlie",
                    "position": 125,
                    "selectedTicket": "TAXI"
                },
                {
                    "name": "Dave",
                    "position": 105,
                    "selectedTicket": "BUS"
                },
                {
                    "name": "Eve",
                    "position": 115,
                    "selectedTicket": "UNDERGROUND"
                },
                {
                    "name": "Frank",
                    "position": 135,
                    "selectedTicket": "TAXI"
                }
            ]
        },
        {
            "phase": 2,
            "player": [
                {
                    "name": "Alice",
                    "position": 4
                },
                {
                    "name": "Bob",
                    "position": 4,
                    "selectedTicket": "TAXI"
                },
                {
                    "name": "Charlie",
                    "position": 124,
                    "selectedTicket": "TAXI"
                },
                {
                    "name": "Dave",
                    "position": 104,
                    "selectedTicket": "TAXI"
                },
                {
                    "name": "Eve",
                    "position": 114,
                    "selectedTicket": "TAXI"
                },
                {
                    "name": "Frank",
                    "position": 134,
                    "selectedTicket": "TAXI"
                }
            ]
        },
        {
            "phase": 3,
            "player": [
                {
                    "name": "Alice"
                },
                {
                    "name": "Bob",
                    "position": 10,
                    "selectedTicket": "TAXI"
                },
                {
                    "name": "Charlie"
                },
                {
                    "name": "Dave"
                },
                {
                    "name": "Eve"
                },
                {
                    "name": "Frank"
                }
            ]
        }
    ]
}`;

export async function GET() {
  return NextResponse.json(JSON.parse(data));
}
