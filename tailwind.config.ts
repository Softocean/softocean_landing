import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'deep-sky-blue': '#0B96B4',
      'rebecca-purple': '#551DB0',
    },
    fontFamily: {
      manrope: ['Manrope'],
    },
    fontSize: {
      'sm-10': ['10px', '18px'],
      'sm-12': ['12px', '20px'],
      sm: ['14px', '20px'],
      'sm-16': ['16px', '22px'],
      base: ['18px', '26px'],
      'base-21': ['21px', '30px'],
      'base-24': ['24px', '31px'],
      lg: ['36px', '48px'],
      xl: ['48px', '60px'],
    },
    extend: {
      backgroundImage: {
        'gradient-main': 'linear-gradient(190deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
