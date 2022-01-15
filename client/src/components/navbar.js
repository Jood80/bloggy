import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Link,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useAuth } from '../contexts/AuthContext';


export default function Navbar() {
  const [error, setError] = useState()
  const naviagte = useNavigate()
  const { colorMode, toggleColorMode } = useColorMode();
  const { currentUser, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      naviagte('/')
    } catch (error) {
      setError(error)
    }
  }

  return (
    <>
      <Box bg={useColorModeValue('red.300', 'gray.900')} zIndex={1}
        style={{ backdropFilter: 'blur(10px)' }} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              {currentUser ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'base'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>
                      <Link onClick={handleLogout} >
                        Logout
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>) : null}
            </Stack>
          </Flex>
        </Flex>
        {error && (
          <Alert status='error'>
            <AlertIcon />
            {error}
          </Alert>)
        }
      </Box>
    </>
  );
}