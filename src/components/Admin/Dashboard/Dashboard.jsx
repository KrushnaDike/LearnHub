import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

import cursor from '../../../assets/images/cursor.png';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';

// importing components
import Sidebar from '../Sidebar.jsx';
import { LineChart, DoughnutChart } from './Chart.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardStats } from '../../../redux/actions/admin.js';
import Loader from '../../Layout/Loader/Loader.jsx';

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    loading,
    stats,
    userCount,
    subscribersCount,
    viewsCount,
    userPercentage,
    subscribersPercentage,
    viewsPercentage,
    userProfit,
    subscribersProfit,
    viewsProfit,
  } = useSelector(state => state.admin);

  useEffect(() => {
    dispatch(getDashboardStats());
  }, [dispatch]);

  return (
    <Grid
      css={{ cursor: `url(${cursor}), default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      {loading || !stats ? (
        <Loader color="purple.500" />
      ) : (
        <Box boxSizing="border-box" py={'16'} px={['4', '0']}>
          <Text textAlign={'center'} opacity={'0.5'}>
            Last change on {String(new Date(stats[11].createdAt)).split('G')[0]}
          </Text>

          <Heading ml={['0', '16']} mb={'16'} textAlign={['center', 'left']}>
            Dashboard
          </Heading>

          <Stack
            direction={['column', 'row']}
            minH={'24'}
            justifyContent={'space-evenly'}
          >
            <Databox
              title={'Views'}
              qty={viewsCount}
              qtyPercentage={viewsPercentage}
              profit={viewsProfit}
            />
            <Databox
              title={'Users'}
              qty={userCount}
              qtyPercentage={userPercentage}
              profit={userProfit}
            />
            <Databox
              title={'Subscription'}
              qty={subscribersCount}
              qtyPercentage={subscribersPercentage}
              profit={subscribersProfit}
            />
          </Stack>

          <Box
            m={['0', '16']}
            borderRadius={'lg'}
            p={['0', '16']}
            mt={['4', '16']}
            boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'}
          >
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              pt={['8', '0']}
              ml={['0', '16']}
            >
              Views Graph
            </Heading>

            {/* Line graph here */}
            <LineChart views={stats.map(item => item.views)} />
          </Box>

          <Grid templateColumns={['1fr', '2fr 1fr']}>
            <Box p={'4'}>
              <Heading
                textAlign={['center', 'left']}
                size={'md'}
                my={'8'}
                ml={['0', '16']}
              >
                Progress Bar
              </Heading>

              <Box>
                <Bar
                  profit={viewsProfit}
                  title={'Views'}
                  value={viewsPercentage}
                />
                <Bar
                  profit={userProfit}
                  title={'Users'}
                  value={userPercentage}
                />
                <Bar
                  profit={subscribersProfit}
                  title={'Subscription'}
                  value={subscribersPercentage}
                />
              </Box>
            </Box>

            <Box p={['0', '16']} boxSizing="border-box" py={'4'}>
              <Heading textAlign={'center'} size={'md'} mb={'4'}>
                Users
              </Heading>

              {/* Doughnut Graph */}
              <DoughnutChart
                users={[subscribersCount, userCount - subscribersCount]}
              />
            </Box>
          </Grid>
        </Box>
      )}

      <Sidebar />
    </Grid>
  );
};

export default Dashboard;

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'}
    p={'8'}
    borderRadius={'lg'}
  >
    <Text>{title}</Text>

    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        {qty}
      </Text>

      <HStack>
        <Text>{qtyPercentage}%</Text>
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>

    <Text opacity={0.6}>Since last month</Text>
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py={'4'} px={['0', '20']}>
    <Heading size={'sm'} mb={'2'}>
      {title}
    </Heading>

    <HStack w={'full'} alignItems={'center'}>
      <Text>{profit ? '0%' : '-' + value + '%'}</Text>
      <Progress colorScheme="purple" value={profit ? value : 0} w={'full'} />
      <Text>{value > 100 ? value : 100}%</Text>
    </HStack>
  </Box>
);
