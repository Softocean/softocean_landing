import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'error-color': '#f43f5e',
      'border-gray': '#E8E8E8',
      black: '#000000',
      'dark-as-night': '#222222',
      lightdark: '#4c4c4c',
      white: '#ffffff',
      transparent: 'transparent',
      lightgray: 'lightgray',
      'deep-sky-blue': '#0B96B4',
      'light-blue': '#F8F8F8',
      'rebecca-purple': '#551DB0',
      'grey-as-stone': '#767575',
      greyDark: '#727377',
    },
    fontSize: {
      'sm-10': ['10px', 'normal'],
      'sm-12': ['12px', 'normal'],
      sm: ['14px', 'normal'],
      'sm-16': ['16px', 'normal'],
      base: ['18px', 'normal'],
      'base-21': ['21px', 'normal'],
      'base-24': ['24px', 'normal'],
      'lg-18': ['18px', 'normal'],
      lg: ['36px', 'normal'],
      xl: ['48px', 'normal'],
    },
    extend: {
      backgroundImage: {
        'gradient-main': 'linear-gradient(190deg, var(--tw-gradient-stops))',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        openSans: ['var(--font-openSans)'],
      },
    },
  },
  plugins: [],
};
export default config;
