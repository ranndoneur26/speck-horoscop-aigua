import React, { useMemo } from 'react';

const QRCodeMock: React.FC = () => {
    // Generate a deterministic pattern based on a fixed seed/array to avoid hydration issues
    const pattern = useMemo(() => {
        const size = 16; // 16x16 grid
        const dots = [];
        const seed = "speck-2027";

        // Simple deterministic pseudo-random generator
        let hash = 0;
        for (let i = 0; i < seed.length; i++) {
            hash = (hash << 5) - hash + seed.charCodeAt(i);
            hash |= 0;
        }

        for (let i = 0; i < size * size; i++) {
            hash = (hash * 16807) % 2147483647;
            dots.push(hash % 3 === 0); // ~33% density
        }

        // Add "Finder patterns" (the big squares in corners)
        const setFinder = (x: number, y: number) => {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    const idx = (y + j) * size + (x + i);
                    dots[idx] = (i === 0 || i === 3 || j === 0 || j === 3);
                }
            }
        };

        setFinder(0, 0);
        setFinder(12, 0);
        setFinder(0, 12);

        return dots;
    }, []);

    return (
        <div className="p-4 bg-white rounded-xl shadow-inner relative group">
            <div className="grid grid-cols-16 gap-[1px] w-32 h-32" style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}>
                {pattern.map((active, i) => (
                    <div
                        key={i}
                        className={`w-full h-full rounded-[1px] transition-colors duration-500 ${active ? 'bg-[#1a2a62]' : 'bg-transparent'}`}
                    />
                ))}
            </div>

            {/* Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                <svg className="w-8 h-8 text-[#1a2a62]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="2" />
                    <path d="M7 7h1v1H7zM16 7h1v1H16zM7 16h1v1H7zM16 16h1v1H16zM12 7h1v1H12zM12 16h1v1H12zM7 12h1v1H7zM16 12h1v1H16z" />
                </svg>
            </div>
        </div>
    );
};

export default QRCodeMock;
