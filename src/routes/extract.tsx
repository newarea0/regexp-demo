import { Button, Form, Input, Space, Tag } from 'antd'
import { useState } from 'react'

const tagsData = [
  'Jack 13911112222 广东省深圳市南山区粤海街道软件产业基地1栋A座21楼',
  'Jack 86-13911112222 广东省深圳市南山区粤海街道软件产业基地1栋A座21楼',
  '广东省深圳市南山区粤海街道软件产业基地1栋A座21楼 Jack 13911112222',
  'Jack 有两个手机号，分别是 13911112222、13911114444',
]

export default function Extract() {
  const [form] = Form.useForm()
  const [address, setAddress] = useState('[]')

  function onAddressFinish(values) {
    const mobileReg = /(86-1[3-9]\d{9})|(861[3-9]\d{9})|(1[3-9]\d{9})/g
    const result = values.address.match(mobileReg)
    setAddress(JSON.stringify(result, null, 2))
  }

  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const handleChange = (tag: string, checked: boolean) => {
    if (checked) {
      setSelectedTags([tag])
      form.setFieldsValue({ address: tag })
    }
    else {
      setSelectedTags([])
      form.setFieldsValue({ address: '' })
    }
  }

  return (
    <>
      {/* Jack 13128814051 广东省深圳市南山区 粤海街道软件产业基地1栋A座21楼 */}
      <Form form={form} layout="horizontal" labelCol={{ span: 6 }} wrapperCol={{ span: 12 }} onFinish={onAddressFinish}>
        <Form.Item
          label="文本"
          name="address"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input.TextArea rows={4} placeholder="请输入" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6 }}>
          <Space direction="vertical" size="small">
            {tagsData.map<React.ReactNode>(tag => (
              <Tag.CheckableTag
                key={tag}
                checked={selectedTags.includes(tag)}
                onChange={checked => handleChange(tag, checked)}
              >
                {tag}
              </Tag.CheckableTag>
            ))}
          </Space>
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
