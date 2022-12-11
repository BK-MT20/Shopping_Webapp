import { Card, Statistic, Table, Col, Row } from 'antd'
import './month.scss'
import { getDate } from './getDate.js'
import React, { useEffect, useState } from 'react'
import { SttHeader } from '../../../components/'
import { ShoppingCartOutlined, PoundOutlined } from '@ant-design/icons'
const { Column } = Table
import axios from '../../../api'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'
function Statisticmonth() {
  const [ revenueMonth, setRevenueMonth ] = useState(0)
  const [ revenue1, setRevenue1 ] = useState(0)
  const [ revenue2, setRevenue2 ] = useState(0)
  const [ revenue3, setRevenue3 ] = useState(0)
  const [ revenue4, setRevenue4 ] = useState(0)
  const [ revenue5, setRevenue5 ] = useState(0)
  const [ revenue6, setRevenue6 ] = useState(0)
  const [ revenue7, setRevenue7 ] = useState(0)
  const [ revenue8, setRevenue8 ] = useState(0)
  const [ revenue9, setRevenue9 ] = useState(0)
  const [ revenue10, setRevenue10 ] = useState(0)
  const [ revenue11, setRevenue11 ] = useState(0)
  const [ revenue12, setRevenue12 ] = useState(0)
  const [ orderMonth, setOrderMonth ] = useState(0)
  const [ revenueToday, setRevenueToday ] = useState(0)
  const [ orderToday, setOrderToday ] = useState(0)
  const [ orderTshirt, setOrderTshirt ] = useState(0)
  const [ orderJacket, setOrderJacket ] = useState(0)
  const [ orderTrousers, setOrderTrousers ] = useState(0)
  const [ orderGlasses, setOrderGlasses ] = useState(0)
  const [ orderShoes, setOrderShoes ] = useState(0)
  var date = document.getElementById('date')
  var month = document.getElementById('month')
  var year = document.getElementById('year')
  var date_now = new Date().getDate()

  var month_now = new Date().getMonth() + 1

  var year_now = new Date().getFullYear()
  var Dem_date = setInterval(getDate)
  let revenue_month = 0
  let order_month = 0
  let revenue_today = 0
  let order_today = 0
  let order_Tshirt = 0
  let order_Jacket = 0
  let order_Trousers = 0
  let order_Glasses = 0
  let order_Shoes = 0
  let Jan = 0
  let Fer = 0
  let March = 0
  let April = 0
  let May = 0
  let June = 0
  let July = 0
  let August = 0
  let September = 0
  let October = 0
  let November = 0
  let December = 0

  let today =
    year_now.toString() +
    '-' +
    month_now.toString() +
    '-' +
    date_now.toString()
  useEffect(() => {
    // const getStatistic = async () => {
    axios
      .get('/statistic/getOrderToday')

      .then((res) => {
        res.data.map((co) => {
          console.log(co.date, today)
          if (co.date.search(today.toString()) !== -1) {
            revenue_today = revenue_today + co.price * co.amount
            order_today = order_today + co.amount
          }

          let Month = co.date.slice(5, 7)
          if (Month.toString() === '1') {
            Jan = Jan + co.price * co.amount
          }
          if (Month.toString() === '2') {
            Fer = Fer + co.price * co.amount
          }
          if (Month.toString() === '3') {
            March = March + co.price * co.amount
          }
          if (Month.toString() === '4') {
            April = April + co.price * co.amount
          }
          if (Month.toString() === '5') {
            May = May + co.price * co.amount
          }
          if (Month.toString() === '6') {
            June = June + co.price * co.amount
          }
          if (Month.toString() === '7') {
            July = July + co.price * co.amount
          }
          if (Month.toString() === '8') {
            August = August + co.price * co.amount
          }
          if (Month.toString() === '9') {
            September = September + co.price * co.amount
          }
          if (Month.toString() === '10') {
            October = October + co.price * co.amount
          }
          if (Month.toString() === '11') {
            November = November + co.price * co.amount
          }
          if (Month.toString() === '12') {
            December = December + co.price * co.amount
          }
          if (Month.toString() === month_now.toString()) {
            revenue_month = revenue_month + co.price * co.amount
            order_month = order_month + co.amount
          }

          if (co.type.toString() === 'Shirt') {
            order_Tshirt = order_Tshirt + co.amount
          }
          if (co.type.toString() === 'Jacket') {
            order_Jacket = order_Jacket + co.amount
          }
          if (co.type.toString() === 'Trousers') {
            order_Trousers = order_Trousers + co.amount
          }
          if (co.type.toString() === 'Glasses') {
            order_Glasses = order_Glasses + co.amount
          }
          if (co.type.toString() === 'Shoes') {
            order_Shoes = order_Shoes + co.amount
          }
          // console.log(revenue_today, revenue_month)
          setRevenueMonth(revenue_month)
          setOrderMonth(order_month)
          setRevenueToday(revenue_today)
          setOrderToday(order_today)
          setOrderTshirt(order_Tshirt)
          setOrderJacket(order_Jacket)
          setOrderTrousers(order_Trousers)
          setOrderGlasses(order_Glasses)
          setOrderShoes(order_Shoes)
          setRevenue1(Jan)
          setRevenue2(Fer)
          setRevenue3(March)
          setRevenue4(April)
          setRevenue5(May)
          setRevenue6(June)
          setRevenue7(July)
          setRevenue8(August)
          setRevenue9(September)
          setRevenue10(October)
          setRevenue11(November)
          setRevenue12(December)
        })
      })
  })
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Revenue of Month',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
    },
  }

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const dataChart = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: [ revenue1, revenue2, revenue3, revenue4, revenue5, revenue6, revenue7, revenue8, revenue9, revenue10, revenue11, revenue12 ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: '#367e62',
        yAxisID: 'y',
      }
    ],
  }
  const dataitems = [
    {
      time: 'T-shirt',
      revenue: orderTshirt,
    },
    {
      time: 'Jacket',
      revenue: orderJacket,
    },
    {
      time: 'Trousers',
      revenue: orderTrousers,
    },
    {
      time: 'Glassess',
      revenue: orderGlasses,
    },
    {
      time: 'Shoes',
      revenue: orderShoes,
    }
  ]
  return (
    <>
      <SttHeader
        title="Manage Revenue "
        // subtitle=''
      />

      <div className="container">
        <div className="site-statistic-demo-card">
          <Row gutter={20}>
            <Col className="today">
              <Card>
                <Statistic
                  title="Order today"
                  value={orderToday}
                  valueStyle={{
                    color: '#367e62',
                  }}
                  suffix={<ShoppingCartOutlined />}
                />
              </Card>
            </Col>
            <Col className="today">
              <Card>
                <Statistic
                  title="Revenue today"
                  value={revenueToday}
                  precision={2}
                  valueStyle={{
                    color: '#cf1322',
                  }}
                  suffix={<PoundOutlined />}
                />
              </Card>
            </Col>

            <Col className="today">
              <Card>
                <Statistic
                  title="Order this month"
                  value={orderMonth}
                  valueStyle={{
                    color: '#367e62',
                  }}
                  suffix={<ShoppingCartOutlined />}
                />
              </Card>
            </Col>
            <Col className="today">
              <Card>
                <Statistic
                  title="Revenue this month"
                  value={revenueMonth}
                  precision={2}
                  valueStyle={{
                    color: '#cf1322',
                  }}
                  suffix={<PoundOutlined />}
                />
              </Card>
            </Col>
          </Row>
        </div>
        <div className="chart">
          <div className="chartheader">Chart Revenue</div>
          <div className="chartbody">
            <Bar options={options} data={dataChart} />
          </div>
        </div>
        <div className="items">
          <div className="itemleft">
            <div className="itemsHeader">Statistic order by items</div>
            <Table bordered dataSource={dataitems}>
              <Column
                title="Name of item"
                dataIndex="time"
                key="time"
                style={{ backgroundColor: '#ee5d0b' }}
              />
              <Column title="Num of order" dataIndex="revenue" key="revenue" />
            </Table>
          </div>
          <div className="itemright">
            <div className="itemsHeader">Best seller Items</div>
            <Table bordered dataSource={dataitems}>
              <Column title="Item" dataIndex="time" key="time" />
              <Column title="Num of order" dataIndex="revenue" key="revenue" />
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}
export default Statisticmonth
