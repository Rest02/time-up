import { motion, AnimatePresence } from 'framer-motion';

interface ControlsProps {
    isActive: boolean;
    onToggle: () => void;
    onReset: () => void;
}

export default function Controls({ isActive, onToggle, onReset }: ControlsProps) {
    return (
        <div className="flex gap-8 items-center mt-12">
            <motion.button
                layout
                onClick={onToggle}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className={`glass-button relative h-16 min-w-[160px] px-8 rounded-full text-xl font-bold transition-all duration-300
          ${isActive
                        ? 'text-muted border-white/20'
                        : 'text-white'
                    }
        `}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {isActive ? (
                        <motion.span
                            key="pause"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="block"
                        >
                            PAUSE
                        </motion.span>
                    ) : (
                        <motion.span
                            key="start"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="block text-primary" // Accent color text for glass look
                        >
                            START
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>

            <motion.button
                layout
                onClick={onReset}
                whileHover={{ scale: 1.02, color: 'var(--foreground)' }}
                whileTap={{ scale: 0.96 }}
                className="h-16 px-8 rounded-full text-xl font-bold text-muted transition-colors hover:bg-white/5 border border-transparent hover:border-white/10"
                aria-label="Reset Timer"
            >
                RESET
            </motion.button>
        </div>
    );
}
