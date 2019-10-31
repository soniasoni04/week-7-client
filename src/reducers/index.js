import { combineReducers } from 'redux'
import user from './user'
import game from './game'
import lobby from './lobby'
import fetchLobby from './reducer_fetch_lobby'
import startGame from './startGame'
import randomNum from './randomNum'
import result from './getResult'

export default combineReducers({
    user,
    game,
    lobby,
    fetchLobby,
    startGame,
    randomNum,
    result
  
})