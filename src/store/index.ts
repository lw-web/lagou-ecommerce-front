import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./reducers/imdex";
import { createHashHistory } from 'history'
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";

export const history = createHashHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  createRootReducer(history), 
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
