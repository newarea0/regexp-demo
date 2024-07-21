import { Button, Form, Input } from 'antd'

export default function Validate() {
  const [form] = Form.useForm()

  function onFinish(values) {
    console.log(111)
    form.validateFields()
  }

  return (
    <>
      <Form form={form} layout="horizontal" labelCol={{ span: 6 }} wrapperCol={{ span: 12 }} onFinish={onFinish}>
        <Form.Item
          label="手机号"
          name="phone"
          hasFeedback
          rules={[
            { pattern: /^(86-1[3-9]\d{9})|(861[3-9]\d{9})|(1[3-9]\d{9})$/, message: '请输入正确的手机号' },
            { required: true, message: '请输入' },
          ]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="邮箱"
          name="email"
          hasFeedback
          rules={[
            { pattern: /^[\w\-.]+@[\w\-.]+\.[A-Z]{2,}$/i, message: '请输入正确的邮箱' },
            { required: true, message: '请输入' },
          ]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="身份证号"
          name="id"
          hasFeedback
          rules={[
            { pattern: /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dx]$/i, message: '请输入正确的身份证号' },
            { required: true, message: '请输入' },
          ]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6 }}>
          <Button type="primary" htmlType="submit">确认</Button>
        </Form.Item>
      </Form>
    </>
  )
}
