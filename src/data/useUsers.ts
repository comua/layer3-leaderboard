import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const getUsers = async () => {
  console.log('getUsers')
  const response = await axios.get('https://layer3.xyz/api/assignment/users')
  console.log({ response })

  return response.data
}

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  })
}
