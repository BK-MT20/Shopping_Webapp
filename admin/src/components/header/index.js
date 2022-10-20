import { Layout, Typography, Dropdown, Menu, Space, Divider } from 'antd'
import React from 'react'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import './style.css'
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
      <Dropdown overlay={menu}>
        <UserOutlined style={{ color:'white', fontSize:'16px' }} />

      </Dropdown>

    </Layout.Header>
  )
}

export default Header