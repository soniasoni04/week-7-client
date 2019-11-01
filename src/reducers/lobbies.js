import { ALL_LOBBIES,  } from '../actions/index';

export default function lobby(state = [], action = {}) {
    console.log('REDUCER VALUE', state, action.payload)
	switch (action.type) {
		case ALL_LOBBIES:
			return action.payload
		default:
			return state;
	}
}