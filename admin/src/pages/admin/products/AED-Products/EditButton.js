import React from 'react'
import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
function EditButton() {
  return (
    <Button 
      href="/manage-products/AEProducts/:Edit" 
      type="link" icon={<EditOutlined/> } 
      size="large"
    >
    </Button>
  )
}

export default EditButton