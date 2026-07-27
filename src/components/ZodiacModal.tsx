import React from 'react';
import { signs, ZodiacSign } from '../data/signs';
import ZodiacIcon from './ZodiacIcon';
import QRCodeMock from './QRCodeMock';
import { motion } from 'framer-motion';

interface ZodiacModalProps {
    sign: ZodiacSign;
    onClose: () => void;
}

const ZodiacModal: React.FC<ZodiacModalProps> = ({ sign, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-[#1a2a62]/90 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-dark rounded-[2.5rem] shadow-2xl border border-white/20 p-8 md:p-12 custom-scrollbar"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Sign Details */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-6 min-w-0">
                            <div className={`shrink-0 p-5 rounded-3xl bg-white/5 border border-white/10 text-cyan-400`}>
                                <ZodiacIcon id={sign.id} className="w-16 h-16" />
                            </div>
                            <div className="min-w-0">
                                <h2 className="text-3xl md:text-[2.4rem] font-black uppercase tracking-tight leading-none mb-1 whitespace-nowrap">{sign.nombre}</h2>
                                <div className="flex flex-col">
                                    <p className="text-white/40 text-[10px] font-mono mb-1">0{(signs.findIndex(s => s.id === sign.id) + 1).toString().slice(-2)} / 12</p>
                                    <p className="text-cyan-400 font-bold tracking-widest text-xs uppercase">{sign.fechas}</p>
                                    <p className="text-slate-400 italic text-sm mt-2">"{sign.subtitulo}"</p>
                                </div>
                            </div>
                        </div>

                        <section>
                            <h3 className="text-xs uppercase tracking-[0.3em] text-cyan-400/60 font-bold mb-4">Predicción 2027</h3>
                            <p className="text-lg md:text-xl text-slate-100 leading-relaxed font-light">
                                {sign.prediccion}
                            </p>
                        </section>

                        <section className="opacity-80">
                            <h4 className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-bold mb-2">Recomendación de Equipamiento</h4>
                            <p className="text-xs text-slate-300 font-medium">
                                {sign.recomendacion}
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/5 rounded-3xl p-6">
                            <h4 className="text-xs uppercase tracking-[0.2em] text-cyan-300 font-bold mb-3 flex items-center gap-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                                Nota de Eficiencia
                            </h4>
                            <p className="text-sm text-slate-300 leading-relaxed italic">
                                "{sign.conciencia}"
                            </p>
                        </section>

                        <section className="bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-6">
                            <h4 className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-bold mb-3 flex items-center gap-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                                Consejo para instalaciones deportivas
                            </h4>
                            <p className="text-sm text-slate-200 leading-relaxed">
                                "{sign.consejo}"
                            </p>
                        </section>
                    </div>

                    {/* Right Column: Product Info */}
                    <div className="space-y-8">
                        <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden bg-black/40 group border border-white/5">
                            {/* Product Image Placeholder */}
                            <div
                                className="absolute inset-0 bg-center bg-contain bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage: `url("${sign.imageUrl}")`,
                                    backgroundColor: '#000'
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                        </div>

                        <div className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-3xl gap-6">
                            <div className="max-w-[150px]">
                                <h5 className="text-sm font-bold mb-2">Acceso Premium</h5>
                                <p className="text-[10px] text-slate-400 leading-normal uppercase tracking-tighter">
                                    Escanea para ver la ficha técnica completa y manuales de instalación.
                                </p>
                            </div>
                            <QRCodeMock />
                        </div>
                    </div>
                </div>

                {/* Footer info in Modal */}
                <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
                    <span className="flex items-center gap-2">
                        <span className="relative inline-flex items-center justify-center px-3 py-1.5 opacity-70">
                            <div className="absolute inset-0 bg-gradient-radial from-white/80 via-white/30 to-transparent blur-sm rounded-[100%]" />
                            <img src="/images/specklogo.png" alt="Speck" className="relative z-10 h-[1em] w-auto" />
                        </span>
                        - Water Solutions
                    </span>
                    <span>Ref: {sign.id}-2027-H2O</span>
                </div>
            </motion.div>
        </div>
    );
};

export default ZodiacModal;
