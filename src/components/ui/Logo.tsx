import React from 'react';

export const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            width="150"
            height="65"
            viewBox="0 0 150 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* "ech" text - Centered vertically relative to the new height */}
            <text
                x="0"
                y="42"
                fontFamily="sans-serif"
                fontWeight="500"
                fontSize="38"
                fill="#FF2D2D"
                style={{ letterSpacing: '-2px' }}
            >
                ech
            </text>

            {/* Red Circle - Larger (Radius 30) */}
            <circle cx="88" cy="32.5" r="30" fill="#FF2D2D" />

            {/* "rbe" text inside circle - Centered */}
            <text
                x="88"
                y="42"
                fontFamily="sans-serif"
                fontWeight="500"
                fontSize="30"
                fill="white"
                textAnchor="middle"
                style={{ letterSpacing: '-0.5px' }}
            >
                rbe
            </text>
        </svg>
    );
};
