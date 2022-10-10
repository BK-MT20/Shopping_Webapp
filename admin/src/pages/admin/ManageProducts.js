import React, { useRef,useState } from 'react'
import { Table,Tag,Space,Popconfirm ,Input} from 'antd';
import {DeleteOutlined,SearchOutlined} from '@ant-design/icons';
import EditButton from './AED-Products/EditButton'
import './ManageProducts.scss'

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
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name', 
      align: 'center',
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
            <Input placeholder='Type text here'
                  value={selectedKeys[0]}
                  onChange={(e)=>{
                    setSelectedKeys(e.target.value?[e.target.value]:[])
                  }}
                  onPressEnter={()=>{
                    // console.log(selectedKeys[0])
                    confirm();
                  }}
            />
        )

      },
      filterIcon:() => {
        return <SearchOutlined/>
      },
      onFilter:(value,record) => {
        return record.name.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      align: 'center',  
      width:400,
      render: (images, record ) => (

          images.map((image,idx) => {
            console.log(idx)
            return (
              <img 
                key={idx}
                src={image} 
                alt=""
                style={{width: '80px' ,marginTop:'10px'}} 
              /> 
            );
          })
      ),
      
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => {        
        return a.price.slice(1) - b.price.slice(1)
      }
    },
    {
      title: 'Remained',
      dataIndex: 'remained',
      key: 'remained',
      align: 'center',
      defaultSortOrder: 'ascend',
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
              style={{marginTop:'10px'}} >
                <Space size="middle">
                  {color.toUpperCase()}
                </Space>
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (_, record) => (
        <Space size="middle">
          {/* <EditOutlined style={{ fontSize: '16px', color: '#08c' }} 
                        
          /> */}
          <EditButton/>
          <Popconfirm title="Sure to delete?" okText="Yes" cancelText="No" >
            <DeleteOutlined style={{ fontSize: '18px', color: 'red' }}/>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Boxy',
      price: '$20.00',
      image: ['https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
              'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990'
              ],
      colors: ['LightBlue', 'DarkBlue'],
      remained: 1,
    },
    {
      key: '2',
      name: 'Denim ',
      price: '$21.00',
      image: ['https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
              'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990'
              ],
      colors: ['LightBlue', 'DarkBlue'],
      remained: 2,
    },
    {
      key: '3',
      name: 'Jacket',
      price: '$22.00',
      image: ['https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
              'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990'
            ],
      colors: ['LightBlue', 'DarkBlue'],
      remained: 3,

      
    },
    {
      key: '4',
      name: 'vest',
      price: '$23.00',
      image: ['https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
              'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990'
            ],
      colors: ['LightBlue', 'DarkBlue'],
      remained: 4,
      
    },
    {
      key: '5',
      name: 'pants',
      price: '$24.00',
      image: ['https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
              'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990'
            ],
      colors: ['LightBlue', 'DarkBlue'],
      remained: 5,
      
    },
    {
      key: '6',
      name: 't-shirt',
      price: '$25.00',
      image: ['https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
              'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990'
              ],
      colors: ['LightBlue', 'DarkBlue'],
      remained: 6,
      
    },
    {
      key: '7',
      name: 'jacket',
      price: '$26.00',
      image: ['https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
              'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990'
              ],
      colors: ['LightBlue', 'DarkBlue'],
      remained: 7,
    
  },
  {
    key: '8',
    name: 'socks',
    price: '$27.00',
    image: ['https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
            'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990'
            ],
    colors: ['LightBlue', 'DarkBlue'],
    remained: 8,
  
},
{
  key: '9',
  name: 'shirt',
  price: '$28.00',
  image: ['https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
          'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990'
          ],
  colors: ['LightBlue', 'DarkBlue'],
  remained: 9,

},
{
  key: '10',
  name: 'dress',
  price: '$29.00',
  image: ['https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
            'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990'
          ],
  colors: ['LightBlue', 'DarkBlue'],
  remained: 10,

},
{
  key: '11',
  name: 'Boxy Denim Jacket',
  price: '$30.00',
  image: ['https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
          'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990'
          ],
  colors: ['LightBlue', 'DarkBlue'],
  remained: 11,

},

];

  return (
    <>
        <Table columns={columns} 
           dataSource={data} 
           rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
           pagination={{ pageSize: 10 }}
           scroll={{ y: 450 }}  
        />
    </>

  )
}

export default ManageProducts