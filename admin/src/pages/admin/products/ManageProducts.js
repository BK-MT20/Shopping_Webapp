import React, { useState, useEffect } from 'react'
import { Table, Tag, Space, Modal, Input, Button, Card, Typography } from 'antd'
import axios from 'axios'
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons'
import EditButton from './AED-Products/EditButton'
import './ManageProducts.scss'
import { ProductHeader } from '../../../components/'
import AddButton  from './AED-Products/AddButton'
function ManageProducts() {
  // const [searchText, setSearchText] = useState('');
  // const [searchedColumn, setSearchedColumn] = useState('');
  // const searchInput = useRef(null);
  // const handleSearch = (selectedKeys, confirm, dataIndex) => {
  //   // confirm();
  //   // console.log(selectedKeys[0])
  //   // console.log(dataIndex)
  //   setSearchText(selectedKeys[0]);
  //   setSearchedColumn(dataIndex);
  // };
  const [ dataSource, setDataSource ] = useState([])
  const [ filteredInfo, setFilteredInfo ] = useState({})
  const [ sortedInfo, setSortedInfo ] = useState({})
  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then(res => {
        setDataSource(res.data.map((item, index) => ({
          ...item,
          key: item.id,
          index,
        })))
        // console.log(res.data)
      })
      .catch(error => console.log(error))
  }, [])
  const handleChange = (pagination, filters, sorter) => {
    // console.log('Various parameters', pagination, filters, sorter)
    setFilteredInfo(filters)
    setSortedInfo(sorter)
  }

  const clearAll = () => {
    setFilteredInfo({})
    setSortedInfo({})
  }

  const onDeleteStudent = record => {
    Modal.confirm({
      title: 'Are you sure,you want to delete this product?',
      onOk: () => {
        axios.delete('http://localhost:3000/data/' + record.id)
          .then(
            setDataSource(pre => {
              console.log(pre, record)
              return pre.filter(student => student.id !== record.id)
            })
          )
      }
    })
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name', 
      align: 'center',
      filteredValue: filteredInfo.name || null,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <Input.Search placeholder='Type text here'
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [ e.target.value ] : [])
            }}
            onPressEnter={() => {
              // console.log(selectedKeys)
              confirm()
            }}
          /> 

        )

      },
      filterIcon:() => {
        return <SearchOutlined/>
      },
      onFilter:(value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      align: 'center',  
      width:400,
      render: (images) => (
        images.map((image, idx) => {
          return (
            <img 
              key={idx}
              src={image} 
              alt=""
              style={{ width: '80px', marginTop:'10px' }} 
            /> 
          )
        })
      ),
      
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      sortOrder: sortedInfo.columnKey === 'price' ? sortedInfo.order : null,
      sorter: (a, b) => {        
        return a.price.slice(1) - b.price.slice(1)
      }
    },
    {
      title: 'Remained',
      dataIndex: 'remained',
      key: 'remained',
      align: 'center',
      sortOrder: sortedInfo.columnKey === 'remained' ? sortedInfo.order : null,
      sorter: (a, b) => a.remained - b.remained,
    },
    {
      title: 'Colors',
      key: 'color',
      dataIndex: 'color',
      align: 'center',
      render: (_, { colors }) => (
        <>
          {
            colors.map((color) => {
              return (
                <Tag color={color} key={color}
                  style={{ marginTop:'10px' }} >
                  <Space size="middle">
                    {color.toUpperCase()}
                  </Space>
                </Tag>
              )
            })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (record) => (
        <Space size="middle" style = {{ gap: '0px' }}>
          <EditButton/>
          <DeleteOutlined 
            style={{ fontSize: '18px', color: 'red' }}
            onClick={() => {
              onDeleteStudent(record)
            }} 
          />
        </Space>
      ),
    }
  ]

  return (
    <>
      <ProductHeader 
        title='Manage Product' 
        subtitle='All products'

      />
      <Space
        style= {{           
          padding: '24px' }}
      >
        <Card>
          <Space
            style= {{           
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Typography.Title level={4}>
              Table
            </Typography.Title>
            <Space>
              <Button 
                className='reset-btn' 
                onClick={clearAll}
              >
                Reset filters
              </Button>
              <AddButton/>
            </Space>

          </Space>

          <Table 
            bordered
            columns={columns} 
            dataSource={dataSource} 
            rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
            pagination={{ pageSize: 10 }}
            scroll={{ y: 450 }}  
            onChange={handleChange}
          />
        </Card>
      </Space>
    </>

  )
}

export default ManageProducts