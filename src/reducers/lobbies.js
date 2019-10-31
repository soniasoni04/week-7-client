import { ALL_LOBBIES, CREATE_LOBBY } from '../actions/index';

export default function lobby(state = [], action = {}) {
    console.log('REDUCER VALUE', state, action.payload)
	switch (action.type) {
		case ALL_LOBBIES:
			return action.payload
		case CREATE_LOBBY:
			return [...state, action.payload]
		default:
			return state;
	}
}