import { Form, Input, Select, Button, Divider, Row, Col } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../store/actions/category.action'
import { searchProduct } from '../../store/actions/product.actions'
import { CategoryState } from '../../store/reducers/category.reducer'
import { AppStore } from '../../store/reducers/imdex'
import { ProductState } from '../../store/reducers/pruduct.reducer'
import ProductItem from './ProductItem'

const Search = () => {
  const dispatch = useDispatch()
  const { search } = useSelector<AppStore, ProductState>(state => state.product)
  const { category } = useSelector<AppStore, CategoryState>(state => state.category)
  useEffect(() => {
    dispatch(getCategory())
  },[])
  const onFinish = (value: { search: string, category: string }) => {
    dispatch(searchProduct(value))
  }

  return (
    <>
      <Form layout="inline" initialValues={{category: 'All'}} onFinish={onFinish}>
        <Input.Group compact>
          <Form.Item name="category">
            <Select>
              <Select.Option value="All">所有分类</Select.Option>
              {category.result.map(item => (
                <Select.Option value={item._id} key={item._id}>{item.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="search">
            <Input placeholder="请输入搜索关键字"/>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">搜索</Button>
          </Form.Item>
        </Input.Group>
      </Form>
      <Divider />
      <Row gutter={[16, 16]}>
        {search.map(item => (
          <Col span={6} key={item._id}>
            <ProductItem product={item}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Search
