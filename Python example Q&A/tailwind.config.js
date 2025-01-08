/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border|hover:border|hover:bg)-(blue|green|purple|teal|pink|red|orange|yellow|indigo|violet|cyan|rose|amber)-(50|100|500|600)/,
    },
    {
      pattern: /from-(blue|green|purple|teal|pink|red|orange|yellow|indigo|violet|cyan|rose|amber)-50/,
    },
    {
      pattern: /to-(blue|green|purple|teal|pink|red|orange|yellow|indigo|violet|cyan|rose|amber)-50/,
    },
  ],
};