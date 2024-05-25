import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { server } from '../../redux/store';
import { buySubscription } from '../../redux/actions/subscription.js';
import toast from 'react-hot-toast';
import { clearError } from '../../redux/reducers/subscriptionReducer';

// importing images
import Logo from '../../assets/images/logo.png';

const Subscribe = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState('');
  const { loading, error, subscriptionId } = useSelector(
    state => state.subscription
  );

  const { error: courseError } = useSelector(state => state.course);

  const subscriptionHander = async () => {
    const { data } = await axios.get(`${server}/payment/getRazorpayKey`);

    setKey(data.key);
    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    if (courseError) {
      toast.error(courseError);
      dispatch(clearError()); 
    }

    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: 'LearnHub',
          description: 'Get access to all premium content',
          image: Logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/payment/paymentVerification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: '+91 9325638959',
          },
          notes: {
            address: 'BugBusters at youtube',
          },
          theme: {
            color: '#FFC800',
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      };

      openPopUp();
    }
  }, [error, dispatch, key, courseError, subscriptionId, user]);

  return (
    <Container h={'100vh'} p={'16'}>
      <Heading textAlign={'center'} my={'8'}>
        Welcome
      </Heading>

      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={'0'}
      >
        <Box bg={'yellow.400'} p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text color={'black'}> Pro Pack - ₹299.00 </Text>
        </Box>

        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text>Join pro pack and get access to all content.</Text>
            <Heading>₹299 Only</Heading>
          </VStack>

          <Button
            isLoading={loading}
            colorScheme="yellow"
            my={'8'}
            w={'full'}
            onClick={subscriptionHander}
          >
            Buy Now
          </Button>
        </Box>

        <Box
          p={'4'}
          bg={'blackAlpha.600'}
          css={{ borderRadius: '0 0 8px 8px' }}
        >
          <Heading color={'white'} textTransform={'uppercase'} size={'sm'}>
            100% refund at cancellation
          </Heading>

          <Text fontSize={'xs'} color={'white'}>
            *Terms & Conditions Apply
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
