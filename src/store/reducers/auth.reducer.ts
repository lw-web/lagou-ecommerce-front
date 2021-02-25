import { 
  AuthUnionType, 
  SIGNUP, 
  SIGNUP_SUCCESS, 
  SIGNUP_FAIL, 
  RESET_SIGNUP,
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL
} from './../actions/auth.action';

export interface AuthState {
  signup: {
    loaded: boolean
    success: boolean
    message: string
  }
  signin: {
    loaded: boolean
    success: boolean
    message: string
  }
}

const intialState: AuthState = {
  signup: {
    loaded: false,
    success: false,
    message: ''
  },
  signin: {
    loaded: false,
    success: false,
    message: ''
  }
}

export default function authReducer (state = intialState, action: AuthUnionType): AuthState {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signup: {
          loaded: false,
          success: false,
          message: ''
        }
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          loaded: true,
          success: true,
          message: ''
        }
      }
    case SIGNUP_FAIL:
      return {
        ...state,
        signup: {
          loaded: true,
          success: false,
          message: action.message
        }
      }
    case RESET_SIGNUP:
      return {
        ...state,
        signup: {
          loaded: false,
          success: false,
          message: ''
        }
      }
    case SIGNIN:
      return {
        ...state,
        signin: {
          loaded: false,
          success: false,
          message: ''
        }
      }
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signin: {
          loaded: true,
          success: true,
          message: ''
        }
      }
    case SIGNIN_FAIL:
      return {
        ...state,
        signin: {
          loaded: true,
          success: false,
          message: action.message
        }
      }
    default:
      return state
  }
}
