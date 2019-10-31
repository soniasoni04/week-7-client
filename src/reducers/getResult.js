import { GET_RESULT } from '../components/components2/action' 

export default function result(state = [], action = {}) {
    switch (action.type) {
      case GET_RESULT : 
        console.log("GET_RESULT   state : ", state, "GET_RESULT_action.payload :", action.payload)
        return action.payload

      default:
        return state
    }
  }

