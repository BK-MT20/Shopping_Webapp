import { BellOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Badge, notification, Popover } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import ListNotifications from './listNotifications'
import axios from '../../api'
import './style.css'
import { useSocket } from '../../hooks'

const data = [
  {
    id: 'adfasfda',
    orderId: '6353c682c34c35ffd2bd963f',
    customerName: 'Nguyen Quang',
    customerAvatar: ''
  },
  {
    id: 'dadfs',
    orderId: '6353c682c34c35ffd2bd963f',
    customerName: 'Nguyen Quang',
    customerAvatar: ''
  },
  {
    id: 'eadzv',
    orderId: '6353c682c34c35ffd2bd963f',
    customerName: 'Nguyen Quang',
    customerAvatar: ''
  }
]

const Notification = () => {
  const [ notifications, setNotifications ] = useState([])
  const [ show, setShow ] = useState(false)
  const socket = useSocket()

  useEffect(() => {
    axios.get('/notification/getAllNotifications')
      .then(response => {
        setNotifications(response.data)
      })
      .catch(err => {
        console.log('get notifications error:', err)
      })
  }, [])

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

  const onCick = () => {
    // socket.emit('newOrder', notifications[0])
  }

  useEffect(() => {
    if (socket) {
      socket.on('newOrder', order => {
        openNotification(order)
      })
  
      return () => {
        socket.off('newOrder')
      }
    }
  }, [ socket ])
    
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