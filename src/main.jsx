import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Fonts from "./assets/Fonts.jsx";

const themeConfig = {
  colors: {
    primary: { 900: "#FF6C01", 500: "#EBFF00" },
    secondary: { 900: "#FFDBBA", 500: "#FFE9D4", 300: "#FFE9D4" },
    tertiary: {900: "#973600", 500: "#A46E3C", 300: "#A46E3C99", 200: "#FFBE82"},    
  },
  fonts:{
    heading: "Lato",
    body: "Inter"
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
};
const theme = extendTheme(themeConfig);
localStorage.setItem("chakra-ui-color-mode", "light")


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
