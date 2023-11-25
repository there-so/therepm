import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      greyText: string;
      mutedText: string;
      darkText: string;
      lightGreen: string;
      green: string;
      darkGreen: string;
      red: string;
      lightBlue: string;
      brandBlue: string;
    };
  }
}
