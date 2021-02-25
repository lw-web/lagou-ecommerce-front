import { FC } from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { isAuth } from "../../helpers/auth"
import { Jwt } from "../../store/modules/auth"

interface AdminRouteProps extends RouteProps {
  component: React.ComponentType<any>
}

const AdminRoute: FC<AdminRouteProps> = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => {
    const auth = isAuth()
    if (auth) {
      const { user: { role } } = auth as Jwt
      if (role === 0) return <Component {...props}/>
    }
    return <Redirect to="/signin" />
  }} />
}

export default AdminRoute
