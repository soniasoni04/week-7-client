import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Gameplay extends React.Component {


    render () {
        const { lobbies, match } = this.props
        console.log('lobbies test:', lobbies)
        const { id } = match.params
        console.log('id test:', id)
        const lobby = lobbies.find(lobby => lobby.id === parseInt(id))

        console.log('lobby test:', lobby)

        
         
        return ( <div>
            <p>{
                lobby ?  lobby.id : 'Loading...' 
            }</p>
            <p> <Link to="/lobby/:lobbyId/join">Join Lobby</Link> </p>
            </div>
           

        )
        
           
        
    }
}

function mapStateToProps (state) {
    const { jwt, lobbies } = state

    return { jwt, lobbies }
}

export default connect(mapStateToProps)(Gameplay)