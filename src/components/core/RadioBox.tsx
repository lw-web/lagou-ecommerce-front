import { Typography, List, Radio } from 'antd'

const { Title } = Typography

const prices = [
  {price: '0-50'},
  {price: '50-100'}
]

const RadioBox = () => {
  return <>
    <Title level={4}>按照价格筛选</Title>
    <Radio.Group>
      <List 
        dataSource={prices}
        renderItem={item => (
          <List.Item>
            <Radio>{item.price}</Radio>
          </List.Item>
        )}
      />
    </Radio.Group>
  </>
}

export default RadioBox
