import React from 'react';
import {
  Heading,
  Stack,
  Text,
  VStack,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';

// importing css
import './home.css';
import { Link } from 'react-router-dom';

// importing images
import vg from '../../assets/images/bg.png';

// importing video
import introVideo from '../../assets/videos/intro.mp4';

// importing icons
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'8'}
          >
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text
              textAlign={['center', 'left']}
              fontSize={'2xl'}
              fontFamily={'cursive'}
            >
              Find Valueable Content At Reasonable Price
            </Text>
            <Link to={'/courses'}>
              <Button size="lg" colorScheme="yellow">
                Expore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit={'contain'}
          />
        </Stack>
      </div>

      <Box padding={'8'} bg={'blackAlpha.800'}>
        <Heading textAlign={'center'} fontFamily={'body'} color={'yellow.400'}>
          OUR BRANDS
        </Heading>

        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop={'4'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          src={introVideo}
          autoPlay
          loop
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  );
};

export default Home;
