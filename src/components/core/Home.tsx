import { useSelector } from "react-redux"
import Layout from "./Layout"

const Home = () => {
  const state = useSelector(state => state)
  return <Layout title="拉钩商城" subTitle="尽情享受吧！">Home { JSON.stringify(state) }</Layout>
}

export default Home
