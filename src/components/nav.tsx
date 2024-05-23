"use client";

import { Link } from "@chakra-ui/next-js";
import { Flex } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      alignItems="center"
      paddingBlock="1rem"
    >
      <Link href="/" fontSize="1.375rem">
        Home
      </Link>
      <Flex gap="2.5rem" color="#535661">
        <Link href="/search">Search</Link>
        <Link href="/help">Help</Link>
        <Link href="/account">Account</Link>
        <Link href="/bag">Bag (0)</Link>
      </Flex>
    </Flex>
  );
}
