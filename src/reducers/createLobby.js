import {CREATE_LOBBYID} from '../actions/index'


export default function createLobby (state = {}, action = {}) {
    switch (action.type) {
      case CREATE_LOBBYID:
        return  action.payload
      default:
        return state
    }
  }