import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

// importing icons
import { RiErrorWarningFill } from 'react-icons/ri';

const NotFound = () => {
  return (
    <Container height={'90vh'}>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} color='red' />
        <Heading textTransform={'uppercase'}>Page Not Found</Heading>
        <Link to={'/'}>
          <Button variant={'ghost'} colorScheme="yellow">
            Go to home
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default NotFound;
