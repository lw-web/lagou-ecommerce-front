import { Menu } from "antd"
import { RouterState } from "connected-react-router"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { AppStore } from "../../store/reducers/imdex"

function useActive (curPath: string, path: string): string {
  return curPath === path ? 'ant-menu-item-selected' : ''
}

const Nav = () => {
  const router = useSelector<AppStore, RouterState>(state => state.router)
  const pathname = router.location.pathname
  const isHome = useActive(pathname, '/')
  const isShop = useActive(pathname, '/shop')
  const isSignin = useActive(pathname, '/signin')
  const isSignup = useActive(pathname, '/signup')
  return (
    <Menu mode="horizontal" selectable={false}>
      <Menu.Item className={isHome}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item className={isShop}>
        <Link to="/shop">商城</Link>
      </Menu.Item>
      <Menu.Item className={isSignin}>
        <Link to="/signin">登陆</Link>
      </Menu.Item>
      <Menu.Item className={isSignup}>
        <Link to="/signup">注册</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Nav
