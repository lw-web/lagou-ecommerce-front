import { Button } from "antd"
import { Link } from "react-router-dom"
import Layout from "./Layout"

const Success = () => {
  return <Layout title="支付成功" subTitle="">
    <Button>
      <Link to="/">继续购买</Link>
    </Button>
  </Layout>
}

export default Success
