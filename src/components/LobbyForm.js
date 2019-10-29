import React, { useState } from 'react';
import request from 'superagent';
import { url } from '../constants';
import Lobby from './Lobby';

const LobbyForm = () => {
	const [ lobbyName, setLobbyName ] = useState({ name: '' });

	const onChange = (event) => {
		setLobbyName({
			...lobbyName,
			[event.target.name]: event.target.value
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
    request
      .post(`${url}/lobby`)
      .send(Lobby)
      .catch(console.error);
		setLobbyName({ name: '' });
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				name="name"
				onChange={onChange}
				value={lobbyName.name}
				placeholder="lobby-name"
			/>
			<button>create lobby</button>
		</form>
	);
};

export default LobbyForm;