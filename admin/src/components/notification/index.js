import { BellOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Badge, notification, Popover, Tabs } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import ListNotifications from './listNotifications'
import './style.css'
import PropTypes from 'prop-types'

const data = [
  {
    id: 'adfasfda',
    orderId: '6353c682c34c35ffd2bd963f',
    customerName: 'Nguyen Quang',
    customerAvatar: ''
  },
  {
    id: 'adfasfda',
    orderId: '6353c682c34c35ffd2bd963f',
    customerName: 'Nguyen Quang',
    customerAvatar: ''
  },
  {
    id: 'adfasfda',
    orderId: '6353c682c34c35ffd2bd963f',
    customerName: 'Nguyen Quang',
    customerAvatar: ''
  },
]

const Notification = () => {
  const [ notifications, setNotifications ] = useState(data)
  const [ show, setShow ] = useState(false)

  const onTabChange = () => {

  }
  
  const content = () => (
    // <Tabs
    //   defaultActiveKey="1"
    //   onChange={onTabChange}
    //   size='small'
    //   centered
    //   items={[
    //     {
    //       label: `Order (${notifications.length})`,
    //       key: 'order_notification',
    //       children: (
    //         <ListNotifications notifications={notifications} onClick={() => setShow(false)} />
    //       ),
    //     }
    //   ]}
    // />
    <ListNotifications notifications={notifications} onClick={() => setShow(false)} />
  )

  const openNotification = (order) => {
    notification.open({
      message: `${order.customerName} has new order!`,
      description:
        'Please review more details to confirm this order, otherwise decline this with a reason!',
      icon: (
        <ShoppingCartOutlined />
      ),
      duration: 1
    })
  }

  useEffect(() => {
    const id = setTimeout(() => {
      openNotification(data[0])
    }, 500)

    return () => {
      clearTimeout(id)
    }
  }, [])
    
  return (
    <Popover
      open={show}
      content={content()}
      trigger="click"
      placement='bottomRight'
      className='popover-special'
      arrowPointAtCenter
      onOpenChange={setShow}
    >
      <span className='notification-wrapper'>
        <Badge count={notifications.length} overflowCount={9} size='small'>
          <div style={{ padding: '4px 6px', color: 'white' }}>
            <BellOutlined />
          </div>
        </Badge>
      </span>
    </Popover>
  )
}

export default memo(Notification)