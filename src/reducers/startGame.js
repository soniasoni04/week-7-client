import { START_GAME } from '../components/components2/action' 

export default function startGame(state = [], action = {}) {
    switch (action.type) {
      case START_GAME : 
        console.log("START_GAME_state : ", state, "START_GAME_action.payload :", action.payload)
        // console.log("START_GAME_NEW_STATE", [{action.payload}]);
        return [...state,{...action.payload}]

      default:
        return state
    }
  }

