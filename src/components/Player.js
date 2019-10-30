import React from 'react'
import { connect } from 'react-redux'
import {  createPlayer } from '../actions/index'
import PlayerForm from './PlayerForm'


class Player extends React.Component {
    state={
        player:"",
    

    }
    onChange = event => {
        this.setState({
            player: event.target.values
        })
    }

    onSubmit = event => {
        console.log(this.state.player)
        event.preventDefault()
        this.props.createPlayer({
            ...this.state,
            gameId: this.props.gameId
        })
        this.setState({
            player: "",
        })
    }

    render(){
        return(
            <PlayerForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state.player}
            />
        )
    }

}


export default connect (
    null,
    {createPlayer}
)(Player)