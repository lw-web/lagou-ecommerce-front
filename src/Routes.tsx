import { HashRouter, Switch, Route } from "react-router-dom"
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
    </Switch>
  </HashRouter>
}

export default Routes
