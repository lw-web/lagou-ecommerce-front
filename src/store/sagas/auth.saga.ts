import { SIGNIN, SigninAction, signinFail, signinSuccess } from './../actions/auth.action';
import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import { API } from '../../config'
import { SIGNUP, SignupAction, signupSuccess, signupFail } from '../actions/auth.action'

function* handleSignup(action: SignupAction) {
  try {
    yield axios.post(`${API}/signup`, action.payload)
    yield put(signupSuccess())
  } catch (error) {
    yield put(signupFail(error.response.data.error))
  }
}

function* handleSignin(action: SigninAction) {
  try {
    let res = yield axios.post(`${API}/signin`, action.payload)
    localStorage.setItem('jwt', JSON.stringify(res.data))
    yield put(signinSuccess())
  } catch (error) {
    yield put(signinFail(error.response.data.error))
  }
}

export default function* authSaga () {
  yield takeEvery(SIGNUP, handleSignup)
  yield takeEvery(SIGNIN, handleSignin)
}
