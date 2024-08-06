// export interface Theme {
//   colors: {
//     accent: string;
//     fill: string;
//     fillBase: string;
//     fillFrame: string;
//     fillMenuPanel: string;
//     fontColor: string;
//     accentText: string;
//     headerLink: string;
//     activeFavorite: string;
//     fillFavorite: string;
//     linerGradientHeader: string;
//     errMessage: string;
//     fillOverlay: string;
//   };
//   typography: {
//     fontSize: {
//       small: string;
//       medium: string;
//       large: string;
//       largest: string;
//     };
//     fontFamily: {
//       general: string;
//     };
//     fontWeight: {
//       thin: string;
//       normal: string;
//       bold: string;
//     };
//   };
//   indents: {
//     containerPaddingDesctop: string;
//     containerPaddingLaptop: string;
//     containerPaddingMobile: string;
//   };
//   border: string;
// }

import { DefaultTheme } from 'styled-components';

export const globalTheme: DefaultTheme = {
  colors: {
    accent: '#F17900',
    fill: '#FAFAFA',
    fontColor: '#393939',
    fillBase: '#fff',
    fillOverlay: '#00000080',
    fillFrame: '#eaeaea',
    fillMenuPanel: '#343333',
    accentText: '#E0A449',
    headerLink: '#fff',
    activeFavorite: '#fbd7b2',
    fillFavorite: '#f9f9f9',
    linerGradientHeader:
      'linear-gradient(90deg, #343333 0%, #484848 53%, #282828 100%)',
    errMessage: '##e40000',
  },
  typography: {
    fontSize: {
      small: '0.8rem',
      medium: '1rem',
      large: '2rem',
      largest: '3.5rem',
    },
    fontWeight: {
      thin: '100',
      normal: '300',
      bold: '600',
    },
    fontFamily: {
      general:
        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    },
  },
  indents: {
    containerPaddingDesctop: '1rem 15%',
    containerPaddingLaptop: '1rem 8%',
    containerPaddingMobile: '1rem 4%',
  },
  border: 'solid 0.01rem #f0f1f1',
};
