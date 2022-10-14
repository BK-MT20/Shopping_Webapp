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
            <Outlet />
          </LayoutAntd.Content>
        </LayoutAntd>
      </LayoutAntd>
    </LayoutAntd>
  )
}

export default Layout
