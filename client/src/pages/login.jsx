import { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../contexts/AuthContext'

export default function Signin() {
  const { handleSubmit, register, formState: { isSubmitting } } = useForm()
  const [error, setError] = useState()
  const { login } = useAuth()
  const navigate = useNavigate()


  const onSubmit = async ({ email, password }) => {
    try {
      await login(email, password)
      navigate('/home')
    } catch (err) {
      setError('Failed to login. Wrong email or password')
    }
  }

  return (
    <Flex
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={6} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id='email'>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input type='email' name='email' {...register('email')} />
              </FormControl>
              <FormControl id='password'>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input type='password' {...register('password')} />
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Link as={RouterLink} to='/reset-password' color={'blue.400'} pt={3}>Forgot password?</Link>
                </Stack>
                <Stack>

                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    isLoading={isSubmitting}
                    type='submit'
                  >
                    Sign in
                  </Button>
                  {error && (
                    <Alert status='error'>
                      <AlertIcon />
                      {error}
                    </Alert>)
                  }
                </Stack>

              </Stack>
            </form>
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              Don't have an account?
              <Link as={RouterLink} to='/register' color={'blue.400'}> Register</Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}