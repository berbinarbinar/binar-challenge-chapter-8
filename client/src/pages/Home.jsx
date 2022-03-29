import { Code, Link, Text, VStack } from '@chakra-ui/react';
import { Logo } from '../Logo';

export default function Home() {
  return (
    <>
      <Text>Challenge 8</Text>
      <VStack spacing={8}>
        <Logo h="40vmin" pointerEvents="none" />
        <Text>
          Challenge ini menggunakan Chakra UI
        </Text>
        <Link
          color="teal.500"
          href="/register"
          fontSize="2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Dulu
        </Link>
      </VStack>
    </>
  );
}