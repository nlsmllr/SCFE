import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { newsreader } from '@/fonts';


const palette = {
  green: {
    500: '#59ED82',
    200: '#d5fbe0',
  },
  pink: {
    700: '#fe9ea0',
    500: '#fdb2b6',
    200: '#ffe1e3',
  },
  blue: {
    700: '#009cf8',
    500: '#61c5ff',
    200: '#bfe8ff',
  },
  yellow: {
    700: '#ffc864',
    500: '#fff0a1',
    200: '#fff9da',
  },
  white: {
    DEFAULT: '#ffffff',
    alpha: 'rgba(255, 255, 255, 0.5)',
  },
  black: {
    DEFAULT: '#000000',
    50: '#f4f4f5',
    400: '#a8a8a7',
    600: '#646464',
    700: '#333',
    800: '#111',
  },
};

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        newsreader: ['var(--font-newsreader)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        'protofy-accent': {
          primary: palette.green[500],
          secondary: {
            pink: palette.pink[500],
            blue: palette.blue[500],
            yellow: palette.yellow[500],
          },
        },
        'protofy-surface': {
          primary: palette.white.DEFAULT,
          secondary: palette.black[50],
          inverted: palette.black.DEFAULT,
          'invert-secondary': palette.black[800],
          'invert-secondary-light': palette.black[700],
          brand: {
            green: { DEFAULT: palette.green[200], dark: palette.green[500] },
            pink: {
              DEFAULT: palette.pink[200],
              dark: palette.pink[700],
            },
            blue: {
              DEFAULT: palette.blue[200],
              dark: palette.blue[700],
            },
            yellow: {
              DEFAULT: palette.yellow[200],
              dark: palette.yellow[700],
            },
          },
        },
        'protofy-text': {
          primary: palette.black[800],
          secondary: {
            DEFAULT: palette.black[400],
            dark: palette.black[600],
          },
          invert: {
            DEFAULT: palette.white.DEFAULT,
            secondary: palette.white.alpha,
          },
        },
        'protofy-border': {
          DEFAULT: palette.black[800],
          inverted: palette.white.DEFAULT,
        },
      },
      transitionDuration: {
        '180': '180ms',
      },
      width: {
        content: '91.5%',
      },
      maxWidth: {
        content: 'calc(1382px + 8.5%)',
      },
      padding: {
        'content-boundary': '4.25%',
      },
      height: {
        unset: 'unset',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        inter: {
          fontFamily: 'var(--font-inter)',
        },
        newsreader: {
          fontFamily: 'var(--font-newsreader)',
        },
        '.inter-h1': {
          // 64px to 148px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,64—148 */
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(4rem, 2.1514rem + 7.8873vi, 9.25rem)',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'clamp(4.36rem, 2.3125rem + 8.7362vi, 10.175rem)',
          letterSpacing: '-0.07em',
        },
        '.inter-h2': {
          // 36px to 96px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,36—96 */
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(2.25rem, 0.9296rem + 5.6338vi, 6rem)',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '125%',
          letterSpacing: '-0.06em',
        },
        '.inter-h3': {
          // 36px to 72px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,36—72 */
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(2.25rem, 1.4577rem + 3.3803vi, 4.5rem)',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'clamp(2.425rem, 1.2982rem + 4.8075vi, 5.625rem)',
          letterSpacing: '-0.05em',
        },
        '.inter-h4': {
          // 20px to 36px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,20—36 */
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(1.25rem, 0.8979rem + 1.5023vi, 2.25rem)',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '150%',
          letterSpacing: '-0.03em',
        },
        '.inter-h5': {
          // 16px to 32px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,16—32 */
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(1rem, 0.6479rem + 1.5023vi, 2rem)',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'clamp(1.5rem, 1.007rem + 2.1033vi, 2.9rem)',
          letterSpacing: '-0.03em',
        },
        '.inter-subtitle': {
          // 14px to 24px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,14—24 */
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(0.875rem, 0.6549rem + 0.939vi, 1.5rem);',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '150%',
          letterSpacing: '-0.02em',
        },
        '.inter-body-base': {
          // 12px to 24px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,12—24 */
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(0.75rem, 0.4859rem + 1.1268vi, 1.5rem)',
          fontStyle: 'normal',
          fontWeight: '300',
          lineHeight: '150%',
          letterSpacing: '-0.01em',
        },
        '.inter-body-lg': {
          // 20px to 36px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,20—36 */
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(1.25rem, 0.8979rem + 1.5023vi, 2.25rem)',
          fontStyle: 'normal',
          fontWeight: '300',
          lineHeight: '145%',
          letterSpacing: '-0.01em',
        },
        '.inter-body-sm': {
          // 14px to 16px
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(0.875rem, 0.831rem + 0.1878vi, 1rem)',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '150%',
          letterSpacing: '-0.01em',
        },
        '.newsreader-h1': {
          // 64px to 148px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,64—148 */
          fontFamily: 'var(--font-newsreader)',
          fontSize: 'clamp(4rem, 2.1514rem + 7.8873vi, 9.25rem)',
          fontStyle: 'italic',
          fontWeight: '400',
          lineHeight: '125%',
        },
        '.newsreader-h2': {
          // 36px to 96px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,36—96 */
          fontFamily: 'var(--font-newsreader)',
          fontSize: 'clamp(2.25rem, 0.9296rem + 5.6338vi, 6rem)',
          fontStyle: 'italic',
          fontWeight: '400',
          lineHeight: '125%',
          letterSpacing: '-0.01em',
        },
        '.newsreader-h3': {
          // 36px to 72px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,36—72 */
          fontFamily: 'var(--font-newsreader)',
          fontSize: 'clamp(2.25rem, 1.4577rem + 3.3803vi, 4.5rem)',
          fontStyle: 'italic',
          fontWeight: '400',
          lineHeight: 'clamp(2.425rem, 1.2982rem + 4.8075vi, 5.625rem)',
        },
        '.newsreader-h4': {
          // 24 to 36px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,24—36 */
          fontFamily: 'var(--font-newsreader)',
          fontSize: 'clamp(1.5rem, 1.2359rem + 1.1268vi, 2.25rem)',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '127%',
          letterSpacing: 'clamp(-0.0225rem, -0.0304rem + 0.0338vi, 0rem)',
        },
        '.newsreader-h5': {
          // 16px to 32px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,16—32 */
          fontFamily: 'var(--font-newsreader)',
          fontSize: 'clamp(1rem, 0.6479rem + 1.5023vi, 2rem)',
          fontStyle: 'normal',
          fontWeight: '300',
          lineHeight: 'clamp(1.5rem, 1.007rem + 2.1033vi, 2.9rem)',
          letterSpacing: '-0.03em',
        },
        '.newsreader-subtitle': {
          // 14px to 24px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,14—24 */
          fontFamily: 'var(--font-newsreader)',
          fontSize: 'clamp(0.875rem, 0.6549rem + 0.939vi, 1.5rem);',
          fontStyle: 'italic',
          fontWeight: '400',
          lineHeight: '125%',
          letterSpacing: '0.02em',
        },
        '.newsreader-body-base': {
          // 12px to 24px
          /* @link https://utopia.fyi/clamp/calculator?a=375,1440,12—24 */
          fontFamily: 'var(--font-newsreader)',
          fontSize: 'clamp(0.75rem, 0.4859rem + 1.1268vi, 1.5rem)',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '150%',
        },
        '.typography-button-sm': {
          fontFamily: 'var(--font-inter)',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '1',
          letterSpacing: '-0.01em',
        },
        '.typography-button-lg': {
          fontFamily: 'var(--font-inter)',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '1',
          letterSpacing: '-0.01em',
        },
        '.rolling-banner-animation': {
          transition: 'all 0.18s ease-in-out',
        },
      });
    }),
  ],
};
export default config;
