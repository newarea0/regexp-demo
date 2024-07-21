import { Button, Form, Input } from 'antd'
import AddressParse from 'address-parse'
import { pick } from 'lodash-es'
import { useState } from 'react'

export default function Extract() {
  const [address, setAddress] = useState('{}')

  function onAddressFinish(values) {
    const result = AddressParse.parse(values.address)
    const obj = pick(result[0], ['name', 'mobile', 'province', 'city', 'area', 'details'])
    setAddress(JSON.stringify(obj, null, 2))
  }

  return (
    <>
      {/* 西西 13128814051 广东省深圳市南山区 粤海街道软件产业基地1栋A座21楼 */}
      <Form layout="horizontal" labelCol={{ span: 6 }} wrapperCol={{ span: 12 }} onFinish={onAddressFinish}>
        <Form.Item
          label="智能地址识别"
          name="address"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input.TextArea rows={4} placeholder="粘贴地址，自动识别" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6 }}>
          <Button type="primary" htmlType="submit">解析</Button>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6 }}>
          <pre>
            <code>{address}</code>
          </pre>
        </Form.Item>
      </Form>
    </>
  )
}
