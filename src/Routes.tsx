import { HashRouter, Switch, Route } from "react-router-dom"
import AddCategory from "./components/admin/AddCategory"
import AddProduct from "./components/admin/AddProduct"
import AdminDashboard from "./components/admin/AdminDashboard"
import AdminRoute from "./components/admin/AdminRoute"
import Dashboard from "./components/admin/Dashboard"
import PrivateRoute from "./components/admin/PrivateRoute"
import Home from "./components/core/Home"
import Shop from "./components/core/Shop"
import Signin from "./components/core/Signin"
import Signup from "./components/core/Signup"

const Routes = () => {
  return <HashRouter>
    <Switch>
      <Route path="/" component={ Home } exact/>
      <Route path="/shop" component={Shop}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <PrivateRoute path="/user/dashboard" component={Dashboard}/>
      <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
      <AdminRoute path="/create/category" component={AddCategory} />
      <AdminRoute path="/create/product" component={AddProduct} />
    </Switch>
  </HashRouter>
}

export default Routes
