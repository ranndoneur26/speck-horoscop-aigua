import React from 'react';

interface ZodiacIconProps {
    id: string;
    className?: string;
}

const ZodiacIcon: React.FC<ZodiacIconProps> = ({ id, className = "w-12 h-12" }) => {
    // Linear Abstract SVG Icons for each sign
    const icons: Record<string, JSX.Element> = {
        aries: (
            <path d="M12 21c4.97 0 9-4.03 9-9h-2c0 3.866-3.134 7-7 7s-7-3.134-7-7c0-3.866 3.134-7 7-7V3c-4.97 0-9 4.03-9 9s4.03 9 9 9z M12 3v2 c3.866 0 7 3.134 7 7h2c0-4.97-4.03-9-9-9z" />
        ),
        tauro: (
            <path d="M12 22c5.523 0 10-4.477 10-10H12v10z M12 2c-5.523 0-10 4.477-10 10h10V2z M12 12h10c0-5.523-4.477-10-10-10v10z M12 12H2c0 5.523 4.477 10 10 10V12z" />
        ),
        geminis: (
            <path d="M8 3v18M16 3v18M3 8h18M3 16h18" />
        ),
        cancer: (
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
        ),
        leo: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        ),
        virgo: (
            <path d="M3 3h18v18H3z M8 8h8v8H8z M12 3v18 M3 12h18" />
        ),
        libra: (
            <path d="M12 3L3 21h18L12 3z M12 12v3" />
        ),
        escorpio: (
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        ),
        sagitario: (
            <path d="M12 3v18M3 12h18M5.64 5.64l12.72 12.72M5.64 18.36l12.72-12.72" />
        ),
        capricornio: (
            <path d="M12 2v20M2 12h20 M12 2a10 10 0 0 1 10 10 M12 22a10 10 0 0 1-10-10" />
        ),
        acuario: (
            <path d="M21 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z M12 12h2v2h-2z" />
        ),
        piscis: (
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        )
    };

    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {icons[id] || <circle cx="12" cy="12" r="10" />}
        </svg>
    );
};

export default ZodiacIcon;
