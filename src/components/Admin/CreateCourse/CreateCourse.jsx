import {
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import cursor from '../../../assets/images/cursor.png';

// importing components
import Sidebar from '../Sidebar.jsx';
import { fileUploadCss } from '../../Auth/Signup.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../../redux/actions/admin.js';
import toast from 'react-hot-toast';
import {
  clearError,
  clearMessage,
} from '../../../redux/reducers/adminReducer.js';

const CreateCourse = () => {
  const catagories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const imageHandler = e => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result); // just for preview on screen
      setImage(file); // databasse ke liye file ka blob
    };
  };

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(state => state.admin);

  const submitHandler = e => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('title', title);
    myForm.append('description', description);
    myForm.append('category', category);
    myForm.append('createdBy', createdBy);
    myForm.append('file', image);

    dispatch(createCourse(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);

  return (
    <Grid
      css={{ cursor: `url(${cursor}), default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Container py={'16'}>
        <form onSubmit={submitHandler}>
          <Heading
            textTransform={'uppercase'}
            my={'16'}
            textAlign={['center', 'left']}
          >
            Create Course
          </Heading>

          <VStack m={'auto'} spacing={'8'}>
            <Input
              required
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              focusBorderColor="purple.300"
            />

            <Textarea
              required
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Explain the course..."
              focusBorderColor="purple.300"
            />

            <Input
              required
              id="createdby"
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder="Creator Name"
              type="text"
              focusBorderColor="purple.300"
            />

            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Category</option>

              {catagories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>

            <Input
              required
              id="chooseImage"
              accept="image/*"
              onChange={imageHandler}
              type="file"
              focusBorderColor="purple.300"
              css={{
                '&::file-selector-button': {
                  ...fileUploadCss,
                  color: 'purple',
                },
              }}
            />

            {imagePrev && (
              <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
            )}

            <Button
              isLoading={loading}
              type="submit"
              colorScheme="purple"
              w={'full'}
            >
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
