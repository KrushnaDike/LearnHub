import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../Auth/Signup.jsx';

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteHandler,
  addLectureHandler,
  courseTitle,
  lectures = [],
  loading,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const videoHandler = e => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result); // just for preview on screen
      setVideo(file); // databasse ke liye file ka blob
    };
  };

  const closeHandler = () => {
    setTitle('');
    setVideo('');
    setDescription('');
    setVideoPrev('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      size={'full'}
      onClose={closeHandler}
      scrollBehavior="outside"
    >
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Course Details</ModalHeader>
        <ModalCloseButton />

        <ModalBody p={'16'}>
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my={'5'}>
                <Heading>{courseTitle}</Heading>
                <Heading size={'sm'} opacity={0.4}>
                  #{id}
                </Heading>
              </Box>

              <Heading size={'lg'}>Lectures</Heading>

              {lectures.map((item, index) => (
                <VideoCard
                  key={index}
                  num={index + 1}
                  title={item.title}
                  description={item.description}
                  lectureId={item._id}
                  courseId={id}
                  deleteHandler={deleteHandler}
                  loading={loading}
                />
              ))}
            </Box>

            <Box>
              <form
                onSubmit={e =>
                  addLectureHandler(e, id, title, description, video)
                }
              >
                <VStack>
                  <Heading size={'md'} textTransform={'uppercase'}>
                    Add Lecture
                  </Heading>

                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />

                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />

                  <Input
                    required
                    id="chooseVideo"
                    accept="video/mp4"
                    onChange={videoHandler}
                    type="file"
                    focusBorderColor="purple.300"
                    css={{
                      '&::file-selector-button': {
                        ...fileUploadCss,
                        color: 'purple',
                      },
                    }}
                  />

                  {videoPrev && (
                    <video
                      controlsList="nodownload"
                      controls
                      src={videoPrev}
                    ></video>
                  )}

                  <Button
                    isLoading={loading}
                    colorScheme="purple"
                    type="submit"
                    w={'full'}
                  >
                    Upload
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>

        <ModalFooter>
          <Button onClick={closeHandler}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;

const VideoCard = ({
  num,
  title,
  description,
  lectureId,
  courseId,
  deleteHandler,
  loading,
}) => {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107, 70, 193, 0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'}>
          #{num} {title}
        </Heading>
        <Text>{description}</Text>
      </Box>

      <Button
        isLoading={loading}
        onClick={() => deleteHandler(courseId, lectureId)}
        colorScheme="red"
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
};
