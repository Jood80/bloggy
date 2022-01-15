import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Select,
  FormErrorMessage,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm()
  const navigator = useNavigate()
  const { signup } = useAuth()

  const onSubmit = async (values) => {
    const { email, password } = values
    try {
      console.log(values)
      await signup(email, password)
      navigator('/home')
    } catch (err) {
      if (err.message.includes('already in use')) {
        setError(`This Email is already in use`)
      } else {
        setError(err.message)
      }
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={4} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={10}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)} >
              <HStack>
                <Box>
                  <FormControl isInvalid={errors.firstName} isRequired >
                    <FormLabel htmlFor='firstName'>First Name</FormLabel>
                    <Input
                      id='firstName'
                      {...register("firstName", {
                        minLength: { value: 3, message: 'Minimum length should be 3' },
                      })} />
                    <FormErrorMessage>
                      {errors.firstName && errors.firstName.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isInvalid={errors.lastName} isRequired>
                    <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                    <Input id="lastName" {...register("lastName")} />
                    <FormErrorMessage>
                      {errors.lastName && errors.lastName.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </HStack>

              <HStack>
                <FormControl isInvalid={errors.email} isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" id="email" {...register("email")} />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.password} isRequired >
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} id="password"
                      {...register("password", {
                        minLength: { value: 7, message: 'Minimum length should be 7' }
                      })} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>

              <HStack>
                <FormControl isRequired>
                  <FormLabel htmlFor="code">Country code</FormLabel>
                  <Select defaultValue='+970' id="code" {...register("code")}>
                    <option value='+970'>+970</option>
                    <option value='+962'>+962</option>
                    <option value='+87'>+87</option>
                    <option value='+90'>+90</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor='phone'>Phone number</FormLabel>
                  <Input id="phone" type="tel" {...register("phone")} />
                </FormControl>
              </HStack>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  isLoading={isSubmitting}
                  type='submit'>
                  Sign up
                </Button>
              </Stack>
            </form>
            {error && (
              <Alert status='error'>
                <AlertIcon />
                {error}
              </Alert>)
            }
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link as={RouterLink} to='/login' color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack >
    </Flex >
  );
}