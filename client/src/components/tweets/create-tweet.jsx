import { useState } from 'react';
import axios from 'axios'
import ResizeTextarea from 'react-textarea-autosize';
import {
  Box,
  Button,
  Flex,
  Textarea,
  useColorModeValue,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { image } from '../../images/backgroundImage';
import { useAuth } from '../../contexts/AuthContext';


export default function CreateTweet({ addTweet }) {
  const [tweetContent, setTweetContent] = useState()
  const [error, setError] = useState()
  const { currentUser } = useAuth()


  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(`/api/tweet`, { content: tweetContent, userId: currentUser.uid })
      const { content, createdAt } = response?.data?.newTweet
      addTweet({ content, createdAt })
    } catch (error) {
      setError(error)
    }
  }

  return (
    <Box>
      <Flex
        boxShadow='dark-lg'
        maxW={'640px'}
        direction={{ base: 'space-between', md: 'row' }}
        width={'full'}
        rounded={'xl'}
        my={5}
        p={5}
        position={'relative'}
        bg={useColorModeValue('white', 'gray.800')}
        _after={{
          content: '""',
          position: 'absolute',
          height: '21px',
          width: '29px',
          left: '35px',
          top: '-10px',
          backgroundSize: 'cover',
          backgroundImage: image,
        }}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '640px',
          width: 'full',
          filter: 'blur(40px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
        }}>
        <Flex>

          <Textarea placeholder="What's in your mind?" size='lg' value={tweetContent}
            onChange={(e) => { setTweetContent(e.target.value) }}
            minH='unset'
            overflow='hidden'
            w='100%'
            resize='none'
            minRows={3}
            as={ResizeTextarea} />

          <Button mx={3} onClick={handleSubmit}>Tweet</Button>
        </Flex>

      </Flex >
      {
        error && <Alert>
          <AlertIcon status='error'>
            {error}</AlertIcon></Alert>
      }
    </Box >
  )
}