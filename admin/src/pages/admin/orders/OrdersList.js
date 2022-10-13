import { useEffect, useState } from 'react'
import moment from 'moment'
import { OrdersHeader, OrdersTable } from '../../../components'
import { Space } from 'antd'
import { getOrdersData } from '../../../api'
import { useNavigate } from 'react-router-dom'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Customer ID',
    dataIndex: 'customerId',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
  },
  {
    title: 'Confirmed At',
    dataIndex: 'confirmAt',
  },
  {
    title: 'Admin Confirmed ID',
    dataIndex: 'adminId',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
]

function OrdersList() {
  const navigate = useNavigate()
  const [ loading, setLoading ] = useState(true)
  const [ data, setData ] = useState([])

  const fetchData = () => {
    return getOrdersData().map((item, index) => ({
      ...item,
      key: item.id,
      index,
      createdAt: moment(item?.createdAt).format('hh:mm:ss DD-MM-YYYY'),
      confirmAt: moment(item?.confirmAt).format('hh:mm:ss DD-MM-YYYY'),
    }))
  }
  
  const onRowClick = (record, rowIndex) => {
    navigate(`/orders/${record.id}`)
  }

  const onSearch = (value) => {
    if (!value.orderId) value.orderId = ''
    if (!value.customerId) value.customerId = ''
    setData(fetchData().filter(order => order.id.includes(value.orderId) && order.customerId.includes(value.customerId)))
  }

  useEffect(() => {
    setData(fetchData())
    setLoading(false)
  }, [])

  const props = {
    columns,
    loading,
    data,
    hasHeader: true,
    onRowClick,
    onSearch
  }

  return (
    <>
      <OrdersHeader title='Orders' subtitle='All orders' />
        <Space
        direction="vertical"
        size="middle"
        style={{
          display: 'flex',
          padding: '24px'
        }}
        >
        <OrdersTable {...props} />

        </Space>
    </>
  )
}

export default OrdersList