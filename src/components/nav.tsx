'use client';

import {Link} from '@chakra-ui/next-js';
import {Flex} from '@chakra-ui/react';

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
      <Flex gap={{base: '1rem', md: '2.5rem'}} color="#535661">
        <Link href="/">Search</Link>
        <Link href="/">Help</Link>
        <Link href="/">Account</Link>
        <Link href="/">Bag (0)</Link>
      </Flex>
    </Flex>
  );
}
