import { Breadcrumb,Button} from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../Helpers'
import {PlusOutlined } from '@ant-design/icons';
import './index.scss'
function BreadCrumb() {
  let location = useLocation()
  let paths = location.pathname.split('/')
  paths.unshift('Home')

  if(paths[2] === 'manage-products')
    return (
      <div className='manage-products'>
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}  
        >
          {paths.map(path => (
            <Breadcrumb.Item key={path}>{capitalizeFirstLetter(path)}</Breadcrumb.Item>

          ))}
        </Breadcrumb>
        <Button type="primary" icon={<PlusOutlined/>} className='add-btn' size="large">
            Add More
        </Button>
      </div>
    )
    else {
      return (
        <Breadcrumb
          style={{
              margin: '16px 0',
          }}
        >
          {
            paths.map(path => (
              <Breadcrumb.Item key={path}>{capitalizeFirstLetter(path)}</Breadcrumb.Item>
              
            ))
          }
        </Breadcrumb>
  
      )
    }
}

export default BreadCrumb