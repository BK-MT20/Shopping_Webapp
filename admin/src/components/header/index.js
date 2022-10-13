import { Layout, Typography } from 'antd'
import React from 'react'
import './style.css'

function Header() {
  return (
    <Layout.Header className="header">
      <Typography.Title style={{ color: 'white' }}>Shopping Webapp</Typography.Title>
    </Layout.Header>
  )
}

export default Header