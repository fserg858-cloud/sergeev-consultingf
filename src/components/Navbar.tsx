
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

const navLinks = [
  { name: "Подход", href: "#approach" },
  { name: "Решения", href: "#solutions" },
  { name: "Процесс", href: "#process" },
  { name: "ROI", href: "#roi" },
  { name: "Цены", href: "#pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActivePath(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "premium-glass rounded-[2.5rem] px-2 h-20 flex justify-between items-center border transition-all duration-700 ease-in-out relative overflow-hidden",
          scrolled 
            ? "bg-background/90 border-accent/40 shadow-glow-uniform" 
            : "border-white/10"
        )}>
          <div className="flex items-center pl-4 sm:pl-8 z-10 gap-4 lg:gap-5">
            <Link href="/" className="flex items-center group" onClick={() => setActivePath("")}>
              <div className="p-3 bg-accent rounded-2xl text-accent-foreground transition-all duration-500 group-hover:scale-110 shadow-glow-uniform">
                <Logo size={24} />
              </div>
            </Link>
            
            <span className="hidden lg:block font-headline text-lg lg:text-xl font-black tracking-[0.2em] text-white uppercase whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              SERGEEV CONSULTING
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-10 z-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActivePath(link.href)}
                className={cn(
                  "relative text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-500 group",
                  activePath === link.href 
                    ? "text-accent drop-shadow-[0_0_8px_rgba(198,138,83,0.6)]" 
                    : "text-muted-foreground/90 hover:text-white"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                <span className={cn(
                  "absolute -bottom-1.5 left-0 h-[2px] bg-accent transition-all duration-500 shadow-[0_0_8px_rgba(198,138,83,0.5)]",
                  activePath === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center pr-4 sm:pr-8 z-10">
            <Button asChild className="relative bg-accent hover:bg-accent/90 text-accent-foreground rounded-[1.25rem] border-none transition-all duration-500 hover:scale-105 text-[10px] uppercase font-black tracking-[0.2em] px-10 h-14 shadow-glow-uniform shadow-glow-uniform-hover">
              <Link href="#contact" onClick={() => setActivePath("#contact")}>
                Бесплатный разбор
              </Link>
            </Button>
          </div>

          <div className="md:hidden pr-6 z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent p-3 transition-all duration-300 rounded-xl bg-white/5 border border-white/10"
              aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden fixed inset-x-0 px-4 pt-4 transition-all duration-500 z-40",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        )}
        style={{ top: "6.5rem" }}
      >
        <div className="premium-glass rounded-[3rem] p-12 shadow-2xl border border-accent/20">
          <div className="flex flex-col gap-10 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  setActivePath(link.href);
                }}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.3em] transition-all py-4 border-b border-white/10",
                  activePath === link.href ? "text-accent drop-shadow-[0_0_10px_rgba(198,138,83,0.4)]" : "text-muted-foreground hover:text-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-accent text-accent-foreground mt-6 rounded-[1.5rem] font-black text-sm uppercase tracking-[0.2em] h-20 border-none shadow-glow-uniform">
              <Link href="#contact" onClick={() => {
                setIsOpen(false);
                setActivePath("#contact");
              }}>
                Бесплатный разбор
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
