import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Box padding={8}>{children}</Box>
    </>
  );
}
