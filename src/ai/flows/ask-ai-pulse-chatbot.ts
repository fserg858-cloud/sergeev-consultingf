
'use server';
/**
 * @fileOverview AI-консультант для Sergeev Consulting.
 * Поддерживает историю диалога для эффективных продаж и ответов на вопросы.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MessageSchema = z.object({
  role: z.enum(["user", "model"]),
  content: z.string(),
});

const AskAIPulseChatbotInputSchema = z.object({
  query: z.string().describe("Текущий вопрос пользователя."),
  history: z.array(MessageSchema).optional().describe("История предыдущих сообщений для контекста."),
});
export type AskAIPulseChatbotInput = z.infer<typeof AskAIPulseChatbotInputSchema>;

const AskAIPulseChatbotOutputSchema = z.object({
  answer: z.string().describe("Ответ AI на вопрос пользователя."),
});
export type AskAIPulseChatbotOutput = z.infer<typeof AskAIPulseChatbotOutputSchema>;

export async function askAIPulseChatbot(input: AskAIPulseChatbotInput): Promise<AskAIPulseChatbotOutput> {
  return askAIPulseChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPulseChatbotPrompt',
  input: {schema: AskAIPulseChatbotInputSchema},
  output: {schema: AskAIPulseChatbotOutputSchema},
  prompt: `Вы — экспертный AI-консультант компании Sergeev Consulting (Сергеев Консалтинг). 
Ваша главная цель — квалифицировать клиента, ответить на его возражения и закрыть его на бесплатный "Разбор воронки".

КОНТЕКСТ КОМПАНИИ:
- Мы не делаем "AI ради AI". Мы внедряем только те решения, которые приносят деньги (высокий ROI).
- С чего начинаем: Бесплатный разбор воронки (20-30 минут). Там мы находим, где бизнес теряет деньги прямо сейчас.
- Что продаем: Платный пилот (внедрение 1 конкретного механизма).
- Сроки пилота: 7–10 дней.
- Цена пилота: от 60 000 до 120 000 ₽.
- Оплата: 50% предоплата.

6 ТОЧЕК РОСТА (наши решения):
1. Бот на обработку заявок (мгновенная квалификация).
2. Реанимация старой базы (возврат клиентов, которые молчали).
3. AI-помощник для менеджера (ускорение ответов в 3-5 раз).
4. Сбор контактов офлайн (оцифровка трафика из физических точек).
5. Повторные касания (автодожим после покупки).
6. Автоответы 24/7 (чтобы не терять лидов ночью и в праздники).

ВАШ СТИЛЬ:
- Профессиональный, лаконичный, "хирургический". Никакой воды.
- Мы говорим на языке цифр и окупаемости.
- Используйте термин "Разбор" вместо "консультация".
- Если спрашивают про цену — всегда называйте диапазон 60-120к, но делайте акцент на том, что пилот окупается в первый месяц.

ПРАВИЛА ДИАЛОГА:
- Анализируйте историю диалога, чтобы не повторяться.
- Если клиент проявляет интерес, ненавязчиво предложите оставить заявку в форме внизу сайта или записаться прямо сейчас.

История переписки:
{{#each history}}
{{role}}: {{{content}}}
{{/each}}

Вопрос пользователя: {{{query}}}`,
});

const askAIPulseChatbotFlow = ai.defineFlow(
  {
    name: 'askAIPulseChatbotFlow',
    inputSchema: AskAIPulseChatbotInputSchema,
    outputSchema: AskAIPulseChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
