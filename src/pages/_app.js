import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import "@fontsource/playwrite-es";
import "@fontsource/playwrite-us-trad";

const theme = extendTheme({
  fonts: {
    heading: "Playwrite ES",
    body: "Playwrite US Trad",
  },
  colors: {
    brand: {
      periwinkkle: "#bcb6ff",
      dartmouthGreen: "#ob6e4f",
      chineseViolet: "#7b5e7b",
      lightGreen: "#81e979",
      uranianBlue: "#b81ff",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
