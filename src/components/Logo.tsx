
"use client";

import React from 'react';

/**
 * Кастомный логотип Sergeev Consulting (Минималистичный микрочип).
 * Отрисован на основе предоставленного пользователем фото.
 */
export function Logo({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Контакты чипа (ножки) - по 3 с каждой стороны */}
      <rect x="8" y="2" width="1.5" height="3" rx="0.5" fill="currentColor" />
      <rect x="11.25" y="2" width="1.5" height="3" rx="0.5" fill="currentColor" />
      <rect x="14.5" y="2" width="1.5" height="3" rx="0.5" fill="currentColor" />
      
      <rect x="8" y="19" width="1.5" height="3" rx="0.5" fill="currentColor" />
      <rect x="11.25" y="19" width="1.5" height="3" rx="0.5" fill="currentColor" />
      <rect x="14.5" y="19" width="1.5" height="3" rx="0.5" fill="currentColor" />
      
      <rect x="2" y="8" width="3" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="2" y="11.25" width="3" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="2" y="14.5" width="3" height="1.5" rx="0.5" fill="currentColor" />
      
      <rect x="19" y="8" width="3" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="19" y="11.25" width="3" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="19" y="14.5" width="3" height="1.5" rx="0.5" fill="currentColor" />
      
      {/* Корпус чипа */}
      <rect x="5" y="5" width="14" height="14" rx="1.5" fill="currentColor" />
      
      {/* Внутренняя деталь для объема */}
      <rect x="9" y="9" width="6" height="6" rx="0.5" fill="black" fillOpacity="0.2" />
    </svg>
  );
}
