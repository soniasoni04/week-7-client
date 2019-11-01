import { url } from '../constants';
import request from 'superagent';
export const ALL_LOBBIES = 'ALL_LOBBIES'

const baseUrl = 'http://localhost:4000'

export function allLobbyRooms(payload) {
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
export const CREATE_LOBBY = 'CREATE_LOBBY'
export const CREATE_LOBBYID='CREATE_LOBBYID'

// export const CREATE_PLAYER= 'CREATE_PLAYER'


//login action
export const login = (payload, history) => {
    console.log('payload test:', payload)
    console.log('history test:', history)
    history.push('/lobby')

    return {
        type: USER_LOGIN,
        payload
    }
}

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
     const state = getState(); //?????????/
     console.log("state", state.user.jwt  )
    request
      .post(`${url}/lobby`)
      .send(data)
      .set('authorization', `Bearer ${state.user.jwt}`)
      .then(response => {
        dispatch(lobbyCreateSuccess(response.body));
      })
      .catch(console.error);
   };


  //  // player action 
  //  const playerCreateSuccess = player => ({
  //   type: CREATE_PLAYER,
  //   payload: player
  // });
  
  // export const createPlayer = data => (dispatch, getState) => {
  
  
  //   request
  //     .put(`${url}/lobby/2`)
  //     .send(data)
  //     .then(response => {
  //       console.log('RESPONSE', response.body)
  //       dispatch(playerCreateSuccess(response.body));
  //     })
  //     .catch(console.error);
  // };


  //lobbyId ACtion 
  const lobbyIdCreateSuccess = (id) => ({
    type: CREATE_LOBBYID,
    payload: id
  });
  
  export const createLobbyId = data => (dispatch, getState) => {
    const state = getState()
    const token = getState().user.jwt;
    console.log("token", token)
    console.log("data,  must be lobbyID :", data)
  
    request
      .put(`${url}/lobby/${data.lobbyId}/join`)
      .set('authorization', `Bearer ${state.user.jwt}`)   // set function 
      .send(parseInt(data.lobbyId))
      .then(response => {
        dispatch(lobbyIdCreateSuccess(response.body));
      })
      .catch(console.error);
  };


  //Turn update action  in User table  

  export const CREATE_TURN_UPDATE = 'CREATE_TURN_UPDATE'

  const turnUpdate = (payload) => ({
    type: CREATE_TURN_UPDATE,
    payload: payload
  });
  
  export const turnUpdateUser = (turn) => (dispatch, getState) => {
    const state = getState()
    const token = getState().user.jwt;
    console.log("token", token)
    console.log("TURN value :", turn)
  
    request
      .put(`${url}/lobby/${turn}/start`)
      .set('authorization', `Bearer ${state.user.jwt}`)   // set function 
      .send(parseInt(turn))
      .then(response => {
        dispatch(turnUpdate(response.body));
      })
      .catch(console.error);
  };