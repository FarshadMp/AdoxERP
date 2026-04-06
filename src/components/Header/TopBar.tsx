"use client";


interface TopBarProps {
  isScrolled: boolean;
  smoothEase: string;
}

export default function TopBar({ isScrolled, smoothEase }: TopBarProps) {
  return (
    <div
      className={`${smoothEase} overflow-hidden px-6 md:px-12 border-b border-white/10 hidden lg:flex justify-end items-center gap-6 ${
        isScrolled
          ? "h-0 opacity-0 py-0 border-transparent"
          : "h-10 opacity-100 py-2"
      }`}
    >
      <div className="flex items-center gap-6">
        <span className="text-[10px] font-bold text-white/70 cursor-pointer hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">
          Email Login
        </span>
        <div className="w-px h-2.5 bg-white/20" />
        <span className="text-[10px] font-bold text-white/70 cursor-pointer hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">
          Contact Us
        </span>
        <div className="w-px h-2.5 bg-white/20" />
        <span className="text-[10px] font-bold text-white/70 cursor-pointer hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">
          T&C
        </span>
      </div>
    </div>
  );
}
