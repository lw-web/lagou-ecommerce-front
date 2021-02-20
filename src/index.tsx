import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './Routes'
import store, { history } from './store'
import './style.css'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={ history }>
      <Routes />
    </ConnectedRouter>
    
  </Provider>,
  document.getElementById('root')
)
