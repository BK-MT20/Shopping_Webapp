import React from 'react'
import {ArrowLeftOutlined} from '@ant-design/icons'
import { Button,Form,Input,Divider } from 'antd';

function AEProducts() {
  return (
    <>
        <Button 
            href="/manage-products" 
            type="link" icon={<ArrowLeftOutlined/>} 
            size="small"
        >
            Manage Products
        </Button>
        <Form
            name="wrap"
            // 
           
            wrapperCol={{ span: 16 }}
        >
            <Form.Item
                label="Name"
                name="name"
                
            >
            <Input placeholder="Name..." />
        </Form.Item>
        <Divider style={{ backgroundColor: "#d8d8d8" }}></Divider>

        <Form.Item

                label="Image"
                name="image"
            >
            <Input placeholder="Image..." />
            <Button type="primary" style={{ marginTop: "20px" }}danger >Remove</Button>
            <Divider style={{ backgroundColor: "#d8d8d8" }}></Divider>
            <Button type="primary">Add More</Button>
        </Form.Item>

        <Divider style={{ backgroundColor: "#d8d8d8" }}></Divider>

        <Form.Item
                label="Price"
                name="price"
            >
            <Input placeholder="Price..." />
        </Form.Item>
        
        <Divider style={{ backgroundColor: "#d8d8d8" }}></Divider>

        <Form.Item

            label="Colors"
            name="color"
            >
            <Input placeholder="Colors..." />
                <Button type="primary" style={{ marginTop: "20px" }}danger >Remove</Button>
                <Divider style={{ backgroundColor: "#d8d8d8" }}></Divider>
                <Button type="primary">Add More</Button>
            </Form.Item>
        </Form>
    </>

  )
}

export default AEProducts