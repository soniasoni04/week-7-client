import { ALL_LOBBY_ROOMS } from '../components/components2/action' 

export default function fetchLobby(state = [], action = {}) {
    switch (action.type) {
      case ALL_LOBBY_ROOMS : 
        console.log("ALL_LOBBY_ROOMS   state : ", state, "action.payload :", action.payload)
        console.log("ALL_LOBBY_ROOMS NEW STATE", [...state, ...action.payload]);
        return [...state, ...action.payload]

      default:
        return state
    }
  }

