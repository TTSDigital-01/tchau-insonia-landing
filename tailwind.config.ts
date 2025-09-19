// tailwind.config.ts (Versión 2.3 - Estable)

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B2A49',
        secondary: '#AAB8E8',
        accent: '#94D1BE',
        background: '#F5F6FA',
        'base-text': '#333333',
        'secondary-text': '#A9A9A9',
        highlight: '#FAD4C0',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        body: ['var(--font-roboto)'],
      },
      animation: {
        'gradient': 'gradient-animation 12s ease infinite', // Duración ajustada a 12s
      },
      keyframes: {
        'gradient-animation': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
export default config;
// FIRMADO: EDU