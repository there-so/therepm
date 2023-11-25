import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/components/globalstyles";

const theme: DefaultTheme = {
  colors: {
    greyText: "#777",
    mutedText: "#B3B3B3",
    secondary: "#B3B3B3",
    darkText: "#444",
    lightGreen: "#DDE8D8",
    green: "#44C285",
    darkGreen: "#2FB568",
    red: "#FF5E85",
    lightBlue: "#2D9CDB",
    brandBlue: "rgb(28, 132, 255)",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
