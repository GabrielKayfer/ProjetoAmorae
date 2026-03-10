import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      brand: string;
      brandDark: string;
      accent: string;
      background: string;
      surface: string;
      surfaceAlt: string;
      border: string;
      text: string;
      textMuted: string;
      white: string;
    };
    typography: {
      fontFamily: {
        base: string;
        heading: string;
      };
      weight: {
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      scale: {
        display: string;
        headingLg: string;
        headingMd: string;
        headingSm: string;
        body: string;
        bodySm: string;
        caption: string;
      };
      lineHeight: {
        tight: number;
        base: number;
        relaxed: number;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
      pill: string;
    };
    shadows: {
      sm: string;
      md: string;
    };
  }
}
