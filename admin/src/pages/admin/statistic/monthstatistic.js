
import { Card,  Statistic, Table, Col, Row } from 'antd'
import './month.scss'
import React, { useEffect } from 'react'
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
import {  Bar } from 'react-chartjs-2'
function Statisticmonth() {
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
      }
        
    }
  
  }
      
  const labels = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October' ]
      
  const dataChart = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data:[ 1000, 5000, 3000, 3000, 4000, 2000, 8000, 5000, 6000, 7000 ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(92, 148, 227)',
        yAxisID: 'y',
      }

    ],
  }
  const dataitems = [
    {
    
      time: 'T-shirt',
      revenue: 10,
     
    },
    {
     
      time: 'Jacket',
      revenue: 50,
    },
    {
     
      time: 'Trousers',
      revenue: 30,
      
    },
    {
   
      time: 'Glassess',
      revenue: 30,
      
    }
   
  ]
  return(
    
    <>
      <SttHeader 
        title='Manage Revenue ' 
        // subtitle=''
      />
        
      <div className="container">
        <div className="site-statistic-demo-card">
          <Row gutter={20}>
            <Col  className='today'  >
              <Card >
                <Statistic
                  title="Order today"
                  value={10}
                 
                  valueStyle={{
                    color: 'rgb(92, 148, 227)',
                  }}
                  suffix={<ShoppingCartOutlined />}

                />
               
              </Card >
            </Col>
            <Col  className='today' >
              <Card  >
                
                <Statistic
                  title="Revenue today"
                  value={100}
                  precision={2}
                  valueStyle={{
                    color: '#cf1322',
                  }}
                  suffix={<PoundOutlined />}
                />
              </Card>
            </Col>
         
            <Col  className='today'>
              <Card>
                <Statistic
                  title="Order this month"
                  value={120}
                 
                  valueStyle={{
                    color: 'rgb(92, 148, 227)',
                  }}
                  suffix={<ShoppingCartOutlined />}
                />
               
              </Card >
            </Col>
            <Col  className='today'>
              <Card>
                <Statistic
                  title="Revenue this month"
                  value={123456}
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
        <div className='chart'>
          <div className='chartheader'>Chart Revenue</div>
          <div className='chartbody'>

            <Bar options={options} data={dataChart}/>
          </div>

        </div>
        <div className='items'>
          <div className='itemleft'>
            <div className='itemsHeader'>Statistic order by items</div>
            <Table bordered dataSource={dataitems}>
    
              <Column title="Name of item" dataIndex="time" key="time" />
              <Column title="Num of order" dataIndex="revenue" key="revenue" />
   
            </Table>
          </div>
          <div className='itemright'>
            <div className='itemsHeader'>Best seller Items</div>
            <Table
              bordered
              dataSource={dataitems}
            >
    
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
