
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

/**
 * Конфигурация Genkit для использования моделей Google AI.
 * Используется Gemini 1.5 Flash для быстрого и качественного ответа.
 */
export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-1.5-flash',
});
