import React from 'react';

export const Logo = ({ className, width = "170", height = "80" }: { className?: string, width?: string | number, height?: string | number }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 170 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Echorbe Logo"
        >
            {/* Defs for cleaner text rendering */}
            <defs>
                <style>
                    {`
                        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600&display=swap');
                        .logo-text { font-family: 'Outfit', sans-serif; }
                    `}
                </style>
            </defs>

            {/* 'ech' text: Red (#FF2D2D) */}
            <text
                x="10"
                y="49"
                className="logo-text"
                fontWeight="500"
                fontSize="48"
                fill="#FF2D2D"
                letterSpacing="-2"
            >
                ech
            </text>

            {/* Red Circle */}
            {/* Moved down further (cy=43) */}
            <circle cx="108" cy="43" r="32" fill="#FF2D2D" />

            {/* 'rbe' text: White, centered in circle */}
            {/* Increased size (33) and moved (y=50) */}
            <text
                x="108"
                y="50"
                className="logo-text"
                fontWeight="500"
                fontSize="33"
                fill="white"
                textAnchor="middle"
                letterSpacing="-1"
            >
                rbe
            </text>
        </svg>
    );
};
