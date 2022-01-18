import { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
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
import { TweetCard } from '../components/tweets/tweet-card';
import { Loader } from '../components/loader';

export default function Home() {
  const [usersInfo, setUsersInfo] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const getTweets = async () => {
      try {
        const data = await (await fetch('api/feed')).json()
        return data?.usersData?.length > 0 ? setUsersInfo(data.usersData) : null
      } catch (err) {
        setError('Failed to load data')
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
          mt={16}
          mx={'auto'}>
          {usersInfo.map((cardInfo) => (
            <TweetCard cardInfo={cardInfo} isLazy key={cardInfo?.id} id={cardInfo.name} />
          )
          )}
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