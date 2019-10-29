export const USER_LOGIN = 'USER_LOGIN'
export const CREATE_GAME = 'CREATE_GAME'


export const login = (payload) => ({
    type: USER_LOGIN,
    payload
})


export const game = (payload) =>({
    type: CREATE_GAME,
    payload
})