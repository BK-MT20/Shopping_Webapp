import React, { useState } from 'react'
import { Table,Tag,Space,Popconfirm,Form,Modal,Input } from 'antd';
import {EditOutlined ,DeleteOutlined} from '@ant-design/icons';
import './ManageProducts.scss'

function ManageProducts() {
  const [modaldata, setmodaldata] = useState([])
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key', 
      align: 'center',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'key',
      align: 'center',
      render:  (_,record) => (<img src={`${record.image}`} style={{width: '80px' }} /> ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'key',
      align: 'center',
    },
    {
      title: 'Colors',
      key: 'key',
      dataIndex: 'color',
      align: 'center',
      render: (_, { colors }) => (
        <>
          {
          colors.map((color) => {
  
  
            return (
              <Tag color={color} key={color}>
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
          <EditOutlined style={{ fontSize: '16px', color: '#08c' }} 
                        onClick={()=>showModal(record)}
          />
          <Popconfirm title="Sure to delete?" okText="Yes" cancelText="No" >
            <DeleteOutlined style={{ fontSize: '16px', color: 'red' }}/>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Boxy Denim Jacket',
      price: '$25.00',
      image: 'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
      colors: ['LightBlue', 'DarkBlue'],
    },
    {
      key: '2',
      name: 'Boxy Denim Jacket',
      price: '$25.00',
      image: 'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
      colors: ['LightBlue', 'DarkBlue'],
    },
    {
      key: '3',
      name: 'Boxy Denim Jacket',
      price: '$25.00',
      image: 'https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=990',
      colors: ['LightBlue', 'DarkBlue'],
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (record) => {
  console.log(record);
  setIsModalVisible(true);
  setmodaldata(record);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
        <Table columns={columns} 
           dataSource={data} 
           rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
        />
        <Modal
          title="Edit Products"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            name="wrap"
            labelCol={{ flex: '70px' }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            colon={false}
          >
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Image" name="imgage" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Price" name="price" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Type" name="type" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
 
          </Form>
        </Modal>

    </>

  )
}

export default ManageProducts