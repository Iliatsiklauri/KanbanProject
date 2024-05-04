import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      NearBlack: '#000112',
      veryDarkGreyDarkBg: '#20212C',
      DarkGrey: '#2B2C37',
      linesDark: '#3E3F4E',
      MediumGrey: '#828FA3',
      linesLight: '#E4EBFA',
      lightGreylightBg: '#F4F7FD',
      red: '#EA5555',
      redHover: '#FF9898',
      MainPurple: '#635FC7',
      MainPurpleHover: '#A8A4FF',
      white: '#FFF',
      black: '#000',
    },
  },
  plugins: [],
};
export default config;
