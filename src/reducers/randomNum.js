import { GENERATE_RANDOM_NUM } from '../components/components2/action'

export default function randomNum(state = [], action = {}) {
  switch (action.type) {
    case GENERATE_RANDOM_NUM:
      //console.log("GENERATE_RANDOM_NUM state : ", state, "GENERATE_RANDOM_NUM_action.payload :", action.payload)
      console.log("NEW_STATE", [...state, action.payload]);
      return [...state, action.payload]

    default:
      return state
  }
}

