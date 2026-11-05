import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9f3',
          100: '#faf3e0',
          200: '#f5e6c8',
          300: '#e8d4a8',
          400: '#d4b577',
          500: '#c9a35f',
          600: '#b8914f',
          700: '#997640',
          DEFAULT: '#c9a35f',
        },
        cream: '#faf8f5',
        'light-brown': '#8b7355',
      },
      backgroundImage: {
        marble: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3CfilterAttributes id="marble"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" /%3E%3CfeDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" /%3E%3C/filter%3E%3C/defs%3E%3Crect width="100" height="100" fill="%23faf8f5" filter="url(%23marble)" /%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}
export default config
