import {USER_LOGIN} from '../actions/index'


export default function user (state = {}, action = {}) {
    switch (action.type) {
      case USER_LOGIN:
        return { jwt: action.payload }
      default:
        return state
    }
  }