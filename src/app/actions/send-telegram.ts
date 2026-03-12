
'use server';

/**
 * Серверное действие для отправки уведомлений в Telegram.
 * Исправлено: использование HTML вместо Markdown для предотвращения ошибок парсинга спецсимволов.
 */
export async function sendToTelegram(formData: { name: string; telegram: string; business?: string }) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { 
      success: false, 
      message: 'Сервер не настроен для отправки в Telegram.' 
    };
  }

  // Функция для безопасного экранирования HTML-тегов
  const escapeHTML = (text: string) => 
    text.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m] || m));

  const name = escapeHTML(formData.name);
  const telegram = escapeHTML(formData.telegram);
  const business = escapeHTML(formData.business || 'Не указано');

  const message = `
🚀 <b>Новая заявка на разбор!</b>

👤 <b>Имя:</b> ${name}
✈️ <b>Telegram:</b> ${telegram}
💼 <b>О бизнесе:</b> ${business}

#заявка #sergeevconsulting
  `.trim();

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Telegram API error:', data);
      throw new Error(data.description || 'Telegram API error');
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error sending to Telegram:', error);
    return { 
      success: false, 
      message: error.message || 'Не удалось отправить заявку' 
    };
  }
}
