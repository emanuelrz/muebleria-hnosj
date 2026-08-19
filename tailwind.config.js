/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        siena: {
          50: '#FAF0EB',
          100: '#F4DDD2',
          200: '#E7B8A2',
          300: '#D58D6E',
          400: '#B86840',
          500: '#A0522D', // Siena Tostado Oficial
          600: '#894323',
          700: '#6E341B',
          800: '#522513',
          900: '#38180B',
          DEFAULT: '#A0522D',
        },
        salvia: {
          50: '#F3F7F0',
          100: '#E4EDDD',
          200: '#C8DAB9',
          300: '#A8C493',
          400: '#95B67C',
          500: '#87A96B', // Verde Salvia Oficial
          600: '#6C8C52',
          700: '#526D3C',
          800: '#3A4E2A',
          DEFAULT: '#87A96B',
        },
        alabastro: {
          50: '#FCF9F5',
          100: '#FAF5ED',
          200: '#F5E6D3', // Alabastro Cálido Oficial
          300: '#ECD3B6',
          400: '#E1BC96',
          500: '#D4A476',
          DEFAULT: '#F5E6D3',
        },
        oro: {
          50: '#FCF9EC',
          100: '#F7F0D0',
          200: '#EFE0A2',
          300: '#E4CC6D',
          400: '#D4A437', // Vara de Oro Oficial
          500: '#B88B25',
          600: '#926C17',
          DEFAULT: '#D4A437',
        },
        rosa: {
          50: '#FBF5F4',
          100: '#F5E6E3',
          200: '#E8CCC7',
          300: '#D9AEA6',
          400: '#C47A6D', // Rosa Polvoriento Oficial
          500: '#AA5E51',
          600: '#8A483D',
          DEFAULT: '#C47A6D',
        },
        ebano: {
          DEFAULT: '#2C1810',
          dark: '#1E100A',
          light: '#42281D',
          muted: '#63473B'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'brand-title': '0.1em',
        'brand-btn': '0.08em',
        'brand-caption': '0.02em',
      }
    },
  },
  plugins: [],
}
