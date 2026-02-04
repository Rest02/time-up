import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SettingsSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SettingsSidebar({ isOpen, onClose }: SettingsSidebarProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop - Smooth fade */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />

                    {/* Sidebar - iOS Slide Over */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        // Critical damping: stops exactly at destination without overshooting
                        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 1 }}
                        className="fixed top-0 right-0 h-full w-80 bg-[#111] border-l border-white/10 p-6 z-50 shadow-2xl"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-bold text-white">Opciones</h2>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-white transition-colors active:scale-95 duration-200"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div className="p-4 rounded-lg bg-white/5 border border-white/5 active:bg-white/10 transition-colors cursor-pointer">
                                <p className="text-muted text-sm mb-2">Configuración</p>
                                <p className="text-white font-medium">Próximamente...</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
