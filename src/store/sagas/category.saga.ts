import { getCategorySuccess } from './../actions/category.action';
import { Category } from './../modules/category';
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { API } from '../../config';
import { GET_CATEGORY } from '../actions/category.action';

function* handleGetCategory () {
  let response = yield axios.get<Category>(`${API}/categories`)
  yield put(getCategorySuccess(response.data))
}

export default function* categorySaga () {
  yield takeEvery(GET_CATEGORY, handleGetCategory)
}
