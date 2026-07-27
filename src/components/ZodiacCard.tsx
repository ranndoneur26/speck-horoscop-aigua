import React from 'react';
import { ZodiacSign } from '../data/signs';
import ZodiacIcon from './ZodiacIcon';
import { motion } from 'framer-motion';

interface ZodiacCardProps {
    sign: ZodiacSign;
    onClick: (sign: ZodiacSign) => void;
}

const ZodiacCard: React.FC<ZodiacCardProps> = ({ sign, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onClick(sign)}
            className="glass group cursor-pointer p-8 rounded-[2rem] transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
        >
            {/* Background Glow on Hover */}
            <div className={`absolute -inset-20 opacity-0 group-hover:opacity-10 transition-opacity blur-[80px] pointer-events-none rounded-full bg-cyan-500/20`} />

            <div className={`mb-6 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-all text-cyan-400`}>
                <ZodiacIcon id={sign.id} className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold mb-1 group-hover:text-cyan-300 transition-colors uppercase tracking-wide">
                {sign.nombre}
            </h3>

            <p className="text-cyan-400/80 text-[10px] font-bold uppercase tracking-widest mb-4">
                {sign.fechas}
            </p>

            <p className="text-slate-300 text-sm leading-relaxed max-w-[200px]">
                {sign.subtitulo}
            </p>

            <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-white/40 group-hover:text-cyan-300 transition-colors">
                Ver predicción
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </motion.div>
    );
};

export default ZodiacCard;
