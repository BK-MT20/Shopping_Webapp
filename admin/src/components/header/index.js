import { Layout, Typography, Dropdown, Menu, Space, Divider } from 'antd'
import React, { memo } from 'react'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import './style.css'
import Notification from '../notification'
const menu = (
  <Menu
    items={[
      {
        key: '0',
        label: (
          <a href="/login">
            <div>
              <p>Logged in as: hwangg_phiemm</p>
            </div>
            <Divider/>
            <Space>
              <LogoutOutlined />
              Logout
            </Space>
          </a>
        ),
      }
    ]}
  />

)

function Header() {
  return (
    <Layout.Header  style ={{ display:'flex', justifyContent: 'space-between', alignItems:'center' }}className="header">
      <Typography.Title style={{ color: 'white' }}>Shopping Webapp</Typography.Title>
      <Space size={'large'}>
        <Notification />
        <Dropdown overlay={menu}>
          <UserOutlined style={{ color:'white', fontSize:'16px' }} />
        </Dropdown>
      </Space>
    </Layout.Header>
  )
}

export default memo(Header)