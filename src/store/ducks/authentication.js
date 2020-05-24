export const Types = {
  AUTH_REGISTER_SUCCESS: 'AUTH_REGISTER_SUCCESS',
  AUTH_REGISTER_FAILURE: 'AUTH_REGISTER_FAILURE',
  REQUEST_AUTH_REGISTER: 'REQUEST_AUTH_REGISTER',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
}

const INITIAL_STATE = {
  isLogged: false,
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
      }
    case Types.AUTH_REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case Types.AUTH_LOGOUT:
      return {
        ...state,
        token: '',
        isLogged: false,
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
  requestRegisterAuthentication: (attributes) => ({
    type: Types.REQUEST_AUTH_REGISTER,
    payload: attributes,
  }),
}
