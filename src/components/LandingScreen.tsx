import React from 'react';
import { motion } from 'framer-motion';

interface LandingScreenProps {
    onEnter: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onEnter }) => {
    return (
        <div
            className="relative h-screen w-full cursor-pointer overflow-hidden group"
            onClick={onEnter}
        >
            {/* Hero Image - Placeholder styled as requested */}
            <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-[2000ms] group-hover:scale-105"
                style={{
                    backgroundImage: 'url("/images/landing-hero.jpg")',
                    backgroundColor: '#0a1a3a' // Fallback dark blue
                }}
                aria-label="SPECK - Horóscopo del Agua 2027"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a62]/40 via-transparent to-[#1a2a62]/80" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    {/* Logo/Title Glow */}
                    <div className="absolute -inset-10 bg-cyan-500/20 rounded-full blur-3xl" />

                    <h1 className="relative text-5xl md:text-8xl font-black text-white tracking-widest leading-none flex justify-center">
                        <div className="relative py-8 px-20">
                            <div className="absolute inset-0 bg-gradient-radial from-white/70 via-white/30 to-transparent blur-lg rounded-[100%]" />
                            <img src="/images/specklogo.png" alt="Speck" className="relative z-10 h-[0.8em] w-auto mx-auto" />
                        </div>
                    </h1>
                    <p className="relative text-sm md:text-base font-light text-cyan-200 tracking-[0.15em] mt-4 italic">
                        Medio siglo de tecnología alemana al servicio de tu piscina.
                    </p>
                    <div className="h-px w-24 bg-cyan-400 mx-auto my-6" />
                    <p className="relative text-lg md:text-2xl font-light text-cyan-200 tracking-[0.3em] uppercase">
                        Horóscopo del Agua <span className="font-bold">2027</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-12 flex flex-col items-center gap-4"
                >
                    <div className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm uppercase tracking-widest hover:bg-white/20 transition-all">
                        Haz clic para entrar
                    </div>
                    <p className="text-white/40 text-[10px] uppercase tracking-tighter">
                        Explora la esencia de tu signo
                    </p>
                </motion.div>
            </div>

            {/* Suttle animation for "Interactivity" */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <div className="w-1 h-12 bg-gradient-to-b from-transparent to-cyan-400/40 rounded-full animate-bounce" />
            </div>
        </div>
    );
};

export default LandingScreen;
