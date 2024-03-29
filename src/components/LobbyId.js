import React from 'react'
import { connect } from 'react-redux'
import { createLobbyId } from '../actions/index'
import LobbyIdForm from './LobbyIdForm'


class LobbyId extends React.Component {
    state={
        lobbyId:"",
    
    }
    onChange = event => {
        console.log("lobby id : ", event.target.value )
        this.setState({
            lobbyId : event.target.value
        })
    }
    
    onSubmit = event => {

        console.log('LOBBY ID', this.state.lobbyId)
        event.preventDefault()
        this.props.createLobbyId({
            ...this.state,
        })
        this.setState({
            lobbyId: "",
        })
    }

    render(){
        console.log("props of lobbyid",this.props)
        if(!this.props.user.jwt  && this.props.user)  {
			this.props.history.push("/login")
        }
        console.log()
        return(
            <div>
                <LobbyIdForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state.lobbyId}
                />
                

            </div>
            
        )
    }

}


function mapStateToProps(state) {
	console.log("mstp", state)
	return {
		lobbies: state.lobbies,
		user: state.user
	};
}

export default connect (mapStateToProps,{createLobbyId})(LobbyId)