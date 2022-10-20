import React from 'react'
import { Typography, Button, Form, Input, Card } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import UI from './UI'

const { Title } = Typography
function Login() {
  return (
    <div className='login-container'>
      <UI />
      <div className='right-container'>
        <Card style={{ margin: '100px' }}>
          <Title style={{ textAlign: 'center' }} level={3}>Welcome</Title>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            // onFinish={}
          >
            <Form.Item
              name="username"
              rules={[ { required: true, message: 'Please input your Username!' } ]}
            >
              <Input  
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[ { required: true, message: 'Please input your Password!' } ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                // type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <a 
                style={{ float:'left  ', color: '#7DA863' }} 
                href="/register">Register now!</a
              >

              <a 
                style={{ float:'right', color: '#7DA863' }} 
                className="login-form-forgot" 
                href="/forgot-password"
              >
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button style={{ 
                width: '100%', 
                backgroundColor: '#7DA863',
                borderRadius: '10px',
                border: '1px solid #7DA863',
                // color: 'white'

              }} type="" htmlType="submit" className="login-form-button">
                Sign In
              </Button>
            </Form.Item>
    
          </Form>
        </Card>
 
      </div>
    </div>
  )
}

export default Login