import { Inter, Roboto, Open_Sans, Lato } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const roboto = Roboto({
  subsets: ['latin'], variable: '--font-roboto',
  weight: '100'
});
export const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
export const lato = Lato({
  subsets: ['latin'], variable: '--font-lato',
  weight: '100'
});
