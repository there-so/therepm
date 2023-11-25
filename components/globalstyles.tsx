import { createGlobalStyle, css } from "styled-components";

import { phone } from "../utils/media";
import { BASE_FONT_SIZE, BASE_MOBILE_FONT_SIZE } from "../utils/rem";

const GlobalStyle = createGlobalStyle`
 html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Work Sans", sans-serif;
    font-size: ${BASE_FONT_SIZE}px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${phone(css`
      font-size: ${BASE_MOBILE_FONT_SIZE}px;
    `)};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }


`;

export default GlobalStyle;
