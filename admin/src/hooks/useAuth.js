import { useContext } from 'react'
import AuthContext from '../pages/auth/context/AuthProvider'
const useAuth = () => {
  return (
    useContext(AuthContext)
  )
}

export default useAuth