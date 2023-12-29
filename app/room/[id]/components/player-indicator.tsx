import React from "react";

type Props = {
  color: string;
  icon?: string;
  width?: number;
  raw?: boolean;
};

export const PlayerIndicator = ({color, icon, width, raw}: Props) => {
  const clipPathId = `player-clipPath-${Math.random()}`;
  const content = icon ? (
    <>
      <defs>
        <clipPath id={clipPathId}>
          <circle cx="12" cy="9" r="10" />
        </clipPath>
      </defs>
      <path d="m12,24 -4,-5 8,0z" fill={color} />
      <circle cx="12" cy="9" r="11" fill={color} strokeWidth="1" />
      <image href={icon} x="2" y="-1" height="20" width="20" clipPath={`url(#${clipPathId})`} />
    </>
  ) : (
    <>
      <circle
        cx="12"
        cy="6"
        r="5"
        stroke="black"
        strokeWidth="2"
        fill={color}
      />
      <path
        d="M4,23 C1,7 23,7 20,23Z"
        stroke="black"
        strokeWidth="2"
        fill={color}
      />
    </>
  );

  if (raw) {
    return content;
  }

  return (
    <svg
      width={width || 24}
      height={width || 24}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {content}
    </svg>
  );
};
