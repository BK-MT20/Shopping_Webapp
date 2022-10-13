import React ,{  }from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button,Form,Input,Divider,InputNumber,Modal} from 'antd'
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom'
function AEProducts() {
  const navigate = useNavigate()
  let location = useLocation()
  // console.log(location.pathname) 
  let paths = location.pathname.split('/')
  let type = paths[paths.length - 1].slice(1)
  
  const success = () => {
    Modal.success({
      content: 'Successfully',
      onOk() {
        navigate(-1)
      }
    })
  }
  const onFinish = (values) => {
    if(type === 'Add') {
      axios.post('http://localhost:3000/data',{ 
        name: values.name,
        image: values.image,
        price: values.price,
        colors: values.colors,
        remained: values.item,
      })
        .then(res => {
          console.log(res.data)
          success()
        })
    }
  }

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
        onFinish={onFinish}
        // wrapperCol={{ span: 16 }}
        // labelCol={{ span: 3 }}

      >
        <Divider style={{ backgroundColor: '#d8d8d8' }}>Name field</Divider>

        <Form.Item
          name="name"
          rules={[ { required: true, message: 'Please input your name!' } ]}
        >
          <Input placeholder="Name..." />
        </Form.Item>
        <Divider style={{ backgroundColor: '#d8d8d8' }}>Images field</Divider>

        <Form.List
          name="image"
          rules={[ { required: true, message: 'Please input your image!' } ]}
        >
          {(fields, { add, remove }, { errors }) => (

            <>
              {fields.map((field) => (
                <Form.Item
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={[ 'onChange', 'onBlur' ]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: 'Please input your image.',
                      },
                    ]}
                    noStyle
                  >
                    <Input name="image" placeholder="Image..." />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <Button type="primary" 
                      onClick ={() => {
                        remove(field.name)
                      }} 
                      style={{ marginTop: '20px' }}
                      danger 
                    >
                        Remove
                    </Button>

                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="primary"
                  onClick={() => add()}
                    
                  style={{ float: 'right' }} 
                >
                    Add More Images
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>

        <Divider style={{ backgroundColor: '#d8d8d8' }}>Price field</Divider>


        <Form.Item
          name="price"
          rules={[ { required: true, message: 'Please input your price!' } ]}
        >
          <Input placeholder="Price..." />
        </Form.Item>

        <Divider style={{ backgroundColor: '#d8d8d8', }}>Colors field</Divider>

        <Form.List
          name="colors"
          rules={[ { required: true, message: 'Please input your color!' } ]}
        >
          {(fields, { add, remove }, { errors }) => (

            <>
              {fields.map((field) => (
                <Form.Item
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={[ 'onChange', 'onBlur' ]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: 'Please input your color.',
                      },
                    ]}
                    noStyle
                  >
                    <Input name="color" placeholder="Color..." />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <Button type="primary" 
                      onClick ={() => {
                        remove(field.name)
                      }} 
                      style={{ marginTop: '20px' }}
                      danger 
                    >
                        Remove
                    </Button>

                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="primary"
                  onClick={() => add()}
                    
                  style={{ float: 'right' }} 
                >
                    Add More Colors
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
        <Divider style={{ backgroundColor: '#d8d8d8' }}>Total items field</Divider>
        
        <Form.Item
          name="item"
          rules={[ { required: true, message: 'Please input your total items left!' } ]}
                
        >
          <InputNumber placeholder="Item..." style={{ width:'100%' }} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            // onClick={isModalOpen && success }
            style={{ float: 'right' }} 
          >
            SAVE
          </Button>
        </Form.Item>
      </Form>
    </>

  )
}

export default AEProducts