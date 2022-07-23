import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "./contexts/CartContext";
import { LocationProvider } from "./contexts/LocationContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <LocationProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </LocationProvider>
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
