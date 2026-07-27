import React from 'react';
import { ZodiacSign } from '../data/signs';
import ZodiacCard from './ZodiacCard';
import { motion } from 'framer-motion';

interface ZodiacGridProps {
    signs: ZodiacSign[];
    onSignClick: (sign: ZodiacSign) => void;
}

const ZodiacGrid: React.FC<ZodiacGridProps> = ({ signs, onSignClick }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="px-6 max-w-6xl mx-auto py-12">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {signs.map((sign) => (
                    <motion.div key={sign.id} variants={item}>
                        <ZodiacCard sign={sign} onClick={onSignClick} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ZodiacGrid;
