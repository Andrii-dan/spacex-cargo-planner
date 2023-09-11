import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d64933',
        secondary: '#e17666',
        text: { primary: '#514f59', secondary: '#fff' },
        background: {
          primary: '#ebebeb',
          secondary: '#08252b',
        },
      },
    },
  },
  plugins: [],
};
export default config;
