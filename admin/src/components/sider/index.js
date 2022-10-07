import { ShoppingCartOutlined } from '@ant-design/icons'
import React from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

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
  }
]

function Sider() {
  const navigate = useNavigate()

  const keys = items.map((item, index) => ({
    key: item.path,
    icon: React.createElement(item.icon),
    label: item.title,
    children: item.children.map((child, idx) => ({
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
        defaultSelectedKeys={[ 'subnav11' ]}
        defaultOpenKeys={[ 'nav1' ]}
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