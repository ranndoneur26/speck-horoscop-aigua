import React, { useState } from 'react';
import LandingScreen from './components/LandingScreen';
import ZodiacGrid from './components/ZodiacGrid';
import ZodiacModal from './components/ZodiacModal';
import { signs, ZodiacSign } from './data/signs';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
    const [showLanding, setShowLanding] = useState(true);
    const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);

    const handleEnter = () => {
        setShowLanding(false);
    };

    const handleOpenModal = (sign: ZodiacSign) => {
        setSelectedSign(sign);
    };

    const handleCloseModal = () => {
        setSelectedSign(null);
    };

    return (
        <div className="min-h-screen bg-[#1a2a62] text-white selection:bg-cyan-500/30">
            <AnimatePresence mode="wait">
                {showLanding ? (
                    <motion.div
                        key="landing"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <LandingScreen onEnter={handleEnter} />
                    </motion.div>
                ) : (
                    <motion.main
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative min-h-screen overflow-hidden"
                    >
                        {/* Background Blobs for that futurist ocean look */}
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

                        <header className="relative z-10 pt-12 pb-8 px-6 max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 block animate-pulse-slow">
                                    50º Aniversario 2027
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white drop-shadow-lg flex items-center justify-center lg:justify-start gap-4 flex-wrap">
                                    <span className="relative flex items-center justify-center px-4 py-2 shrink-0">
                                        <div className="absolute inset-0 bg-gradient-radial from-white/80 via-white/30 to-transparent blur-md rounded-[100%]" />
                                        <img src="/images/specklogo.png" alt="Speck" className="relative z-10 h-[0.8em] w-auto" />
                                    </span>
                                    <span className="text-cyan-300 hidden md:inline text-3xl">—</span>
                                    <span className="text-5xl md:text-7xl whitespace-nowrap">El horóscopo del agua</span>
                                </h1>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-3 rounded-full glow-cyan">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold leading-none">50</span>
                                    <span className="text-[10px] uppercase tracking-tighter opacity-60">Años fluyendo</span>
                                </div>
                                <div className="w-[1px] h-8 bg-white/20" />
                                <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </header>

                        <ZodiacGrid signs={signs} onSignClick={handleOpenModal} />

                        <footer className="relative z-10 py-12 px-6 max-w-6xl mx-auto mt-12 border-t border-white/10 text-center">
                            <p className="text-slate-400 text-sm flex items-center justify-center flex-wrap gap-2">
                                &copy; 2027
                                <span className="relative inline-flex items-center justify-center px-4 py-2 opacity-80 hover:opacity-100 transition-opacity">
                                    <div className="absolute inset-0 bg-gradient-radial from-white/70 via-white/20 to-transparent blur-sm rounded-[100%]" />
                                    <img src="/images/specklogo.png" alt="Speck" className="relative z-10 h-[1em] w-auto" />
                                </span>
                                Ibérica. Todos los derechos reservados.
                            </p>
                            <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-widest">
                                Diseño Premium para un futuro sostenible
                            </p>
                        </footer>

                        <AnimatePresence>
                            {selectedSign && (
                                <ZodiacModal sign={selectedSign} onClose={handleCloseModal} />
                            )}
                        </AnimatePresence>
                    </motion.main>
                )}
            </AnimatePresence>
        </div>
    );
};

export default App;

