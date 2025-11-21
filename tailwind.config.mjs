/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4f3',
          100: '#fbe8e5',
          200: '#f7d1cc',
          300: '#f0b3aa',
          400: '#e88d7f',
          500: '#CE6D5F', // Color primario base
          600: '#b85a4d',
          700: '#9a4a3f',
          800: '#7f3e35',
          900: '#6a352e',
          950: '#3a1c18',
        },
        secondary: {
          50: '#f7f6f5',
          100: '#eeedeb',
          200: '#ddd9d6',
          300: '#c4beb9',
          400: '#a59d96',
          500: '#8a8078',
          600: '#6b625b',
          700: '#4F4A45', // Color secundario base
          800: '#3f3a36',
          900: '#36322f',
          950: '#1c1917',
        },
        tertiary: {
          50: '#f0f6f5',
          100: '#daebe9',
          200: '#b8d6d2',
          300: '#8fbbb6',
          400: '#5C8C85', // Color terciario base
          500: '#4a716b',
          600: '#3d5c57',
          700: '#344c48',
          800: '#2d3f3c',
          900: '#283634',
          950: '#131c1a',
        },
        accent: {
          50: '#faf7f2',
          100: '#f4ede0',
          200: '#e8d9c0',
          300: '#dac09a',
          400: '#D4A77D', // Color de acento base
          500: '#c8966a',
          600: '#b87f52',
          700: '#9a6644',
          800: '#7f543a',
          900: '#684633',
          950: '#372318',
        },
        cream: {
          50: '#FEFCFB',
          100: '#FDF9F7',
          200: '#FBF3EF',
          300: '#F8F4EF', // Color de fondo claro base
          400: '#f5ede4',
          500: '#ede0d0',
          600: '#d4c4b0',
          700: '#b5a28a',
          800: '#968570',
          900: '#7a6d5c',
          950: '#40382f',
        },
        dark: {
          50: '#f7f6f5',
          100: '#eeedeb',
          200: '#ddd9d6',
          300: '#c4beb9',
          400: '#a59d96',
          500: '#8a8078',
          600: '#6b625b',
          700: '#4F4A45',
          800: '#3f3a36',
          900: '#36322f',
          950: '#1c1917',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

