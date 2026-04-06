import React from "react";
import ReactDOM from "react-dom/client";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import App from "./App";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../state/CartContext";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyleSheetManager disableCSSOMInjection>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CartProvider>
            <GlobalStyle />
            <App />
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>,
);
