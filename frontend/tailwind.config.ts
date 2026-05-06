import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#07090F',
        panel: '#0E1320',
        accent: '#6D8BFF'
      }
    }
  },
  plugins: []
} satisfies Config;
