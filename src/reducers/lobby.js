import { CREATE_LOBBY } from '../actions/index';

export default function lobby(state = [], action = {}) {
    console.log('REDUCER VALUE', state, action.payload)
	switch (action.type) {
		case CREATE_LOBBY:
			return action.payload;
		default:
			return state;
	}
}