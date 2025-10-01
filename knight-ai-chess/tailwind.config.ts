import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#135bec',
        'background-light': '#f6f6f8',
        'background-dark': '#101622',
        'board-dark': '#769656',
        'board-light': '#e9edc9',
        'board-light-green': '#e9edc9',
        'board-dark-green': '#769656',
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        },
        win: '#22c55e',
        loss: '#ef4444',
        draw: '#f97316',
        optimal: '#22c55e',
        mistake: '#f97316',
        blunder: '#ef4444',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

export default config;
