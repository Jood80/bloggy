import {
  Box,
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';
import { SocialButton } from './social-buttons';


export default function Footer() {
  return (
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        bottom={0}
        pt={20}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'center' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Github'} href={'https://github.com/Jood80'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Linkedin '} href={'https://www.linkedin.com/in/nujood-kadhem-4245721b3/'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'Gmail'} href={'https://www.mailto&amp;su=subject+message&amp;to=shawar.nujood@gmail.com'}>
            <FaGoogle />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}