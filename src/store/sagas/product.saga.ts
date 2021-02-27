import { Product } from './../modules/product';
import { GetProductAction, getProductSuccess, SearchProductAction, searchProductSuccess, SEARCH_PRODUCT, SEARCH_PRODUCT_SUCCESS } from './../actions/product.actions';
import { put, takeEvery } from 'redux-saga/effects';
import { GET_PRODUCT } from '../actions/product.actions';
import axios from 'axios';
import { API } from '../../config';

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

export default function* productSaga () {
  yield takeEvery(GET_PRODUCT, handleGetProduct)
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct)
}
