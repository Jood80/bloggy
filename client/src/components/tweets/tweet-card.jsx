import { chakra, Flex, useColorModeValue } from '@chakra-ui/react';


export default function TweetCard({ content, createdAt }) {
  const [date, detailedTime] = createdAt.split("T")
  const [hour, min] = detailedTime.split(":")


  return (
    <Flex
      boxShadow={'dark-lg'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      my={5}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}>
        <chakra.p
          fontFamily={'Inter'}
          fontWeight={'medium'}
          fontSize={'15px'}
          pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
          {hour + ":" + min + " / "
            + date}
        </chakra.p>
      </Flex>
    </Flex>
  );
}