import { ShoppingCartOutlined,DesktopOutlined } from '@ant-design/icons'
import React from 'react'
import { Layout, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

const items = [ 
  {
    title: 'Orders',
    icon: ShoppingCartOutlined,
    path: '/orders',
    children: [
      {
        title: 'List orders',
        path: '/'
      },
      {
        title: 'History',
        path: '/history'
      }
    ]
  },
  {
    title: 'Manage Products',
    icon: DesktopOutlined,
    path: '/manage-products',
  }
]

function Sider() {
  const navigate = useNavigate()
  const location = useLocation()
  const paths = location.pathname.split('/')
  // console.log(location, paths)

  const keys = items.map((item) => ({
    key: item.path,
    icon: React.createElement(item.icon),
    label: item.title,
    children: item.children?.map((child) => ({
      key: item.path + child.path,
      label: child.title,
    }))
  }))

  const handleSiderOnclick = e => {
    navigate(e.key)
  }

  return (
    <Layout.Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={[ location.pathname ]}
        defaultOpenKeys={[ '\\' + paths[1] ]}
        style={{
          height: '100%',
          borderRight: 0,
        }}
        items={keys}
        onClick={handleSiderOnclick}
      />
    </Layout.Sider>
  )
}

export default Sider