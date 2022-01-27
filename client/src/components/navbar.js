import { useState } from 'react'
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
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaHome } from 'react-icons/fa';

import { useAuth } from '../contexts/AuthContext';


export default function Navbar() {
  const [error, setError] = useState()
  const { colorMode, toggleColorMode } = useColorMode();
  const { currentUser, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      setError(error)
    }
  }

  return (
    <>
      <Box bg={useColorModeValue('red.300', 'gray.900')} zIndex={1000} style={{ position: 'absolute', width: '100%' }}
        px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            {currentUser
              ? <Link to='/home'><FaHome /></Link>
              : <Link to='/'><FaHome /></Link>
            }
          </Box>
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
                      <Link to='/profile'>
                        <Avatar
                          size={'2xl'}
                          src={'https://avatars.dicebear.com/api/male/username.svg'}
                        />
                      </Link>
                    </Center>
                    <br />
                    <Center>
                      <p>{currentUser.email.split('@')[0]}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <Link to='/' onClick={handleLogout} >
                      <MenuItem>
                        Logout
                      </MenuItem>
                    </Link>
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