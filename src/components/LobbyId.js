import React from 'react'
import { connect } from 'react-redux'
import {  createLobbyId } from '../actions/index'
import LobbyIdForm from './LobbyIdForm'


class LobbyId extends React.Component {
    state={
        lobbyId:"",
    

    }
    onChange = event => {
        this.setState({
            lobbyId: event.target.values
        })
    }

    onSubmit = event => {
        console.log('LOBBY ID', this.state.lobbyId)
        event.preventDefault()
        this.props.createLobbyId({
            ...this.state,
            gameId: this.props.gameId
        })
        this.setState({
            lobbyId: "",
        })
    }

    render(){
        return(
            <LobbyIdForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
            />
        )
    }

}


export default connect (
    null,
    {createLobbyId}
)(LobbyId)