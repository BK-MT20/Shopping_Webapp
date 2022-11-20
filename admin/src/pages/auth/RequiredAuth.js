import { useLocation, Navigate } from 'react-router-dom'
// import AuthContext from './context/AuthProvider'
import useAuth from '../../hooks/useAuth'
import Layout from '../admin/Layout'
import { message } from 'antd'

const RequiredAuth = () => {
  const { auth } = useAuth()
  const location = useLocation()
  console.log(auth)
  return (
    auth.role === 'admin' ? <Layout/> : (
      message.error('Require Admin role!'),
      <Navigate to ="/login" state= {{ from: location }} replace/>
    )
  )
}

export default RequiredAuth