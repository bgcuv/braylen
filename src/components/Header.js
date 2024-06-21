import { Box, Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function Header() {
  return (
    <Flex
      justify="space-between"
      align="center"
      padding={4}
      background="brand.lightGreen"
    >
      <Box fontSize={"2xl"}>blog</Box>
      <Flex gap={4}>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
      </Flex>
    </Flex>
  );
}
