"use client";

import { Calculator, TrendingUp, Wallet } from "lucide-react";

export function ROISection() {
  return (
    <section id="roi" className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-[10px] sm:text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Окупаемость внедрения</h2>
            <h3 className="text-3xl sm:text-5xl font-headline font-black text-white mb-8 leading-tight">
              Считаем окупаемость <br /><span className="text-accent italic">до того, как вы заплатите</span>
            </h3>
            
            <div className="premium-glass p-8 sm:p-12 rounded-[2.5rem] border border-accent/20 mb-10 max-w-xl mx-auto lg:mx-0 shadow-2xl transition-all duration-500 hover:border-accent/40">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-accent flex items-center justify-center text-accent-foreground shadow-lg">
                  <Calculator size={24} />
                </div>
                <span className="font-black text-white uppercase tracking-widest text-xs sm:text-sm">Формула прибыли</span>
              </div>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gradient text-center py-10 border-y border-white/10 break-words">
                ROI = <span className="text-accent">Прибыль</span> / <span className="text-white">Расходы</span>
              </div>
              
              <p className="mt-10 text-base sm:text-xl text-muted-foreground font-medium text-center leading-relaxed">
                Средняя окупаемость наших проектов: <br className="hidden sm:block" />
                <span className="text-white font-bold">от 2-х до 4-х месяцев</span> работы системы.
              </p>
            </div>
          </div>

          <div className="space-y-8 max-w-xl mx-auto lg:max-w-none">
            <div className="premium-glass p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-white/5 relative shadow-2xl group transition-all duration-500">
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-accent flex items-center justify-center text-accent-foreground shadow-xl group-hover:scale-110 transition-transform">
                <TrendingUp size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-lg sm:text-xl font-black text-white mb-6 flex items-center gap-3">
                <Wallet className="text-accent" size={20} /> Пример расчета
              </h4>
              <div className="space-y-6 text-sm sm:text-lg">
                <p className="text-muted-foreground leading-relaxed">
                  Два менеджера тратят <span className="text-white font-bold">2 часа в день</span> на рутинные ответы. Это 88 часов в месяц.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  При стоимости часа 500–800 ₽ бизнес теряет <span className="text-accent font-black whitespace-nowrap">до 70 000 ₽ ежемесячно.</span>
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white font-black italic leading-tight">
                    "AI-ассистент окупается быстро, дальше — приносит чистую экономию."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
