import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';

// importing icons
import { DiGithub } from 'react-icons/di';
import {
  TiSocialInstagramCircular,
  TiSocialYoutubeCircular,
} from 'react-icons/ti';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading color={'white'}>All Rights Reserved!</Heading>

          <Heading color={'yellow.400'} fontFamily={'body'} size={'sm'}>
            @bugBusters
          </Heading>
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'50'}
        >
          <a href="https://m.youtube.com/channel/UCxqzwxKnQZVragKZRR8xuww" target="blank">
            <TiSocialYoutubeCircular />
          </a>

          <a href="https://www.instagram.com/krushna_dike_patil/" target="blank">
            <TiSocialInstagramCircular />
          </a>

          <a href="https://github.com/KrushnaDike" target="blank">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
