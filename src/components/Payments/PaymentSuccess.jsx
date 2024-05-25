import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

// importing icons
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const reference = useSearchParams()[0].get('reference');

  return (
    <Container height={'100vh'} p={'16'}>
      <Heading my={'8'} textAlign={'center'}>
        You have pro pack
      </Heading>

      <VStack
        boxShadow={'lg'}
        pb={'16'}
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box
          bg={'yellow.400'}
          w={'full'}
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color={'black'}> Payment Success </Text>
        </Box>

        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text>
              Congratulations you're a pro member. You have access to premium
              content.
            </Text>

            <Heading size={'4xl'}>
              <RiCheckboxCircleFill color="green" />
            </Heading>
          </VStack>
        </Box>

        <Link to={'/profile'}>
          <Button variant={'ghost'} colorScheme="yellow">
            Go to profile
          </Button>
        </Link>

        <Heading size={'xs'}> Reference: {reference}</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
