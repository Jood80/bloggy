import { useEffect, useState } from 'react'
import { Alert, AlertIcon } from '@chakra-ui/react'
import axios from 'axios'
import CreateTweet from '../components/tweets/create-tweet'
import { useAuth } from '../contexts/AuthContext'
import { TweetCard } from '../components/tweets/tweet-card'

export default function Profile() {
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  const { currentUser } = useAuth()
  const userId = currentUser.uid

  useEffect(() => {
    try {
      const fetchUserTweets = async () => {
        const content = await axios.get(`/api/tweets/${userId}`)
        content?.data?.length > 0 ? setData(content.data) : setError('Oh oh! someone is an introvert :3')
      }
      fetchUserTweets()

    } catch (error) {
      setError('Oops, we facing a problem fetching your tweets :/')
    }
  }, [])

  const addTweet = (tweet) => {
    setData([tweet, ...data])
  }

  return (<>
    <CreateTweet addTweet={addTweet} />
    {data.length > 0
      ? data.map((item) =>
        <TweetCard content={item.content} createdAt={item.createdAt} key={item.createdAt} />)
      : (<Alert>
        <AlertIcon status='error'>{error}</AlertIcon>
      </Alert>)}
  </>)
}