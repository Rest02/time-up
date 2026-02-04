import { useState, useEffect, useCallback } from 'react';

export type PomodoroMode = 'TYPE_FOCUS' | 'TYPE_SHORT_BREAK' | 'TYPE_LONG_BREAK' | 'TYPE_ONE_HOUR';

interface UsePomodoroReturn {
    timeLeft: number;
    isActive: boolean;
    mode: PomodoroMode;
    cyclesCompleted: number;
    totalTime: number;
    toggleTimer: () => void;
    resetTimer: () => void;
    setMode: (mode: PomodoroMode) => void;
}

const MODES = {
    TYPE_FOCUS: 25 * 60,
    TYPE_SHORT_BREAK: 5 * 60,
    TYPE_LONG_BREAK: 15 * 60,
    TYPE_ONE_HOUR: 60 * 60,
};

export const usePomodoro = (): UsePomodoroReturn => {
    const [mode, setModeState] = useState<PomodoroMode>('TYPE_FOCUS');
    const [timeLeft, setTimeLeft] = useState(MODES.TYPE_FOCUS);
    const [isActive, setIsActive] = useState(false);
    const [cyclesCompleted, setCyclesCompleted] = useState(0);

    // Load from localStorage on mount
    useEffect(() => {
        const savedState = localStorage.getItem('time-up-state');
        if (savedState) {
            try {
                const parsed = JSON.parse(savedState);
                setModeState(parsed.mode);
                setTimeLeft(parsed.timeLeft);
                setCyclesCompleted(parsed.cyclesCompleted);
                // We don't restore isActive to avoid auto-starting on reload
            } catch (e) {
                console.error('Failed to parse saved state', e);
            }
        }
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem('time-up-state', JSON.stringify({
            mode,
            timeLeft,
            cyclesCompleted,
        }));
    }, [mode, timeLeft, cyclesCompleted]);

    const switchMode = useCallback((newMode: PomodoroMode) => {
        setModeState(newMode);
        setTimeLeft(MODES[newMode]);
        setIsActive(false);
    }, []);

    // Timer logic
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && isActive) {
            // Timer finished
            setIsActive(false);

            // Auto-transition logic
            if (mode === 'TYPE_FOCUS') {
                const newCycles = cyclesCompleted + 1;
                setCyclesCompleted(newCycles);
                if (newCycles % 4 === 0) {
                    switchMode('TYPE_LONG_BREAK');
                } else {
                    switchMode('TYPE_SHORT_BREAK');
                }
            } else if (mode === 'TYPE_SHORT_BREAK' || mode === 'TYPE_LONG_BREAK') {
                switchMode('TYPE_FOCUS');
            }
            // TYPE_ONE_HOUR doesn't auto-transition by default rules, just stops.
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, timeLeft, mode, cyclesCompleted, switchMode]);

    const toggleTimer = () => setIsActive(!isActive);

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(MODES[mode]);
    };

    const setMode = (newMode: PomodoroMode) => {
        switchMode(newMode);
    };

    return {
        timeLeft,
        isActive,
        mode,
        cyclesCompleted,
        totalTime: MODES[mode],
        toggleTimer,
        resetTimer,
        setMode,
    };
};
