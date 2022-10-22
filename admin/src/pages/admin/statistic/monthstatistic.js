
import {Card, Grid, Statistic,Table,Space,Button, Radio,Col,Form} from 'antd';
import './month.scss'
<script src="https://unpkg.com/recharts/umd/Recharts.min.js"></script>
import {  ArrowLeftOutlined} from '@ant-design/icons'
import React , {Component,useState,activateLasers  } from 'react'
import { SttHeader } from '../../../components/'
import axios from 'axios'
import { createRoot } from 'react-dom/client';
import { DownloadOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types'
import {items} from '../../../components'
import './itemsstatistic.js'

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';



ChartJS.register(
  CategoryScale,
  LinearScale,
 // BarElement,
  Title,
  Tooltip,
  Legend
);
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { data } from './chart.js';
import Items from './itemsstatistic.js';
//import {faker} from 'faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



function Statisticmonth(onSearch){
  
  const [size, setSize] = useState('large');
      const options = {
        responsive: true,
        interaction: {
          mode: 'index' ,
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
            type: 'linear' ,
            display: true,
            position: 'left' ,
          }
          
        
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October'];
      
      const dataChart = {
        labels,
        datasets: [
          {
            label: 'Revenue',
            data:[1000,5000,3000,3000,4000,2000,8000,5000,6000,7000],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
          },

        ],
      };
      
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'stt',
      key: 'stt',
      width:100,
      align: 'center',
      
     
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      width:400,
      align: 'center',
    },
    {
      title: 'Revenue ($)',
      dataIndex: 'revenue',
      key: 'revenue',
      align: 'center',
    },
    
  ];
    
  const data_revenue = [
    {
     
      stt: '1',
      time: '1/2022',
      revenue: 1000,
     
    },
    {
      stt: '2',
      time: '2/2022',
      revenue: 5000,
    },
    {
      stt: '3',
      time: '3/2022',
      revenue: 3000,
      
    },
    {
      stt: '4',
      time: '4/2022',
      revenue: 3000,
      
    },
    {
      stt: '5',
      time: '5/2022',
      revenue: 4000,
      
    },
    {
      stt: '6',
      time: '6/2022',
      revenue: 2000,
      
    },
    {
      stt: '7',
      time: '7/2022',
      revenue: 8000,
      
    },
    {
      stt: '8',
      time: '8/2022',
      revenue: 5000,
      
    },
    {
      stt: '9',
      time: '9/2022',
      revenue: 6000,
      
    },
    {
      stt: '10',
      time: '10/2022',
      revenue: 7000,
      
    },
  ];
  return(
    
      <>
        <SttHeader 
          title='Manage Revenue ' 
          subtitle='Month Revenue'
        />
        
        <div className="container">
          <div className="site-statistic-demo-card">
         
            <div className='choose'>
              <div className='choose1'>Status:</div>
              <div className="border1">
              <Button href="/manage-statistic/monthstatistic" type="text" >Revenue by month</Button></div>
              <Button  href="/manage-statistic/itemsstatistic" >Revenue by items </Button></div>
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
         
     
        </div>
        <div className='Table-month'>
          <div className='headeroftable'>Table</div>        
          <Table columns={columns} dataSource={data_revenue} />
        </div>
        <div className='Chart'> 
          <div className='headerofchart'>Chart</div> 
          <div className='linechart'>
          <Line options={options} data={dataChart} />
          </div>
          </div>
          </div>
        
      </>
)

}



export default Statisticmonth
