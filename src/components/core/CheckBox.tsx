import { Typography, List, Checkbox as AntdCheckBox } from 'antd'

const { Title } = Typography

const categories = [
  {name: 'Node'},
  {name: 'Angular'}
]

const CheckBox = () => {
  return <>
    <Title level={4}>按照分类筛选</Title>
    <List 
      dataSource={categories}
      renderItem={item => (
        <List.Item>
          <AntdCheckBox>{item.name}</AntdCheckBox>
        </List.Item>
      )}
    />
  </>
}

export default CheckBox
