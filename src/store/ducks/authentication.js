export const Types = {
  AUTH_REGISTER_SUCCESS: 'AUTH_REGISTER_SUCCESS',
  AUTH_REGISTER_FAILURE: 'AUTH_REGISTER_FAILURE',
  REQUEST_AUTH_REGISTER: 'REQUEST_AUTH_REGISTER',
  REQUEST_AUTH_LOGIN: 'REQUEST_AUTH_LOGIN',
  REQUEST_STORAGE_TOKEN: 'REQUEST_STORAGE_TOKEN',
  REQUEST_FORGOT_PASSWORD: 'REQUEST_FORGOT_PASSWORD',
  SET_STORAGE_TOKEN: 'SET_STORAGE_TOKEN',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
  REQUEST_AUTH_LOGOUT: 'REQUEST_AUTH_LOGOUT',
  AUTH_DISMISS_ERROR: 'AUTH_DISMISS_ERROR',
}

const INITIAL_STATE = {
  isLogged: false,
  isLoading: true,
  token: '',
  error: '',
}

export default function authentication(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLogged: true,
        isLoading: false,
      }
    case Types.AUTH_REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case Types.SET_STORAGE_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        isLogged: action.payload.isLogged,
        isLoading: false,
      }
    case Types.AUTH_LOGOUT:
      return {
        ...state,
        token: '',
        isLogged: false,
        isLoading: false,
      }
    case Types.AUTH_DISMISS_ERROR:
      return {
        ...state,
        error: '',
      }

    default:
      return state
  }
}

export const Creators = {
  registerAuthenticationSuccess: (token) => ({
    type: Types.AUTH_REGISTER_SUCCESS,
    payload: token,
  }),
  registerAuthenticationFailure: (error) => ({
    type: Types.AUTH_REGISTER_FAILURE,
    payload: error,
  }),
  logoutAuthentication: () => ({
    type: Types.AUTH_LOGOUT,
  }),
  requestLogoutAuthentication: () => ({
    type: Types.REQUEST_AUTH_LOGOUT,
  }),
  requestRegisterAuthentication: (attributes) => ({
    type: Types.REQUEST_AUTH_REGISTER,
    payload: attributes,
  }),
  requestLoginAuthentication: (attributes) => ({
    type: Types.REQUEST_AUTH_LOGIN,
    payload: attributes,
  }),
  requestStorageToken: () => ({
    type: Types.REQUEST_STORAGE_TOKEN,
  }),
  setStorageToken: (payload) => ({
    type: Types.SET_STORAGE_TOKEN,
    payload,
  }),
  authDismissError: () => ({
    type: Types.AUTH_DISMISS_ERROR,
  }),
  requestForgotPassword: (payload) => ({
    type: Types.REQUEST_FORGOT_PASSWORD,
    payload,
  }),
}
