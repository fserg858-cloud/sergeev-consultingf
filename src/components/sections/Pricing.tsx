"use client";

import { Check, Sparkles, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-secondary/20 scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Стоимость и условия</h2>
          <h3 className="text-3xl sm:text-5xl font-headline font-black text-white">Прозрачные условия</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          <div className="premium-glass p-10 sm:p-14 rounded-[3rem] border border-accent/20 flex flex-col justify-between hover:border-accent/40 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute -right-8 -top-8 text-accent/5 transition-all duration-700 group-hover:scale-125 group-hover:text-accent/10 pointer-events-none">
              <Sparkles size={250} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-6">Старт</div>
              <h4 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight text-gradient">Разбор воронки</h4>
              <div className="text-5xl sm:text-7xl font-black text-white mb-10 sm:mb-12">0 ₽</div>
              <ul className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
                {["Аудит текущей воронки", "Поиск узких мест", "Расчет ROI пилота", "План внедрения за неделю"].map(item => (
                  <li key={item} className="flex items-center gap-4 text-lg sm:text-xl text-muted-foreground font-bold">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 shadow-inner">
                      <Check size={20} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <Button asChild className="w-full bg-accent text-accent-foreground h-16 sm:h-20 rounded-2xl font-black text-lg sm:text-xl border-none transition-all shadow-glow-uniform shadow-glow-uniform-hover relative z-10 hover:scale-[1.02]">
              <Link href="#contact">Записаться на разбор</Link>
            </Button>
          </div>

          <div className="bg-secondary/60 p-10 sm:p-14 rounded-[3rem] border border-white/5 flex flex-col justify-between hover:bg-secondary/80 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute -right-8 -top-8 text-white/5 transition-all duration-700 group-hover:scale-125 group-hover:text-white/10 pointer-events-none">
              <Rocket size={250} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="text-muted-foreground font-black uppercase tracking-[0.3em] text-sm sm:text-base mb-6">Результат</div>
              <h4 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">Разработка пилота</h4>
              <div className="text-4xl sm:text-6xl font-black text-white mb-2">от 60 000 ₽</div>
              <div className="text-lg sm:text-xl text-muted-foreground font-medium mb-12">до 120 000 ₽ (зависит от сложности)</div>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-20">
                <div className="premium-glass p-4 sm:p-6 rounded-2xl border border-white/5 text-center group-hover:border-accent/20 transition-all flex flex-col justify-center">
                  <div className="text-xs font-black text-accent uppercase mb-2 tracking-widest">Срок</div>
                  <div className="text-white font-black text-base sm:text-lg">7–10 дней</div>
                </div>
                <div className="premium-glass p-4 sm:p-6 rounded-2xl border border-white/5 text-center group-hover:border-accent/20 transition-all flex flex-col justify-center overflow-hidden">
                  <div className="text-xs font-black text-accent uppercase mb-2 tracking-widest">Оплата</div>
                  <div className="text-white font-black text-sm sm:text-base leading-tight">50% Предоплата</div>
                </div>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-muted-foreground font-medium text-center italic leading-relaxed relative z-10 px-4">
              "Внедряем один конкретный механизм, который окупает себя в первый месяц работы."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
