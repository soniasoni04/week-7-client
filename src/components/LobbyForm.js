import React from 'react';
import {connect} from "react-redux"
import {createLobby} from '../actions/index'



class LobbyForm  extends React.Component{
	state={
		lobbyName: ""
	}
	onChange = (event) => {
		this.setState({
			lobbyName: event.target.value
		})
		
	};

	 onSubmit = (event) => {
		 console.log('STATE', this.state)
		event.preventDefault();
		this.props.createLobby(this.state)
		this.setState({
			lobbyName:""
		})
		console.log('new state', this.state.lobbyName)
	};

	render(){
		console.log('new state', this.state.lobbyName)
		return (
			<form onSubmit={this.onSubmit}>
				<input
					type="text"
					name="lobbyName"
					onChange={this.onChange}
					value={this.state.lobbyName}
					placeholder="lobby-name"
				/>
				<button>create lobby</button>
			</form>
		);
	}

	// const [ lobbyName, setLobbyName ] = useState({ name: '' });

	


	
};

export default connect(
	null,
{createLobby}

) (LobbyForm)