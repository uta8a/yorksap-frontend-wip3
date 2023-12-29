import React from 'react';

type Props = {
    color: string;
    width?: number;
    raw?: boolean;
};

export const PlayerIndicator = ({ color, raw }: Props) => {
    const content = (
        <>
            <circle cx="12" cy="6" r="5" stroke="black" strokeWidth="2" fill={color} />
            <path d="M4,23 C1,7 23,7 20,23Z" stroke="black" strokeWidth="2" fill={color} />
        </>
    );

    if (raw) {
        return content;
    }

    return (
        <svg width={width || 24} height={width || 24} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            {content}
        </svg>
    );
};
