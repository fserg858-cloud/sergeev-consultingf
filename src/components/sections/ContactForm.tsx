
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Send, Sparkles, Loader2 } from "lucide-react";
import { sendToTelegram } from "@/app/actions/send-telegram";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  telegram: z.string().min(2, "Ник в Telegram обязателен"),
  business: z.string().optional(),
  agree: z.boolean().refine((val) => val === true, {
    message: "Необходимо согласие на обработку данных",
  }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      telegram: "",
      business: "",
      agree: true,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await sendToTelegram({
        name: values.name,
        telegram: values.telegram,
        business: values.business,
      });
      
      if (result.success) {
        toast({
          title: "Заявка принята!",
          description: "Мы скоро свяжемся с вами в Telegram для согласования времени разбора.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Ошибка отправки",
          description: result.message || "Не удалось отправить заявку.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Что-то пошло не так. Попробуйте еще раз позже.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background relative overflow-hidden scroll-mt-header">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-10">
            <Sparkles size={16} className="animate-pulse text-accent" />
            <span>Финальный шаг</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-headline font-black text-white mb-6 text-gradient leading-tight">Давайте проверим вашу воронку</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            За 20 минут бесплатно покажем, где AI даст быстрый и измеримый эффект именно в вашем бизнесе.
          </p>
        </div>

        {/* Блок одного цвета (bg-secondary/40) без диагоналей */}
        <div className="bg-secondary/40 p-8 sm:p-14 rounded-[3.5rem] border border-white/5 shadow-2xl mx-2 sm:mx-0 relative overflow-hidden">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-black uppercase text-[10px] sm:text-xs tracking-[0.2em] ml-2 mb-3 block">Полное имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван Иванов" {...field} className="h-16 bg-black/40 border-white/10 rounded-2xl text-white px-6 focus:ring-accent/50 text-base" disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telegram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-black uppercase text-[10px] sm:text-xs tracking-[0.2em] ml-2 mb-3 block">Ник в Telegram</FormLabel>
                      <FormControl>
                        <Input placeholder="@username" {...field} className="h-16 bg-black/40 border-white/10 rounded-2xl text-white px-6 focus:ring-accent/50 text-base" disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="business"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-black uppercase text-[10px] sm:text-xs tracking-[0.2em] ml-2 mb-3 block">Кратко о бизнесе</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Примеры: Онлайн-школа, хотим реанимировать базу. Мебельный салон, ищем бота для заявок."
                        className="min-h-[140px] bg-black/40 border-white/10 rounded-2xl text-white p-6 focus:ring-accent/50 text-base resize-none"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="agree"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-4 space-y-0 p-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-6 w-6 rounded-lg border-accent/50 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-xs sm:text-sm text-muted-foreground font-medium cursor-pointer">
                        Я согласен с <Link href="/privacy" className="text-accent underline hover:text-accent/80 transition-colors">политикой обработки данных</Link>
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground h-20 rounded-2xl text-xl font-black shadow-[0_0_30px_rgba(198,138,83,0.5)] hover:shadow-[0_0_50px_rgba(198,138,83,0.8)] transition-all hover:scale-[1.01] active:scale-[0.98] border-none group">
                {isSubmitting ? (
                  <>Отправка... <Loader2 className="ml-3 h-7 w-7 animate-spin" /></>
                ) : (
                  <>Записаться на разбор <Send className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" /></>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
