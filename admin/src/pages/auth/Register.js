import React from 'react'
import { Typography, Button, Form, Input, Card } from 'antd'
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons'

const { Title } = Typography
import UI from './UI'

const Register = () => {
  return (
    <div className='login-container'>
      <UI/>
      <div className='right-container'>
        <Card style={{ margin: '100px' }}>
          <Title style={{ textAlign: 'center' }} level={3}>Welcome</Title>
          <Form
            name="normal_register"
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
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                }
              ]}
            >
              <Input   
                prefix={<MailOutlined className="site-form-item-icon" />} 
                placeholder="Enter email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[ { required: true, message: 'Please input your Password!' } ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="confirm-password"
              dependencies={[ 'password' ]}
              hasFeedback
              rules={[ 
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'))
                  },
                })
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Form.Item>
              <Button style={{ 
                width: '100%', 
                backgroundColor: '#7DA863',
                borderRadius: '10px',
                border: '1px solid #7DA863',
                // color: 'white'

              }} type="" htmlType="submit" className="login-form-button">
                Sign Up
              </Button>
            </Form.Item>
            Already have an account?
            <a 
              style={{  paddingLeft: '8px', color: 'grey' }} 
              className="login-form-forgot" 
              href="/login"
            >
                Sign In
            </a>
            <a 
              style={{ float:'right', color: '#7DA863' }} 
              className="login-form-forgot" 
              href="/forgot-password"
            >
                Forgot password
            </a>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default Register