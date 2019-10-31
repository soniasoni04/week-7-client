import React from 'react'
import { connect } from 'react-redux'

class Gameplay extends React.Component {
    render () {
        const { lobbies, match } = this.props
        console.log('lobbies test:', lobbies)
        const { id } = match.params
        console.log('id test:', id)
        const lobby = lobbies.find(lobby => lobby.id === parseInt(id))

        console.log('lobby test:', lobby)

        return lobby ? lobby.lobbyName : 'Loading...'
    }
}

function mapStateToProps (state) {
    const { jwt, lobbies } = state

    return { jwt, lobbies }
}

export default connect(mapStateToProps)(Gameplay)