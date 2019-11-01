import {CREATE_TURN_UPDATE} from '../actions/index'


export default function turnUpdate (state = '', action = {}) {
    switch (action.type) {
      case CREATE_TURN_UPDATE:
        return  action.payload
      default:
        return state
    }
  }