import request from 'superagent'
export const ALL_LOBBIES = 'ALL_LOBBIES'

const baseUrl = 'http://localhost:4000'

function allLobbies(payload) {
  return {
    type: ALL_LOBBIES,
    payload
  }
}

export const getLobby = () => (dispatch, getState) => {
  const { lobbies } = getState()
  
  if (!lobbies.length) {
    request.get(`${baseUrl}/lobby`)
      .then(response => {
        console.log("response-body", response.body)
        const action = allLobbies(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}


export const START_GAME = 'START_GAME'

function startGame(payload) {
  return {
    type: START_GAME,
    payload
  }
}

export const getStartGame = () => (dispatch, getState) => {
  console.log("getState: ", getState())
  const state = getState()
  console.log("state: ", state)

  // const { images } = state

  if (!getState().length) {
    request.get(`${baseUrl}/lobby/8`)
      .then(response => {
        console.log("response-body", response.body)
        const action = startGame(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}



export const GENERATE_RANDOM_NUM = 'GENERATE_RANDOM_NUM'

function randomNumber(payload) {
  return {
    type: GENERATE_RANDOM_NUM,
    payload
  }
}

export const getRandomNumber = () => (dispatch, getState) => {
  console.log("getState: ", getState())
  const state = getState()
  console.log("state: ", state)

  if (!getState().length) {
    request.put(`${baseUrl}/player/8`)
      .then(response => {
        console.log("response-body", response.body)
        const action = randomNumber(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}


export const GET_RESULT = 'GET_RESULT'

function result(payload) {
  return {
    type: GET_RESULT,
    payload
  }
}

export const getResult = () => (dispatch, getState) => {
  console.log("getState: ", getState())
  const state = getState()
  console.log("state: ", state)

  if (!getState().length) {
    request.get(`${baseUrl}/result/8`)
      .then(response => {
        console.log("response-body", response.body)
        const action = result(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}



