import { Fraunces, Manrope } from 'next/font/google';

export const documentSans = Manrope({
  subsets: ['latin'],
  variable: '--font-document-sans',
});

export const documentDisplay = Fraunces({
  subsets: ['latin'],
  variable: '--font-document-display',
});
