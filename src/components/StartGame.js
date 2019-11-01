import React, { Component } from 'react'
import { connect } from 'react-redux'


class StartGame extends Component {

    source = new EventSource(`${url}/Stream`)

    state = {
        stream: [],
        score: 0,
        result : ""
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.source.onmessage =(e)=>{ //onUpdate????
            console.log("Got a updated event ! ", event)
            const stream = JSON.parse(event.data)
            this.setState({
                stream
            })
            this.props.updateScore(stream)
            this.props.updateResult(stream)
        }

    }

    onClick = (e) => {
        console.log("start game")
        console.log("get the user details from user table")
        this.setState({
            stream: this.props.stream
        })
    }

    updateScore = (e) => {
        console.log("button is clicked")
        request
            .put(`${url}/playGame `) // i need to update user/table/score and update lobby/table with turn
            .send({ score: this.state.score })
    }

    updateResult = (e) => {
        console.log("update the result")
        this.setState({
            result : this.props.result
        })

    }

    render() {


        return (
            <div>
                <h1> Welcome to random number Game </h1>
                <button onClick={this.onClick}> Start Game </button>
                <div> {
                    this.state.stream.map(stream => {
                        return <div>
                            {this.state.stream.map(user => <li>{user.id} </li>)}
                        </div>
                    })}
                    <div><br></br>
                        <button onClick={this.updateScore}> Get Random Number </button>
                        <p> {
                            this.state.stream.map(stream => {
                            return <div>
                                        <li>scores of user1 : {stream.score}</li>
                                        <li>scores of user2 : {stream.score} </li>
                                    </div>
                            })
                        }</p>
                    </div>
                    <div>
                        <button onClick={this.updateResult}> Show me result </button>
                        <h1>{this.state.result}</h1>
                    </div>

                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { jwt, stream , result} = state

    return { jwt, stream , result}
}
export default connect(mapStateToProps)(StartGame)

