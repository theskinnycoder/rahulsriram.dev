import { css, Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Neuzeit Grotesk Bold';
        src: url('/fonts/NeuzeitGrotesk-Bold.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/FiraCode-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'Inter var';
        src: url('/fonts/Inter.var.woff2') format('woff2');
        font-weight: 100 900;
      }
    `}
  />
);

export default Fonts;
