import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import { API } from '../../config'
import { SIGNUP, SignupAction, signupSuccess, signupFail } from '../actions/auth.action'

function* handleSignup(action: SignupAction) {
  console.log('signup request')
  try {
    let res = yield axios.post(`${API}/signup`, action.payload)
    yield put(signupSuccess())
  } catch (error) {
    yield put(signupFail(error.response.data.error))
  }
}

export default function* authSaga () {
  yield takeEvery(SIGNUP, handleSignup)
}
