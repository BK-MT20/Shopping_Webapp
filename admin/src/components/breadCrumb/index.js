import React from 'react'
import BreadCrumb from './Breadcrumb'
import { useLocation } from 'react-router-dom'
import './index.scss'
import AddButton from '../../pages/admin/products/AED-Products/AddButton'
function Breadcrumb() {
  let location = useLocation()
  let paths = location.pathname.split('/')
  paths.unshift('Home')

  if(paths[paths.length - 1] === 'manage-products') {    
    return (
      <div className='manage-products'>
        <BreadCrumb/>
        <AddButton/>
      </div>
    )
  } else {
    return (  
      <BreadCrumb/>
    )
  }
}

export default Breadcrumb
