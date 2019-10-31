import React from 'react';
import { connect } from 'react-redux';
import { getLobby } from '../actions'


import LobbyForm from './LobbyForm';
import Game from './Game';
import Player from './Player';
import LobbyId from './LobbyId'
// import './lobby.css';

class Lobby extends React.Component {
	componentDidMount() {
        this.props.getLobby()
    }

	render () {
		const { lobbies, jwt } = this.props;
		console.log('lobbies test:', lobbies)
		const lobbyList = lobbies.map((game, index) => {
			return <Game name={game.name} key={game.id} gameId={game.id} jwt={jwt} index={index}/>;
		});

		return (
			<div>
				<LobbyForm />
				
				<div className="gameList">{lobbyList}</div>
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

const mapDispatchToProps = { getLobby };

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);