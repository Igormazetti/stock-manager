import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    GRAY_100: "#e2e3e6",
    GRAY_200: "#7f8081",
    LIGHT_BLUE: "#4b6d91",
  },
};

const theme = extendTheme({ colors });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
