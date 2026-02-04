import { useMemo } from 'react';

interface TimerProps {
    timeLeft: number;
}

export default function Timer({ timeLeft }: TimerProps) {
    const formattedTime = useMemo(() => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;

        const pad = (n: number) => n.toString().padStart(2, '0');

        if (hours > 0) {
            return `${hours}:${pad(minutes)}:${pad(seconds)}`;
        }
        return `${pad(minutes)}:${pad(seconds)}`;
    }, [timeLeft]);

    return (
        <div className="text-[10rem] sm:text-[12rem] leading-none font-bold tabular-nums tracking-tighter text-foreground select-none scale-90 origin-center transition-transform duration-300">
            {formattedTime}
        </div>
    );
}
