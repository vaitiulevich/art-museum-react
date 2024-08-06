import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
          accent: string;
          fill: string;
          fillBase: string;
          fillFrame: string;
          fillMenuPanel: string;
          fontColor: string;
          accentText: string;
          headerLink: string;
          activeFavorite: string;
          fillFavorite: string;
          linerGradientHeader: string;
          errMessage: string;
          fillOverlay: string;
        };
        typography: {
          fontSize: {
            small: string;
            medium: string;
            large: string;
            largest: string;
          };
          fontFamily: {
            general: string;
          };
          fontWeight: {
            thin: string;
            normal: string;
            bold: string;
          };
        };
        indents: {
          containerPaddingDesctop: string;
          containerPaddingLaptop: string;
          containerPaddingMobile: string;
        };
        border: string;
      }
      
}