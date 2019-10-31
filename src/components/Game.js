import React from 'react';
import { Link } from 'react-router-dom';
import { url } from '../constants';
import request from 'superagent';
import { connect } from 'react-redux';

const Game = (props) => {
	const { name, gameId, jwt, index } = props;
	// console.log('users:', props.games[index].Users);

	const addUserToGame = () => {
    console.log('user has been added')
		request
			.put(`${url}/join/${gameId}`)
			.set('Authorization', `Bearer ${jwt}`)
			.then((res) => console.log(res))
			.catch(console.error);
	};

	const renderButton = () => {
		if (!props.jwt) {
			return <p>login to join</p>;
		}
		if (props.lobbies[index].Users.length >= 2) {
			return 'full';
		} else {
			return (
				<Link to={`/game/${gameId}`}>
					<button onClick={addUserToGame}>join</button>
				</Link>
			);
		}
	};

	return (
		<div className="game">
			<h2>{name}</h2>
			{renderButton()}
			{props.lobbies[index].Users ? (
				<p>
					players: <b>{props.lobbies[index].Users.length}</b>
				</p>
			) : (''
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		jwt: state.user.jwt,
		lobbies: state.lobbies
	};
};

export default connect(mapStateToProps)(Game);