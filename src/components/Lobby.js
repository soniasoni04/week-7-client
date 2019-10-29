import React from 'react';
import { connect } from 'react-redux';

import LobbyForm from './LobbyForm';
import Game from './Game';
// import './lobby.css';

const Lobby = (props) => {
	console.log('lobby', props.games);

	const { games } = props;
	const lobbyList =
		games &&
		games.map((game, index) => {
			return <Game name={game.name} key={game.id} gameId={game.id} jwt={props.jwt} index={index}/>;
		});

	return (
		<div>
			<LobbyForm />
			<div className="gameList">{lobbyList}</div>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		games: state.games,
		jwt: state.user.jwt
	};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);