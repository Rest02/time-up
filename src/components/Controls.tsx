interface ControlsProps {
    isActive: boolean;
    onToggle: () => void;
    onReset: () => void;
}

export default function Controls({ isActive, onToggle, onReset }: ControlsProps) {
    return (
        <div className="flex gap-8 items-center mt-12">
            <button
                onClick={onToggle}
                className={`
          h-16 px-12 rounded-full text-2xl font-bold transition-all duration-200
          ${isActive
                        ? 'bg-transparent border-2 border-muted text-muted hover:border-foreground hover:text-foreground'
                        : 'bg-primary text-white hover:opacity-90 hover:scale-105 active:scale-95'
                    }
        `}
            >
                {isActive ? 'PAUSE' : 'START'}
            </button>

            <button
                onClick={onReset}
                className="h-16 px-8 rounded-full text-xl font-bold text-muted hover:text-foreground transition-colors"
                aria-label="Reset Timer"
            >
                RESET
            </button>
        </div>
    );
}
