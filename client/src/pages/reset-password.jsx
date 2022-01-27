import { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form'
import { useAuth } from '../contexts/AuthContext'

export default function ResetPassword() {
  const { handleSubmit, register, formState: { isSubmitting } } = useForm()
  const [error, setError] = useState()
  const [message, setMessage] = useState('')
  const { resetPassword } = useAuth()


  const onSubmit = async ({ email }) => {
    try {
      await resetPassword(email)
      setMessage('Please check your email to complete')
    } catch (err) {
      setError('Failed to reset password')
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
          <Heading fontSize={'4xl'}>Reset your password</Heading>
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
              <Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  isLoading={isSubmitting}
                  type='submit'
                  mt={2}
                >
                  {message ? 'Login' : 'Reset Password'}
                </Button>
                <Box>
                  {error && (
                    <Alert status='error'>
                      <AlertIcon />
                      {error}
                    </Alert>)
                  }
                  {message && (
                    <Alert status='success'>
                      <AlertIcon />
                      {message}
                    </Alert>)}
                </Box>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack >
    </Flex >
  );
}