import { HashRouter, Switch, Route } from "react-router-dom"
import AddCategory from "./components/admin/AddCategory"
import AddProduct from "./components/admin/AddProduct"
import AdminDashboard from "./components/admin/AdminDashboard"
import AdminRoute from "./components/admin/AdminRoute"
import Dashboard from "./components/admin/Dashboard"
import PrivateRoute from "./components/admin/PrivateRoute"
import Cart from "./components/core/Cart"
import Home from "./components/core/Home"
import Product from "./components/core/Product"
import Shop from "./components/core/Shop"
import Success from "./components/core/Success"
import Signin from "./components/core/Signin"
import Signup from "./components/core/Signup"
import Orders from "./components/admin/Orders"

const Routes = () => {
  return <HashRouter>
    <Switch>
      <Route path="/" component={ Home } exact/>
      <Route path="/shop" component={Shop}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/product/:productId" component={Product}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/paysuccess" component={Success}/>
      <PrivateRoute path="/user/dashboard" component={Dashboard}/>
      <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
      <AdminRoute path="/create/category" component={AddCategory} />
      <AdminRoute path="/create/product" component={AddProduct} />
      <AdminRoute path="/admin/orders" component={Orders} />
    </Switch>
  </HashRouter>
}

export default Routes
