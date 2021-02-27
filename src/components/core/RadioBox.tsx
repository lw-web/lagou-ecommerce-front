import { Typography, List, Radio, RadioChangeEvent } from 'antd'
import { FC } from 'react'
import prices from '../../helpers/price'

interface Props {
  handlerFilter: (arg: number[]) => void
}

const { Title } = Typography

const RadioBox:FC<Props> = ({ handlerFilter }) => {
  const onChange = (e: RadioChangeEvent) => {
    handlerFilter(e.target.value)
  }
  return <>
    <Title level={4}>按照价格筛选</Title>
    <Radio.Group>
      <List 
        dataSource={prices}
        renderItem={item => (
          <List.Item>
            <Radio onChange={onChange} value={item.array}>{item.name}</Radio>
          </List.Item>
        )}
      />
    </Radio.Group>
  </>
}

export default RadioBox
