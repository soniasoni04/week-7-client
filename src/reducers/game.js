import { CREATE_GAME } from '../actions/index';

export default function game(state = [], action = {}) {
	switch (action.type) {
		case CREATE_GAME:
			return action.payload;
		default:
			return state;
	}
}