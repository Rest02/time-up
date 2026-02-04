import { PomodoroMode } from '../hooks/usePomodoro';

interface StatusIndicatorProps {
    currentMode: PomodoroMode;
    onModeChange: (mode: PomodoroMode) => void;
}

export default function StatusIndicator({ currentMode, onModeChange }: StatusIndicatorProps) {
    const modes: { id: PomodoroMode; label: string }[] = [
        { id: 'TYPE_FOCUS', label: 'Pomodoro' },
        { id: 'TYPE_SHORT_BREAK', label: 'Short Break' },
        { id: 'TYPE_LONG_BREAK', label: 'Long Break' },
        { id: 'TYPE_ONE_HOUR', label: '1 Hour' },
    ];

    return (
        <div className="flex gap-2 sm:gap-4 p-2 rounded-full bg-white/5 backdrop-blur-sm mb-12">
            {modes.map((mode) => (
                <button
                    key={mode.id}
                    onClick={() => onModeChange(mode.id)}
                    className={`
            px-4 py-2 rounded-full text-sm sm:text-base font-bold transition-all duration-300
            ${currentMode === mode.id
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'text-muted hover:text-foreground hover:bg-white/5'
                        }
          `}
                >
                    {mode.label}
                </button>
            ))}
        </div>
    );
}
