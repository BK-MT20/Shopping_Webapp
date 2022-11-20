import { axiosPrivate } from '../api'
import { useEffect } from 'react'
import useAuth from './useAuth'

const useAxiosPrivate = () => {
  const { auth } = useAuth()
  return axiosPrivate
}

export default useAxiosPrivate