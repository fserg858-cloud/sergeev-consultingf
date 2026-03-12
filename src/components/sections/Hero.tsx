
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-40 overflow-hidden bg-background">
      <div className="hero-glow top-[-10%] right-[-10%] opacity-100" />
      <div className="hero-glow bottom-[-10%] left-[-10%] opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8 text-center lg:text-left animate-fade-in-up">
            <div className="flex flex-col items-center lg:items-start mb-10">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent/5 border border-accent/10 text-xs sm:text-sm font-black uppercase tracking-[0.3em] mx-auto lg:mx-0">
                <Sparkles size={16} className="animate-pulse text-accent" />
                <span className="text-accent/80">Разбор воронки бесплатно</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-headline font-black leading-[1.1] mb-8 text-gradient">
              Бесплатно найдем узкое место, где ваш бизнес <span className="text-accent italic">теряет деньги</span>, и устраним его с помощью AI за 7–10 дней.
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0 px-4 sm:px-0">
              Без перестройки процессов с нуля, найма новых людей и долгих теорий. Внедряем один понятный инструмент под ключ. Первый шаг — бесплатный разбор воронки.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-10 justify-center lg:justify-start px-4 sm:px-0">
              <Button asChild className="relative bg-accent hover:bg-accent/90 text-accent-foreground h-20 px-14 rounded-full text-xl font-black shadow-glow-uniform shadow-glow-uniform-hover transition-all hover:scale-105 active:scale-95 border-none w-full sm:w-auto group">
                <Link href="#contact" className="flex items-center justify-center gap-3">
                  Записаться на разбор <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <div className="flex items-center gap-4 text-muted-foreground font-black text-lg uppercase tracking-widest group cursor-default">
                <div className="h-10 w-10 rounded-full border-2 border-accent/50 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={22} strokeWidth={3} />
                </div>
                <span className="group-hover:text-white transition-colors">20–30 минут</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="premium-glass p-10 rounded-[3rem] border border-accent/20 rotate-3 translate-y-8 shadow-2xl relative overflow-hidden min-h-[480px] flex flex-col justify-between transition-all duration-500 hover:rotate-0 hover:scale-110 hover:z-30 cursor-pointer group/card">
              <div className="space-y-10 relative z-10 pt-4">
                <div className="flex flex-col border-b border-white/5 pb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-2 group-hover/card:text-accent transition-colors">Обработано заявок</span>
                  <span className="text-white text-3xl font-black tabular-nums leading-none">1,240</span>
                </div>
                <div className="flex flex-col border-b border-white/5 pb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-2 group-hover/card:text-accent transition-colors">Время ответа</span>
                  <span className="text-accent text-3xl font-black uppercase leading-tight">&lt; 1 мин</span>
                </div>
                <div className="flex flex-col border-b border-white/5 pb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-2 group-hover/card:text-accent transition-colors">Экономия бюджета</span>
                  <span className="text-white text-3xl font-black tabular-nums leading-none">45 000 ₽</span>
                </div>
              </div>

              <div className="pt-8 pb-2 flex items-center gap-5 border-t border-white/10 relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground shadow-glow-uniform shrink-0 group-hover/card:scale-110 transition-transform">
                  <Logo size={32} />
                </div>
                <div className="flex flex-col">
                  <div className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-1.5">SERGEEV CONSULTING</div>
                  <div className="text-white font-black text-lg uppercase tracking-wider leading-tight">
                    AI-Ассистент <br />активирован
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 -right-6 premium-glass px-10 py-10 rounded-[2.5rem] border border-accent/30 -rotate-6 shadow-2xl z-20 flex flex-col items-center justify-center text-center transition-all duration-500 hover:rotate-0 hover:scale-125 hover:z-40 cursor-pointer group/badge">
              <div className="text-5xl font-black text-white mb-2 group-hover/badge:text-accent transition-colors">+35%</div>
              <div className="text-[10px] font-black text-muted-foreground/80 uppercase tracking-[0.2em] leading-relaxed max-w-[140px] group-hover/badge:text-white">
                к конверсии воронки
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
