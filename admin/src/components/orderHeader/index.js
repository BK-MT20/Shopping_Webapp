import { Button, Descriptions, Layout, PageHeader, Statistic, Tabs } from 'antd'
import { ReloadOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'
import './style.css'
import BreadCrumb from '../breadCrumb'

function OrdersHeader({ order }) {
  const [ isRefresh, setRefresh ] = useState(false)
  const navigate = useNavigate()
  
  const handleRefresh = () => {
    setRefresh(!isRefresh)
  }

  const renderContent = (column = 2, size = 'small') => (
    <Descriptions size={size} column={column}>
      <Descriptions.Item label="Order ID">{order.id}</Descriptions.Item>
      <Descriptions.Item label="Customer ID">
        <Link>{order.customerId}</Link>
      </Descriptions.Item>
      <Descriptions.Item label="Creation Time">{moment(order.createdAt).format('ss:mm:hh DD-MM-YYYY')}</Descriptions.Item>
      <Descriptions.Item label="Address">{order.address}</Descriptions.Item>
    </Descriptions>
  )
  
  const extraContent = (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
      }}
    >
      <Statistic
        title="Status"
        value={order.status}
        style={{
          marginRight: 32,
        }}
      />
      <Statistic title="Price" prefix="$" value={order.amount} />
    </div>
  )
  
  const Content = ({ children, extra }) => (
    <div className="content page-header-content">
      <div className="main">{children}</div>
      <div className="extra">{extra}</div>
    </div>
  )
  
  const items = [
    { label: 'Tab 1', key: 'item-1', children: 'Content 1' }, // remember to pass the key prop
    { label: 'Tab 2', key: 'item-2', children: 'Content 2' }
  ]

  return (
    <Layout className='page-header'>
      <BreadCrumb />
      <PageHeader
        className="site-page-header-responsive"
        onBack={() => navigate(-1)}
        title="Order Details"
        // subTitle="This is a subtitle"
        extra={[
          <Button
            key='order-refresh'
            type="primary"
            icon={<ReloadOutlined />}
            loading={isRefresh}
            onClick={handleRefresh}
          >Refresh</Button>,
          <Button
            key='order-confirm'
            type="primary"
            icon={<CheckOutlined />}
            disabled={order.status === 'confirmed'}
          // onClick={handleRefresh}
          >Confirm</Button>,
          <Button
            key='order-declind'
            type="primary"
            danger
            icon={<CloseOutlined />}
            disabled={order.status === 'confirmed'}
          // onClick={handleRefresh}
          >Decline</Button>
        ]}
        footer={
          <Tabs defaultActiveKey="1" items={items} />
        }
      >
        <Content extra={extraContent}>{renderContent()}</Content>
      </PageHeader>
    </Layout>
  )
}

OrdersHeader.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    customerId: PropTypes.string.isRequired,
    createdAt: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    adminId: PropTypes.string,
    confirmAt: PropTypes.object,
    products: PropTypes.arrayOf(PropTypes.object)
  }),
}

export default OrdersHeader