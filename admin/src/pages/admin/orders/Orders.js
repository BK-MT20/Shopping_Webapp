import { useEffect, useState } from 'react'
import moment from 'moment'
import { OrdersTable } from '../../../components'

const columns = [
  {
    title: '#',
    dataIndex: 'index',
  },
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
    title: 'Amount',
    dataIndex: 'amount',
  },
]

const mockData = [
  {
    id: 'order1',
    customerId: 'customer1',
    createdAt: new Date(),
    amount: 1000000
  },
  {
    id: 'order2',
    customerId: 'customer2',
    createdAt: new Date(),
    amount: 2000000
  },
]

function Orders() {
  const [ loading, setLoading ] = useState(true)
  const [ data, setData ] = useState([])

  useEffect(() => {
    setData(mockData.map((item, index) => ({
      ...item,
      key: item.id,
      index,
      createdAt: moment(item.createdAt).format('hh:mm:ss DD-MM-YYYY')
    })))
    setLoading(false)
  })

  return (
    <div>
      <OrdersTable columns={columns} loading={loading} data={data} />
    </div>
  )
}

export default Orders