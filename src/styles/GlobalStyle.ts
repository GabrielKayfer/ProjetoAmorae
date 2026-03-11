import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    background:
      radial-gradient(circle at top left, rgba(242, 166, 73, 0.18), transparent 28%),
      linear-gradient(180deg, rgba(242, 235, 223, 0.96) 0%, rgba(242, 153, 133, 0.2) 52%, rgba(242, 235, 223, 1) 100%);
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.fontFamily.base};
    font-size: ${({ theme }) => theme.typography.scale.body};
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
  }

  body, button, input, textarea, select {
    font: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a[href],
  button,
  [role="button"],
  summary {
    cursor: pointer;
  }

  button {
    border: 0;
    background: transparent;
  }

  ul, ol {
    list-style: none;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.brand};
    color: ${({ theme }) => theme.colors.white};
  }

  #root {
    min-height: 100vh;
  }
`;
