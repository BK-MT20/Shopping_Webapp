import { Layout as LayoutAntd } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Sider } from '../../components'

function Layout() {
  return (
    <LayoutAntd>
      <Header />
      <LayoutAntd className='main-content'>
        <Sider />
        <LayoutAntd>
          <LayoutAntd.Content>

        {/* <LayoutAntd
          style={{
            padding: '0 24px 24px',
            height: 'fit-content' 
          }}
        >
          <BreadCrumb />
          
          <LayoutAntd.Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          > */}
            <Outlet />
          </LayoutAntd.Content>
        </LayoutAntd>
      </LayoutAntd>
    </LayoutAntd>
  )
}

export default Layout
