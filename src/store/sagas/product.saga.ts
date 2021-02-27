import { Product } from './../modules/product';
import { FILTER_PRODUCT, GetProductAction, getProductSuccess, SearchProductAction, searchProductSuccess, SEARCH_PRODUCT, FilterProductAction, filterProductSuccess, GET_PRODUCT_BY_ID, GetProductByIdAction, getProductByIdSuccess } from './../actions/product.actions';
import { put, takeEvery } from 'redux-saga/effects';
import { GET_PRODUCT } from '../actions/product.actions';
import axios from 'axios';
import { API } from '../../config';
import { push } from 'connected-react-router';

function* handleGetProduct ({ sortBy, limit, order }: GetProductAction) {
  let response = yield axios.get<Product[]>(`${API}/products`, {
    params: { sortBy, limit, order }
  })
  yield put(getProductSuccess(response.data, sortBy))
}

function* handleSearchProduct ({ payload: { search, category } }: SearchProductAction) {
  console.log(search, category)
  let response = yield axios.get<Product[]>(`${API}/products/search`, {
    params: { search, category }
  })
  yield put(searchProductSuccess(response.data))
}

function* handleFilterProduct (action: FilterProductAction) {
  let response = yield axios.post(`${API}/products/filter`, action.payload)
  yield put(filterProductSuccess(response.data, action.payload.skip))
}

function* handleGetProductById (action: GetProductByIdAction) {
  let response = yield axios.get(`${API}/product/${action.payload.productId}`)
  yield put(getProductByIdSuccess(response.data))
}

export default function* productSaga () {
  yield takeEvery(GET_PRODUCT, handleGetProduct)
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct)
  yield takeEvery(FILTER_PRODUCT, handleFilterProduct)
  yield takeEvery(GET_PRODUCT_BY_ID, handleGetProductById)
}
