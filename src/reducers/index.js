import { combineReducers } from 'redux'
import user from './user'
import lobbies from './lobbies'
import createLobby from './createLobby'
//import startGame from './startGame'
//import randomNum from './randomNum'
//import result from './getResult'

export default combineReducers({
    user,
    lobbies,
    createLobby,

    //startGame,
    //randomNum,
    //result
})