export function Header() {
    return (
        <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="font-bold text-lg tracking-tight">Time-Up</span>
            </div>
            {/* Placeholder for future auth/settings */}
            <div className="w-8 h-8 rounded-full bg-white/10" />
        </header>
    );
}

export function Footer() {
    return (
        <footer className="absolute bottom-6 w-full text-center">
            <p className="text-muted text-sm font-medium tracking-wide">Stay focused.</p>
        </footer>
    );
}
