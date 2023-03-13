import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const getUsers = async () => {
  const response = await axios.get('https://layer3.xyz/api/assignment/users')

  return response.data
}

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  })
}
