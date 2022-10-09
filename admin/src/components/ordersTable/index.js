import PropTypes from 'prop-types'
import { Table } from 'antd'

function OrdersTable({ columns, data, loading }) {
  return (
    <Table loading={loading} columns={columns} dataSource={data} />
  )
}

OrdersTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    dataIndex: PropTypes.string,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool
}

OrdersTable.defaultProp = {
  data: [],
  loading: false,
}

export default OrdersTable