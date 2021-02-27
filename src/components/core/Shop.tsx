import { Col, Row, Space } from "antd"
import CheckBox from "./CheckBox"
import Layout from "./Layout"
import RadioBox from "./RadioBox"

const Shop = () => {
  const filterDOM = () => (
    <Space size="middle" direction="vertical">
      <CheckBox />
      <RadioBox />
    </Space>
  )
  return <Layout title="拉钩商城" subTitle="挑选你喜欢的商品吧！">
    <Row>
      <Col span="4">{filterDOM()}</Col>
      <Col span="20">Right</Col>
    </Row>
  </Layout>
}

export default Shop
