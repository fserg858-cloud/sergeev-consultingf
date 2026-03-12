
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sergeev Consulting | Сергеев Консалтинг — Профессиональный AI Консалтинг',
  description: 'Бесплатно найдем узкое место, где ваш бизнес теряет деньги, и устраним его с помощью AI за 7–10 дней.',
  keywords: ['AI консалтинг', 'искусственный интеллект', 'автоматизация бизнеса', 'Sergeev Consulting', 'Сергеев Консалтинг', 'разбор воронки', 'внедрение AI'],
  authors: [{ name: 'Фёдор Сергеев' }],
  openGraph: {
    title: 'Sergeev Consulting | Сергеев Консалтинг',
    description: 'Бесплатно найдем узкое место, где ваш бизнес теряет деньги, и устраним его с помощью AI за 7–10 дней.',
    url: 'https://sergeev-consulting.ru',
    siteName: 'Sergeev Consulting',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sergeev Consulting | Сергеев Консалтинг — Делаем бизнес эффективным',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sergeev Consulting | Сергеев Консалтинг',
    description: 'Бесплатно найдем узкое место, где ваш бизнес теряет деньги, и устраним его с помощью AI за 7–10 дней.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* Favicon as SVG - Минималистичный микрочип */}
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23c68a53%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><rect x=%228%22 y=%222%22 width=%221.5%22 height=%223%22 rx=%220.5%22 fill=%22%23c68a53%22/><rect x=%2211.25%22 y=%222%22 width=%221.5%22 height=%223%22 rx=%220.5%22 fill=%22%23c68a53%22/><rect x=%2214.5%22 y=%222%22 width=%221.5%22 height=%223%22 rx=%220.5%22 fill=%22%23c68a53%22/><rect x=%228%22 y=%2219%22 width=%221.5%22 height=%223%22 rx=%220.5%22 fill=%22%23c68a53%22/><rect x=%2211.25%22 y=%2219%22 width=%221.5%22 height=%223%22 rx=%220.5%22 fill=%22%23c68a53%22/><rect x=%2214.5%22 y=%2219%22 width=%221.5%22 height=%223%22 rx=%220.5%22 fill=%22%23c68a53%22/><rect x=%222%22 y=%228%22 width=%223%22 height=%221.5%22 rx=%220.5%22 fill=%22%23c68a53%22/><rect x=%222%22 y=%2211.25%22 width=%223%22 height=%221.5%22 rx=%220.5%22 fill=%22%23c68a53%22/><rect x=%222%22 y=%2214.5%22 width=%223%22 height=%221.5%22 rx=%220.5%22 fill=%22%23c68a53%22/><rect x=%2219%22 y=%228%22 width=%223%22 height=%221.5%22 rx=%220.5%22 fill=%22%23c68a53%22/><rect x=%2219%22 y=%2211.25%22 width=%223%22 height=%221.5%22 rx=%220.5%22 fill=%22%23c68a53%22/><rect x=%2219%22 y=%2214.5%22 width=%223%22 height=%221.5%22 rx=%220.5%22 fill=%22%23c68a53%22/><rect x=%225%22 y=%225%22 width=%2214%22 height=%2214%22 rx=%221.5%22 fill=%22%23c68a53%22/></svg>" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
