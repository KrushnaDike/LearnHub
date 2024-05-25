import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// importing image
import introVideo from '../../assets/videos/intro.mp4';

// importing icons
import { RiSecurePaymentFill } from 'react-icons/ri';

// importing docs
import TermsAndConditions from '../../assets/docs/termsAndCondition';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://avatars.githubusercontent.com/u/72147135?s=400&u=adab3a45cfeda86ea0cdd9576747e25448c1ef41&v=4"
        boxSize={['40', '48']}
      />
      <Text opacity={0.7}>Co-Founder</Text>
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading size={['md', 'xl']}>Krushna Dike</Heading>
      <Text textAlign={['center', 'left']}>
        Hii, I am a Software Developer. Our mission is to provide quality
        content at reasonable price.
      </Text>
    </VStack>
  </Stack>
);

const Videoplayer = () => (
  <Box>
    <video
      src={introVideo}
      autoPlay
      muted
      loop
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
    ></video>
  </Box>
);

const TandC = ({ TermsAndConditions }) => (
  <Box>
    <Heading textAlign={['center', 'left']} size={'md'} my={'4'}>
      Terms & Condition
    </Heading>

    <Box h={'sm'} p={'4'} overflowY={'scroll'}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
        fontFamily={'heading'}
      >
        {TermsAndConditions}
      </Text>

      <Heading my={'4'} size={'xs'}>
        Refund only application for cancellation within 7 days.{' '}
      </Heading>
    </Box>
  </Box>
);

const About = () => {
  return (
    <Fragment>
      <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
        <Heading textAlign={['center', 'left']}>About Us</Heading>

        <Founder />

        <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
          <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
            We are a video streaming flatform with some premium courses
            available only for premium users.
          </Text>

          <Link to={'/subscribe'}>
            <Button variant={'ghost'} colorScheme="yellow">
              Checkout Our Plans
            </Button>
          </Link>
        </Stack>

        <Videoplayer />

        <TandC TermsAndConditions={TermsAndConditions} />

        <HStack my={'4'} p={'4'}>
          <RiSecurePaymentFill />
          <Heading
            size={'xs'}
            fontFamily={'sans-serif'}
            textTransform={'uppercase'}
          >
            Payment is secured by Razorpay
          </Heading>
        </HStack>
      </Container>
    </Fragment>
  );
};

export default About;
