import {
    Button,
    VStack,
    Link,
  } from '@chakra-ui/react';
  
  export default function HomePage() {
    return (
      <>
        <VStack spacing={8}>
          <Button colorScheme='blue'>
            <Link 
            href="/register"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
            >
                Create player
            </Link>
          </Button>
          <Button colorScheme='blue'>
            <Link 
                href="/edit-player"
                fontSize="2xl"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Edit Player
                </Link>
          </Button>
          
          <Button colorScheme='blue'>
          <Link 
            href="/search"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
            >
                Search player
            </Link>
          </Button>
        </VStack>
      </>
    );
  }
  