import { Link } from 'react-router-dom'
import { Button, Center, Box } from '@chakra-ui/react'
import { ReactComponent as Error } from '../images/error-404.svg'


export default function NotFound() {
  return (
    <Center >
      <Box textAlign={'center'}>
        <Error style={{ width: "35rem", height: "32rem" }} />
        <Button variant={'solid'}
          colorScheme={'teal'}
          size={'md'}
        ><Link to='/'>
            ¯\_(ツ)_/¯ <br />
            Back Home
          </Link>
        </Button>
      </Box>
    </Center>
  )
}