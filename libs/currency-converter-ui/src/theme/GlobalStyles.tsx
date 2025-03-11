import { Global, css } from '@emotion/react';
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ['latin'], weight: ['400', '700'] });

export const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: ${geist.style.fontFamily}, sans-serif;
      }
    `}
  />
);
