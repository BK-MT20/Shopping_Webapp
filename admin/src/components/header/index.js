import { Layout, Typography } from 'antd'
import React from 'react'

function Header() {
  return (
    <Layout.Header className="header">
      <Typography.Title style={{ color: 'GrayText' }}>SHOPPING WEBAPP</Typography.Title>
    </Layout.Header>
  )
}

export default Header