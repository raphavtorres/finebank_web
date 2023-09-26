import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#22262B',
        'primary-gray': '#3B4045',
        'light-gray': '#ACACAC',
        'primary-yellow': '#F4BA13',
        'light-yellow': '#E6C567',
        'primary-white': '#E6E6E6'
      }
    },
  },
  plugins: [],
}
export default config
