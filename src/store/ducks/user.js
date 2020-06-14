export const Types = {
  ADD_USER: 'ADD_USER',
  UPDATE_USER: 'UPDATE_USER',
  RESET_USER: 'RESET_USER',
  REQUEST_UPDATE_USER: 'REQUEST_UPDATE_USER',
}

const INITIAL_STATE = {
  user: {},
  isLoading: true,
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      }
    case Types.UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      }
    case Types.RESET_USER:
      return {
        ...state,
      }

    default:
      return state
  }
}

export const Creators = {
  addUser: (payload) => ({
    type: Types.ADD_USER,
    payload,
  }),
  updateUser: (payload) => ({
    type: Types.UPDATE_USER,
    payload,
  }),
  resetUser: () => ({
    type: Types.RESET_USER,
  }),
  requestUpdateUser: (payload) => ({
    type: Types.REQUEST_UPDATE_USER,
    payload,
  }),
}
