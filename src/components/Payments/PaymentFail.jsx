import {
  Button,
  Container,
  Heading,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

// importing icons
import { RiErrorWarningFill } from 'react-icons/ri';

import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container height={'90vh'}>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} color="red" />
        <Heading textTransform={'uppercase'}>Payment Failed</Heading>
        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme="yellow">
            Try Again
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
