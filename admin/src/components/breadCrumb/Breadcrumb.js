import { Breadcrumb } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../Helpers'
import './index.scss'
function BreadCrumb() {
  let location = useLocation()
  let pos = location.pathname.indexOf(':')
  let paths
  if(pos !== -1) {
    let str1 = location.pathname.slice(0, pos)
    let str2 = location.pathname.slice(pos + 1)  
    let temp = str1.concat(str2)
    paths = temp.split('/')
    // console.log(paths)
  } else{
    paths = location.pathname.split('/')
  }
  paths.unshift('Home')
  return (
    <Breadcrumb
      style={{
        margin: '22px 0',
      }}  
    >
      {paths.map(path => (
        <Breadcrumb.Item key={path}>{capitalizeFirstLetter(path)}</Breadcrumb.Item>

      ))}
    </Breadcrumb>

  )
     
}

export default BreadCrumb