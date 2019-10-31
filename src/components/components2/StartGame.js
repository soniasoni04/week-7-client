import React,{Component} from 'react'
import {connect} from 'react-redux'
import { getStartGame } from './action'
import {getRandomNumber} from './action'
import {getResult} from './action'

class StartGame extends Component {
    state={
        game : [],
        randomNum : [],
        result : ""
    }

    componentDidMount(){
        this.props.getStartGame()
        this.props.getRandomNumber()
        this.props.getResult();
    }

    onClick=(e)=>{
        console.log("start game state : ", this.props.player)
        console.log("start game")
        this.setState({
            game: this.props.player
        })
    }
    updateScore=(e) => {
       
        console.log("button is clicked")
        this.setState({
            randomNum : this.props.randomNum
        })


    }
    updateResult =(e)=>{
        console.log("update the result")
        this.setState({
            result : this.props.result
        })
    }

    render(){
      
        return (
            <div>
            <h1> Welcome to random number Game </h1>
            <button onClick={this.onClick}> Start Game </button>
                    <div> {
                        this.state.game.map(player => {
                        return <div>
                        <p> Player 1 : {player.player1} </p>
                        <p> Player 2 : {player.player2} </p>
                        
                        </div>
                    })}
                    <div><br></br>
                        <button onClick={this.updateScore}> Get Random Number </button>
                        <p> {
                            this.state.randomNum.map(num =>{
                                return <div>
                                            <li>scores of player1 : {num.score1}</li>
                                            <li>scores of player2 :{num.score2}</li>
                                        </div>
                                        
                            })
                        }</p>
                    </div><br></br>
                    <div>
                        <button onClick={this.updateResult}> Show me result </button>
                        <h1>{this.state.result.message}</h1>
                        <button onClick={() => this.props.history.push('/')}>Go Back</button>
                    </div>
            
            </div>
            </div>
            
        )
    }
}

function mapStateToProps (state) {
    console.log("state randomNum : ", state.randomNum)
    console.log("state of result : ", state.result)
        return {
            lobby : state.fetchLobby,
            player : state.startGame,
            randomNum : state.randomNum, 
            result : state.result 
        }
}
export default connect(mapStateToProps,{getStartGame, getRandomNumber, getResult})(StartGame)

