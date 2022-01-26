import { useEffect, useState } from 'react'
import axios from 'axios'
import CreateTweet from '../components/tweets/create-tweet'
import { useAuth } from '../contexts/AuthContext'
import { Alert, AlertIcon } from '@chakra-ui/react'

export default function Profile() {
  const [error, setError] = useState(false)
  const { currentUser } = useAuth()
  const userId = currentUser.uid

  useEffect(() => {
    try {
      const fetchUserTweets = async () => {
        const content = await axios.get(`/api/tweets/${userId}`)
        console.log(content);
      }
      fetchUserTweets()

    } catch (error) {
      setError('No tweets yet?')
    }
  }, [])

  return (<>
    <CreateTweet />
    {error && (<Alert>
      <AlertIcon status='error'>{error}</AlertIcon>
    </Alert>)}
  </>)
}