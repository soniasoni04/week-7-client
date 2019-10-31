import React from 'react';
import { Link } from 'react-router-dom';
import { url } from '../constants';
import request from 'superagent';
import { connect } from 'react-redux';

const Game = (props) => {
	const { lobbyName, id, jwt, Users } = props.game;

	const addUserToGame = () => {
		console.log('user has been added')
		
		request
			.put(`${url}/join/${id}`)
			.set('Authorization', `Bearer ${jwt}`)
			.then((res) => console.log(res))
			.catch(console.error);
	};

	const renderButton = () => {
		if (!props.jwt) {
			return <p>login to join</p>;
		}

		if (Users.length >= 2) {
			return 'full';
		} else {
			return (
				<Link to={`/game/${id}`}>
					{lobbyName}
				</Link>
			);
		}
	};

	return (
		<div className="game">
			<h2>{lobbyName}</h2>

			{renderButton()}

			{Users && <p> players: <b>{Users.length}</b></p>}
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