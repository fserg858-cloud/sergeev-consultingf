"use client";

import { MessageSquare, Users, UserCog, Scan, Repeat, Clock } from "lucide-react";

const solutions = [
  {
    title: "Бот на обработку заявок",
    description: "Мгновенный ответ и квалификация лида, пока он не остыл.",
    icon: MessageSquare
  },
  {
    title: "Реанимация старой базы",
    description: "Возвращаем тех, кто «молчал как мертвый карп».",
    icon: Users
  },
  {
    title: "AI-помощник для менеджера",
    description: "Ускоряет ответы и забирает рутину у вашей команды.",
    icon: UserCog
  },
  {
    title: "Сбор контактов офлайн",
    description: "Перевод трафика из физических точек в оцифрованную базу.",
    icon: Scan
  },
  {
    title: "Повторные касания",
    description: "Автоматический дожим клиента сразу после покупки.",
    icon: Repeat
  },
  {
    title: "Автоответы 24/7",
    description: "Устранение потерь заявок в нерабочее время и праздники.",
    icon: Clock
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 sm:py-32 bg-background scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 sm:mb-24 gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Меню решений</h2>
            <h3 className="text-3xl sm:text-5xl font-headline font-black text-white leading-tight">
              6 точек роста, которые <br /><span className="text-muted-foreground/40 italic">запускаются за неделю</span>
            </h3>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium max-w-sm border-l-0 lg:border-l-2 border-accent pl-0 lg:pl-6 py-2">
            Клиент узнает свою боль в конкретных механизмах, которые мы внедряем под ключ.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((item, i) => (
            <div key={i} className="bg-secondary/40 p-8 sm:p-10 rounded-[2.5rem] border border-white/5 hover:border-accent/20 transition-all duration-500 group relative overflow-hidden">
              {/* Фоновая иконка с анимацией */}
              <div className="absolute -right-8 -top-8 text-accent/5 transition-all duration-700 group-hover:scale-150 group-hover:text-accent/15 group-hover:rotate-12 pointer-events-none">
                <item.icon size={200} strokeWidth={1} />
              </div>
              
              <div className="relative z-10">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110">
                  <item.icon size={28} className="sm:w-8 sm:h-8" />
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