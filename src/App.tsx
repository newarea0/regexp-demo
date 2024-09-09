import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import { useEffect, useState } from 'react'

function App() {
  const menus = [
    { label: '文本替换', key: 'replace' },
    { label: '表单校验', key: 'validate' },
    { label: '字符串提取', key: 'extract' },
  ]
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  function onSelect({ key }) {
    navigate(`/${key}`)
    setSelectedKeys([key])
  }
  useEffect(() => {
    setSelectedKeys([location.pathname.slice(1)])
  }, [])
  return (
    <>
      <Menu
        items={menus}
        mode="horizontal"
        selectedKeys={selectedKeys}
        className="justify-center"
        onSelect={onSelect}
      />
      <div className="p-5">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
