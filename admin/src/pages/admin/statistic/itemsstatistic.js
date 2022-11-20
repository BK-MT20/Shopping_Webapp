
import { Card, Statistic, Table, Button } from 'antd'
import './items.scss'
import React from 'react'
import { SttHeader } from '../../../components/'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend)
function Statisticitems() {
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
        text: 'Revenue of Items',
      },
    },
  }
        
  const dataChart = {
    labels: [ 'T-Shirt', 'Trousers', 'Jacket', 'Hat', 'Glasses' ],
    datasets: [
      {
        label: 'Revenue of Items',
        data: [ 1000, 5000, 2000, 3000, 4000 ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
                  
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
                  
        ],
                
        borderWidth: 1,
        size:10,
      }
    ],
  }
    
  const columns = [
    {
      title: 'ID',
      dataIndex: 'stt',
      key: 'stt',
      width:100,
      align: 'center',
             
    },
    {
      title: 'Name of Item',
      dataIndex: 'item',
      key: 'item',
      width:400,
      align: 'center',
    },
    {
      title: 'Revenue ($)',
      dataIndex: 'revenue',
      key: 'revenue',
      align: 'center'
    }
            
  ]
            
  const datarevenue = [
    {
             
      stt: '1',
      item: 'T-shirt',
      revenue: 1000,
             
    },
    {
      stt: '2',
      item: 'Trousers',
      revenue: 5000,
    },
    {
      stt: '3',
      item: 'Jacket',
      revenue: 3000,
              
    },
    {
      stt: '4',
      item: 'Hat',
      revenue: 3000,
              
    },
    {
      stt: '5',
      item: 'Glasses',
      revenue: 4000,
              
    }
            
  ]
  
  return(
      
    <>
      <SttHeader 
        title='Manage Revenue ' 
        subtitle='Items Revenue'
    
      />
          
      <div className="container">
        <div className="site-statistic-demo-card">
           
          <div className='choose'>
            <div className='choose1'>Status:</div>
            <Button href="/monthstatistic" default>Revenue by month</Button>
            <div className="border1"><Button  href="/itemsstatistic" type="text" >Revenue by items </Button>
            </div></div>
         
          <Card>
            <Statistic className='reveneannual'
              title="Revenue this Month"
              value={100000}
              precision={2}
              valueStyle={{
                color: '#cf1322',
              }}
              style={{
                width:'650px'
                
              }}
            />
          </Card>
          {/* <Card>
            <Statistic className=''
              title="Revenue this Month"
              value={100000}
              precision={2}
              valueStyle={{
                color: '#cf1322',
              }}
              style={{
                width:'650px'
                
              }}
            />
            </Card> */}
       
        </div>
        <div className='Table-month'>
          <div className='headeroftable'>Table</div>        
          <Table columns={columns} dataSource={datarevenue} />
        </div>
        <div className='Chart'> 
          <div className='headerofchart'>Chart</div> 
          <div className='piechart'>
            <Pie options={options} data={dataChart} width={10} height={10}/>
          </div>
           
        </div>
      </div>
    
    </>
  )
  
}
  
export default Statisticitems
  