import React, { useEffect } from "react"
import { Row, Col, Typography } from "antd"
import Layout from "./Layout"
import Search from "./Search"
import ProductItem from "./ProductItem"
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "../../store/actions/product.actions"
import { AppStore } from "../../store/reducers/imdex"
import { ProductState } from "../../store/reducers/pruduct.reducer"

const { Title } = Typography

const Home = () => {
  const dispatch = useDispatch()

  const { createdAt, sold } = useSelector<AppStore, ProductState>(state => state.product)

  useEffect(()=> {
    dispatch(getProduct('createdAt'))
    dispatch(getProduct('sold'))
  }, [])

  return <Layout title="拉钩商城" subTitle="尽情享受吧！">
    <Search />
    <Title level={5}>最新上架</Title>
    <Row gutter={[16, 16]}>
      {createdAt.products.map(item => (
        <Col span={6} key={item._id}>
          <ProductItem product={item}/>
        </Col>
      ))}
    </Row>
    <Title level={5}>最受欢迎</Title>
    <Row gutter={[16, 16]}>
      {sold.products.map(item => (
        <Col span={6}  key={item._id}>
          <ProductItem product={item}/>
        </Col>
      ))}
    </Row>
  </Layout>
}

export default Home
