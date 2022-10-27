import { Button, Descriptions, Form, Input, Layout, Modal, PageHeader, Statistic, Tabs } from 'antd'
import { ReloadOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'
import './style.css'
import BreadCrumb from '../breadCrumb'
const { confirm } = Modal

const declineForm = (
  <Form
    name="basic"
    layout='vertical'
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Reason"
      name="declineReason"
      rules={[
        {
          required: true,
          message: 'Please input the reason!',
        }
      ]}
    >
      <Input.TextArea rows={4} />
    </Form.Item>
  </Form>
)

const handleConfirm = () => {
  confirm({
    title: 'Are you sure to confirm this order?',
    content: 'When clicked the OK button, this order will be confirmed and it\'s status will be changed to "confirmed".',
    // onOk() {},
    // onCancel() {},
  })
}
const handleDecline = () => {
  confirm({
    title: 'Are you sure to declined this order?',
    content: declineForm,
    // onOk() {},
    // onCancel() {},
  })
}

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
            onClick={handleConfirm}
          >Confirm</Button>,
          <Button
            key='order-declind'
            type="primary"
            danger
            icon={<CloseOutlined />}
            disabled={order.status === 'confirmed'}
            onClick={handleDecline}
          >Decline</Button>
        ]}
        // footer={
        //   <Tabs defaultActiveKey="1" items={items} />
        // }
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