import React from 'react';
import { connect } from 'react-redux';

import LobbyForm from './LobbyForm';
import Game from './Game';
import Player from './Player';
import LobbyId from './LobbyId'

// import './lobby.css';

class Lobby extends React.Component {
	render () {
		const { lobbies, user } = this.props;
		console.log('lobbies test:', lobbies)
		const lobbyList = lobbies.map(game => <Game game={game} key={game.id} />)

		console.log("render of lobby" ,this.props)
		if(!this.props.user.jwt  && this.props.user)  {
			this.props.history.push("/login")
		}
		return (
			<div>
			<LobbyForm />
				
				<div className="gameList">{lobbyList}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log("mstp", state)
	return {
		lobbies: state.lobbies,
		user: state.user  // having jwt
	};
}

export default connect(mapStateToProps)(Lobby);