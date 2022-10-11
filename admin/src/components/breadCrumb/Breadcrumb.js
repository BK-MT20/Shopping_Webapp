import { Breadcrumb } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../Helpers'
import './index.scss'
function BreadCrumb() {
  let location = useLocation()
  let paths = location.pathname.split('/')
  paths.unshift('Home')
  return (
    <Breadcrumb
      style={{
        margin: '16px 0',
      }}  
    >
      {paths.map(path => (
        <Breadcrumb.Item key={path}>{capitalizeFirstLetter(path)}</Breadcrumb.Item>

      ))}
    </Breadcrumb>

  )
     
}

export default BreadCrumb