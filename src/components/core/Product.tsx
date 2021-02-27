import { Col, Row } from "antd"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductById } from "../../store/actions/product.actions"
import { AppStore } from "../../store/reducers/imdex"
import { ProductState } from "../../store/reducers/pruduct.reducer"
import Layout from "./Layout"
import ProductItem from "./ProductItem"

const Product = () => {
  const dispatch = useDispatch()
  const { product } = useSelector<AppStore, ProductState>(state => state.product)
  useEffect(() => {
    dispatch(getProductById({productId}))
  }, [])
  const {productId} = useParams<{productId: string}>()
  return <Layout title="商品名称" subTitle="商品描述">
    <Row gutter={36}>
      <Col span="18">
        <ProductItem product={product.result} showViewProduct={false}/>
      </Col>
      <Col span="6">right</Col>
    </Row>
  </Layout>
}

export default Product
