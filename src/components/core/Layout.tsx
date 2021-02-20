import { PageHeader } from "antd"
import { FC } from "react"
import Nav from "./Nav"

interface Props {
  children: React.ReactNode
  title: string
  subTitle: string
}

const Layout: FC<Props> = ({ children, title, subTitle }) => {
  return (
    <div>
      <Nav />
      <PageHeader className="jumbotron" title={title} subTitle={subTitle}/>
      <div style={{ width: "85%", margin: '0 auto' }}>
        { children }
      </div>
    </div>
  )
}

export default Layout
