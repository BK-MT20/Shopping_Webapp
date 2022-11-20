import { Layout, Typography, Dropdown, Menu, Space, Divider } from 'antd'
import React from 'react'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import './style.css'
import authService from '../../pages/auth/Auth'
import useAuth from '../../hooks/useAuth'

function Header() {
  const { auth } = useAuth()
  const menu = (
    <Menu
      items={[
        {
          key: '0',
          label: (
            <>
              <div>
                <p>
                  <span style={{ fontWeight: 'bold', paddingRight: '5px' }}>
                    Logged in as:
                  </span>
                  {auth.username}
                </p>
              </div>
              <Divider />
              <a
                onClick={() => {
                  authService.logout()
                }}
                href="/login"
              >
                <Space>
                  <LogoutOutlined />
                  Logout
                </Space>
              </a>
            </>
          ),
        }
      ]}
    />
  )

  return (
    <Layout.Header
      style={{
        'display': 'flex',
        'justifyContent': 'space-between',
        'alignItems': 'center',
      }}
      className="header"
    >
      <Typography.Title style={{ 'color': 'white' }}>
        Shopping Webapp
      </Typography.Title>
      <Dropdown overlay={menu}>
        <a>
          <UserOutlined style={{ 'color': 'white', 'fontSize': '16px' }} />
        </a>
      </Dropdown>
    </Layout.Header>
  )
}

export default Header
