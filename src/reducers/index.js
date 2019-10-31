import { combineReducers } from 'redux'
import user from './user'
import lobbies from './lobbies'
import startGame from './startGame'
import randomNum from './randomNum'
import result from './getResult'

export default combineReducers({
    user,
    lobbies,
    startGame,
    randomNum,
    result
})