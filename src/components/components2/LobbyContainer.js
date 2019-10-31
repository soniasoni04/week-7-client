import React, { Component } from 'react'
import { getLobby } from './action'
import { connect } from 'react-redux'


class LobbyContainer extends Component {
    state = {
        lobby: []
    }
    componentDidMount() {
        this.props.getLobby()
    }
    onClick = (e) => {
        console.log("lobby details : ", this.props.lobby)
        console.log("hello from onclick")
        this.setState({
            lobby: this.props.lobby
        })
    }
    render() {
        //console.log("lobby details : ", this.props.lobby)
        // const {lobby} = this.props
        //console.log("lobby:", lobby)
        return (
            <div>
                <h1>Find the complete status of the Lobby</h1>
                <button onClick={this.onClick}> Find the status of Lobby</button>
                {
                    this.state.lobby.map(lobby => {
                        return (<div>
                            <h2>Lobby Id : {lobby.id} </h2>
                            <p>Lobby Name : {lobby.lobbyName}</p>
                            <p> Name of Player 01 : {lobby.player1}</p>
                            <p> Name of player 02 : {lobby.player2}</p>
                            <p> status of the Lobby : <b> {lobby.status}</b></p>

                        </div>)
                    })
                }

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        lobby: state.fetchLobby
    }
}
export default connect(mapStateToProps, { getLobby })(LobbyContainer)