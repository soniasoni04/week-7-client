import React from 'react';
import { connect } from 'react-redux';

import LobbyForm from './LobbyForm';
import Game from './Game';
import Player from './Player';
import LobbyId from './LobbyId'
// import './lobby.css';

class Lobby extends React.Component {
	render () {
		const { lobbies, jwt } = this.props;
		console.log('lobbies test:', lobbies)
		const lobbyList = lobbies.map(game => <Game game={game} key={game.id} />)

		return (
			<div>
				<LobbyForm />
				
				<div className="gameList">{lobbyList}</div>
				<button onClick={() => this.props.history.push('/')}>Go Back</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		lobbies: state.lobbies,
		jwt: state.game
	};
}

export default connect(mapStateToProps)(Lobby);