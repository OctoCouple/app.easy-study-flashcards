export const Types = {
  ADD_USER: 'ADD_USER',
}

const INITIAL_STATE = {
  user: {},
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER:
      return {
        ...state,
        user: action.payload,
      }

    default:
      return state
  }
}

export const Creators = {
  addUser: (payloadUser) => ({
    type: Types.ADD_USER,
    payload: payloadUser,
  }),
}
