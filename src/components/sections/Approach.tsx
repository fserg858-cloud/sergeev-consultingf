"use client";

import { ShieldCheck, Zap, BarChart3 } from "lucide-react";

const principles = [
  {
    title: "Не ломаем то, что работает",
    description: "Внедряем AI только туда, где уже есть процесс, но он недожимает клиентов или сжигает время команды.",
    icon: Zap
  },
  {
    title: "Хирургия, а не поэзия",
    description: "Мы не обещаем абстрактный рост продаж. Мы считаем окупаемость в простых цифрах на вашем процессе.",
    icon: BarChart3
  },
  {
    title: "Честность на старте",
    description: "Если до запуска пилота цифры не сходятся — мы прямо об этом говорим и не берем проект.",
    icon: ShieldCheck
  }
];

export function Approach() {
  return (
    <section id="approach" className="py-24 sm:py-32 bg-secondary/20 relative overflow-hidden scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Наш подход</h2>
          <h3 className="text-3xl sm:text-5xl font-headline font-black text-white mb-8 leading-tight">
            Мы не продаем <br /><span className="text-muted-foreground/40 italic">«AI ради AI»</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((item, i) => (
            <div key={i} className="premium-glass p-8 sm:p-12 rounded-[2.5rem] border border-accent/10 hover:border-accent/30 transition-all duration-500 group relative overflow-hidden">
              {/* Фоновая иконка с анимацией */}
              <div className="absolute -right-6 -bottom-6 text-accent/5 transition-all duration-700 group-hover:scale-150 group-hover:text-accent/10 group-hover:-rotate-12 pointer-events-none">
                <item.icon size={180} strokeWidth={1} />
              </div>

              <div className="relative z-10">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 sm:mb-10 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 shadow-lg">
                  <item.icon size={32} strokeWidth={1.5} className="sm:w-10 sm:h-10" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight">{item.title}</h4>
                <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}