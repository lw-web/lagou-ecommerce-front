import { Typography, List, Checkbox as AntdCheckBox } from 'antd'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../store/actions/category.action'
import { CategoryState } from '../../store/reducers/category.reducer'
import { AppStore } from '../../store/reducers/imdex'

const { Title } = Typography

interface Props {
  handlerFilter: (arg: string[]) => void
}

const CheckBox:FC<Props> = ({ handlerFilter }) => {
  const dispatch = useDispatch()
  const { category } = useSelector<AppStore, CategoryState>(state => state.category)
  useEffect(() => {
    dispatch(getCategory())
  }, [])
  const onChange = (checkedValue: CheckboxValueType[]) => {
    handlerFilter(checkedValue as string[])
  }

  return <>
    <Title level={4}>按照分类筛选</Title>
    <AntdCheckBox.Group
      className="checkBoxFilter"
      options={category.result.map(item => ({ label: item.name, value: item._id }))}
      onChange={onChange}
    />
  </>
}

export default CheckBox
