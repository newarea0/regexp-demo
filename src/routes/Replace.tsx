import { Form, Input, Table } from 'antd'
import { useState } from 'react'

export default function Replace() {
  const highlightText = (text, keyword) => {
    // const reg = new RegExp(`(${keyword})`, 'gi')
    // const parts = text.split(reg)
    // return parts.map((part, index) =>
    //   reg.test(part) ? <span key={index} style={{ color: 'red' }}>{part}</span> : part,
    // )
    const replacedText = text.replace(new RegExp(`(${keyword})`, 'gi'), '<span style="color: red;font-weight: 700;">$1</span>')
    return <span dangerouslySetInnerHTML={{ __html: replacedText }}></span>
  }

  const [form] = Form.useForm()
  const nameValue = Form.useWatch('name', form)
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => (nameValue ? highlightText(text, nameValue) : text),
    },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Address', dataIndex: 'address' },
  ]
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ]
  const [tableData, setTableData] = useState(data)

  function onInput(e) {
    const value = e.target.value
    setTableData(data.filter(item => item.name.includes(value)))
  }

  return (
    <>
      <Form form={form} layout="inline">
        <Form.Item label="Name" name="name">
          <Input allowClear onChange={onInput} />
        </Form.Item>
      </Form>
      <Table
        className="mt-4"
        columns={columns}
        dataSource={tableData}
        pagination={false}
      />
    </>
  )
}
