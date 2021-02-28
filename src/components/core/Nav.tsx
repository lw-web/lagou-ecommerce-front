import { Badge, Menu } from "antd"
import { RouterState } from "connected-react-router"
import { useContext, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { TotalContext } from "../../anotherStore"
import { isAuth } from "../../helpers/auth"
import { itemCount } from "../../helpers/cart"
import { Jwt } from "../../store/modules/auth"
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
  const isCart = useActive(pathname, '/cart')
  const isDashboard = useActive(pathname, getDashboardUrl())

  const [count, setCount] = useContext(TotalContext)
  useEffect(() => {
    setCount(itemCount())
  })
  // 箭头函数声明方式的话，不能在函数声明之前调用函数
  function getDashboardUrl () {
    let url = '/user/dashboard'
    if (isAuth()) {
      const { user: { role } } = isAuth() as Jwt
      if (role === 1) {
        url = '/admin/dashboard'
      }
    }
    return url
  }

  return (
    <Menu mode="horizontal" selectable={false}>
      <Menu.Item className={isHome}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item className={isShop}>
        <Link to="/shop">商城</Link>
      </Menu.Item>
      <Menu.Item className={isCart}>
        <Link to="/cart">
          购物车
          <Badge count={count} offset={[5, -10]}/>
        </Link>
      </Menu.Item>
      {!isAuth() ? <>
        <Menu.Item className={isSignin}>
          <Link to="/signin">登陆</Link>
        </Menu.Item>
        <Menu.Item className={isSignup}>
          <Link to="/signup">注册</Link>
        </Menu.Item>
      </> : <>
        <Menu.Item className={isDashboard}>
          <Link to={getDashboardUrl()}>dashboard</Link>
        </Menu.Item>
      </>}
    </Menu>
  )
}

export default Nav
