import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // screens: {
    //   xs: '480px',
    //   ...defaultTheme.screens,
    // },
    colors: {
      bg: {
        main: '#D1EAF9',
      },
      text: {
        primary: '#222',
        secondary: '#B6B6B6',
      },
      'error-color': '#f43f5e',
      'border-gray': '#E8E8E8',
      black: '#000000',
      'dark-as-night': '#222222',
      lightdark: '#4c4c4c',
      white: '#ffffff',
      transparent: 'transparent',
      lightgray: 'lightgray',
      silver: '#C4C4C4',
      'brainstem-grey': '#b6b6b6',
      'deep-sky-blue': '#0B96B4',
      'light-blue': '#F8F8F8',
      'rebecca-purple': '#551DB0',
      'grey-as-stone': '#767575',
      greyDark: '#727377',
      'dark-white': '#F8F8F8',
    },
    fontSize: {
      // Desktop
      h1: ['90px', 'normal'],
      h2: ['48px', 'normal'],
      h4: ['36px', 'normal'],
      'body-1': ['21px', 'normal'],
      'body-2': ['16px', 'normal'],

      'sm-10': ['10px', 'normal'],
      'sm-12': ['12px', 'normal'],
      sm: ['14px', 'normal'],
      'sm-16': ['16px', 'normal'], //заменить
      base: ['18px', 'normal'],
      'base-21': ['21px', 'normal'], //заменить
      'base-24': ['24px', 'normal'],
      'lg-18': ['18px', 'normal'], //заменить
      lg: ['36px', 'normal'], //заменить
      xl: ['48px', 'normal'], //заменить
      'not-found': ['144px', 'normal'],

      // Tablet
      'h1-tablet': ['68px', 'normal'],

      // Mobile
      'h1-mobile': ['48px', 'normal'],
      'h2-mobile': ['36px', 'normal'],
      'h4-mobile': ['28px', 'normal'],
      'body-1-mobile': ['16px', 'normal'],
      'body-2-mobile': ['14px', 'normal'],
    },
    extend: {
      backgroundImage: {
        'gradient-main': 'linear-gradient(253deg, var(--tw-gradient-stops))',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        openSans: ['var(--font-openSans)'],
        nunito: ['var(---font-nunito)'],
      },
      boxShadow: {
        card: '0px 3px 16px 0px rgba(0, 0, 0, 0.1)',
      },
      gridTemplateColumns: {
        '3': 'repeat(3, minmax(0, 380px))',
      },
      screens: {
        '3xl': '1900px',
        xs: '375px',
      },
    },
  },
  plugins: [],
};
export default config;
