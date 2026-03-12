
"use client";

import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

const TelegramIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const VCIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.8 7.5H6.2L4.1 14.5L2 7.5H0L3.5 18.5H5.3L8.8 7.5Z" />
    <path d="M16.5 18.5C13.5 18.5 11 16 11 12.5C11 9 13.5 6.5 16.5 6.5C18.5 6.5 21.1 9.1L19.1 10.1C18.6 9.2 17.6 8.6 16.5 8.6C14.7 8.6 13.3 10.1 13.3 12C13.3 13.9 14.7 15.4 16.5 15.4C17.6 15.4 18.6 14.8 19.1 13.9L21.1 14.9C20.2 16.5 18.5 18.5 16.5 18.5Z" />
  </svg>
);

export function Footer() {
  const [year, setYear] = useState<number | string>('...');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background text-white py-16 sm:py-24 relative overflow-hidden border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-24 mb-16 sm:mb-24">
          <div className="col-span-1 sm:col-span-2 space-y-8 text-center sm:text-left">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="p-3 bg-accent rounded-2xl text-accent-foreground shadow-xl shadow-accent/10">
                <Logo size={32} />
              </div>
              <span className="font-headline text-2xl font-black tracking-tighter text-white uppercase">
                SERGEEV <span className="italic font-medium text-accent">CONSULTING</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-base sm:text-lg leading-relaxed font-medium italic mx-auto sm:mx-0">
              "Мы не просто предсказываем будущее. Мы проектируем системы, которые его строят."
            </p>
            <div className="flex justify-center sm:justify-start gap-6">
              {[
                { icon: <Instagram size={28} />, href: "https://www.instagram.com/fedor.sergeevv/", label: "Instagram" },
                { icon: <TelegramIcon size={28} />, href: "https://t.me/SergeevF_Life", label: "Telegram" },
                { icon: <VCIcon size={32} />, href: "#", label: "vc.ru" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-14 w-14 rounded-xl bg-accent/5 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all group border border-accent/10 shadow-inner"
                >
                  <div className="group-hover:scale-110 transition-transform flex items-center justify-center">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-accent mb-8 sm:mb-10">Навигация</h4>
            <ul className="space-y-4 sm:space-y-6 text-muted-foreground font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em]">
              {[
                { name: "Решения", href: "#solutions" },
                { name: "Процесс", href: "#process" },
                { name: "Окупаемость", href: "#roi" },
                { name: "Цены", href: "#pricing" }
              ].map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-accent transition-all">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-accent mb-8 sm:mb-10">Связь</h4>
            <ul className="space-y-4 sm:space-y-6 text-muted-foreground font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em]">
              <li>
                <Link href="/privacy" className="hover:text-accent transition-all">Конфиденциальность</Link>
              </li>
              <li>
                <a 
                  href="https://t.me/SergeevF_Life" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent transition-all"
                >
                  Написать в Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-accent/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-muted-foreground/40 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-center">
          <p>© {year} SERGEEV CONSULTING | Сергеев Консалтинг.</p>
          <p className="text-accent/40 tracking-[0.4em]">Спроектировано для совершенства</p>
        </div>
      </div>
    </footer>
  );
}
