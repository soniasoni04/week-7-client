import { url } from '../constants';
import request from 'superagent';
export const ALL_LOBBIES = 'ALL_LOBBIES'

const baseUrl = 'http://localhost:4000'

function allLobbyRooms(payload) {
  return {
    type: ALL_LOBBIES,
    payload
  }
}

export const getLobby = () => (dispatch, getState) => {
  console.log("getState: ", getState())
  const state = getState()
  console.log("state: ", state)

  // const { images } = state

  if (!getState().length) {
    request.get(`${baseUrl}/lobby`)
      .then(response => {
        console.log("response-body", response.body)
        const action = allLobbyRooms(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}



export const USER_LOGIN = 'USER_LOGIN'
export const CREATE_GAME = 'CREATE_GAME'
export const CREATE_LOBBY = 'CREATE_GAME'
export const CREATE_PLAYER= 'CREATE_PLAYER'
export const CREATE_LOBBYID='CREATE_LOBBYID'


//login action
export const login = (payload) => ({
    type: USER_LOGIN,
    payload
})

//game action
export const game = (payload) =>({
    type: CREATE_GAME,
    payload
})

//lobby action
export const lobbyCreateSuccess = (payload) =>({
    type: CREATE_LOBBY,
    payload
})

export const createLobby = data => (dispatch, getState) => {
    // const token = getState().auth;
    request
      .post(`${url}/lobby`)
      .send(data)
      .then(response => {
        dispatch(lobbyCreateSuccess(response.body));
      })
      .catch(console.error);
   };


   // player action 
   const playerCreateSuccess = player => ({
    type: CREATE_PLAYER,
    payload: player
  });
  
  export const createPlayer = data => (dispatch, getState) => {
  
  
    request
      .put(`${url}/lobby/2`)
      .send(data)
      .then(response => {
        console.log('RESPONSE', response.body)
        dispatch(playerCreateSuccess(response.body));
      })
      .catch(console.error);
  };


  //lobbyId ACtion 
  const lobbyIdCreateSuccess = player => ({
    type: CREATE_LOBBYID,
    payload: player
  });
  
  export const createLobbyId = data => (dispatch, getState) => {
    const token = getState().auth;
  
    request
      .put(`${url}/lobby/:Id`)
      .set("Authorization", `Bearer ${token}`)
      .send(data)
      .then(response => {
        dispatch(lobbyIdCreateSuccess(response.body));
      })
      .catch(console.error);
  };