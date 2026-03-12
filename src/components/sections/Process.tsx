"use client";

import { CheckCircle2, Search, Zap, LineChart, Layers } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Бесплатный разбор",
    time: "20–30 минут",
    description: "Находим потерю денег/времени, подбираем 1 пилот, считаем окупаемость. Это не консалтинг ради консалтинга.",
    icon: Search
  },
  {
    step: "02",
    title: "Платный пилот",
    time: "7–10 дней",
    description: "Внедрение одного конкретного механизма под ключ в вашу текущую систему.",
    icon: Zap
  },
  {
    step: "03",
    title: "Замер результата",
    time: "Сразу после",
    description: "Смотрим сухие цифры до/после внедрения AI-механизма.",
    icon: LineChart
  },
  {
    step: "04",
    title: "Масштабирование",
    time: "Перспектива",
    description: "Если пилот дает результат — расширяем AI на другие узлы вашего бизнеса.",
    icon: Layers
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-background overflow-hidden scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Как мы работаем</h2>
          <h3 className="text-3xl sm:text-5xl font-headline font-black text-white leading-tight">
            Путь к результату <br /><span className="text-muted-foreground/40 italic text-2xl sm:text-4xl">из 4 прозрачных шагов</span>
          </h3>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((item, i) => (
              <div key={i} className="relative group">
                <div className="premium-glass p-8 sm:p-10 rounded-[2.5rem] border border-white/5 group-hover:border-accent/40 transition-all duration-500 h-full flex flex-col hover:translate-y-[-4px] relative overflow-hidden">
                  {/* Фоновая иконка или номер с анимацией */}
                  <div className="absolute -right-4 -bottom-4 text-accent/5 transition-all duration-700 group-hover:scale-150 group-hover:text-accent/10 pointer-events-none">
                    <item.icon size={150} strokeWidth={1} />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-5xl sm:text-6xl font-black text-accent/20 mb-6 group-hover:text-accent/40 transition-colors">
                      {item.step}
                    </div>
                    <div className="flex items-center gap-2 text-accent font-black text-xs sm:text-sm uppercase tracking-widest mb-4">
                      <CheckCircle2 size={16} />
                      {item.time}
                    </div>
                    <h4 className="text-2xl font-black text-white mb-4 leading-tight">{item.title}</h4>
                    <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}