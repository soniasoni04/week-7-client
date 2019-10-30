import { combineReducers } from 'redux'
import user from './user'
import game from './game'
import lobby from './lobby'

export default combineReducers({
    user,
    game,
    lobby
  
})