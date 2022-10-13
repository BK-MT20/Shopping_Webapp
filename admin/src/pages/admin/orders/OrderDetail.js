import { Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOrdersData, getProductsData } from '../../../api'
import { OrderHeader, OrdersTable } from '../../../components'

const columns = [
  {
    title: 'Product ID',
    dataIndex: 'id',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  }
  // {
  //   title: 'Total Amout',
  //   dataIndex: 'total',
  // },
]

function OrderDetail() {
  // const navigate = useNavigate()
  const { orderId } = useParams()
  const [ order, setOrder ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const[ data, setData ] = useState([])
  
  // const onRowClick = (record, rowIndex) => {
  //   navigate(`/pro/${record.id}`)
  // }

  useEffect(() => {
    var order = getOrdersData(orderId)
    setData(order.products.map((p, index) => ({
      ...p,
      ...getProductsData(p.id),
      key: `order-${p.id}-${index}`,
    })))
    setOrder(order)
    setLoading(false)
  }, [])

  const props = {
    columns,
    loading,
    data,
    hasHeader: false,
  }

  return (
    <>
      {order && (
        <>
          <OrderHeader order={order} />
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
      )}
    </>
  )
}

export default OrderDetail