import { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {
  Box,
  chakra,
  Flex,
  Alert,
  AlertIcon,
  Button,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { FeedCard } from '../components/tweets';
import { Loader } from '../components/loader';


export default function Home() {
  const [usersInfo, setUsersInfo] = useState()
  const [error, setError] = useState()


  useEffect(() => {
    const getTweets = async () => {
      try {
        const data = await axios.get('/api/feed')
        return data?.data?.usersData?.length > 0 ? setUsersInfo(data.data.usersData) : setError('No Data Recieved')
      } catch (err) {
        setError(err.message)
      }
    }
    getTweets()
  }, [])



  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}>
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h3
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          fontSize={20}
          textTransform={'uppercase'}
          color={'purple.400'}>
          People love us
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}>
          You're in good company
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'70%'}
          fontFamily={'Inter'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.500', 'gray.400')}>
          See why over{' '}
          <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
            150,000+
          </chakra.strong>{' '}
          influencers use EEZY to manage their social media content!
        </chakra.h2>
        <Link to='/profile'>
          <Button
            variant={'solid'}
            colorScheme={'teal'}
            size={'sm'}
            mr={4}
            mt={4}
            leftIcon={<AddIcon />}>
            Create Tweet
          </Button>
        </Link>
      </Box>
      <Suspense fallback={<Loader />}>
        {usersInfo ? (<SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={10}
          mb={4}
          mx={'auto'}>
          {usersInfo.map((cardInfo, index) => (
            cardInfo.tweets.length > 0 ?
              <FeedCard cardInfo={cardInfo} key={cardInfo.id} id={index} />
              : null
          ))
          }
        </SimpleGrid>) : (
          <Box width={{ base: 'lg', sm: 'lg', lg: 'xl' }} margin={'auto'} pt={8}>
            <Alert status='error'>
              <AlertIcon />
              {error}
            </Alert>
          </Box>)
        }
      </Suspense>
      <Box>
      </Box>
    </Flex>
  );
}