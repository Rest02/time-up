"use client";

import { usePomodoro } from '@/hooks/usePomodoro';
import Timer from '@/components/Timer';
import Controls from '@/components/Controls';
import StatusIndicator from '@/components/StatusIndicator';
import { Header, Footer } from '@/components/Layout';
import SettingsSidebar from '@/components/SettingsSidebar';
import { useEffect, useState } from 'react';

export default function Home() {
  const {
    timeLeft,
    isActive,
    mode,
    toggleTimer,
    resetTimer,
    setMode
  } = usePomodoro();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dynamic title based on timer
  useEffect(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const pad = (n: number) => n.toString().padStart(2, '0');
    const timeString = `${pad(minutes)}:${pad(seconds)}`;

    document.title = `${timeString} - ${isActive ? 'Focusing' : 'Paused'} | Time-Up`;
  }, [timeLeft, isActive]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      <Header onOpenSidebar={() => setIsSidebarOpen(true)} />

      <SettingsSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex flex-col items-center z-20">
        <StatusIndicator currentMode={mode} onModeChange={setMode} />

        <div className="my-8">
          <Timer timeLeft={timeLeft} />
        </div>

        <Controls
          isActive={isActive}
          onToggle={toggleTimer}
          onReset={resetTimer}
        />
      </div>

      <Footer />
    </main>
  );
}
