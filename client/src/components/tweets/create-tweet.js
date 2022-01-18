import { useRef } from 'react';
import ResizeTextarea from "react-textarea-autosize";
import {
  Button,
  Flex,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react';
import { image } from '../../images/backgroundImage';


export default function CreateTweet() {
  let tweetRef = useRef()

  return (
    <Flex
      boxShadow='dark-lg'
      maxW={'640px'}
      direction={{ base: 'space-between', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      my={5}
      p={10}
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


      <Textarea placeholder='Basic usage' size='lg' ref={tweetRef}
        minH="unset"
        overflow="hidden"
        w="100%"
        resize="none"
        minRows={1}
        as={ResizeTextarea} />

      <Button mx={3}>Tweet</Button>

    </Flex >)
}