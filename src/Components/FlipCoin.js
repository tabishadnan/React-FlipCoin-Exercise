import React, { Component } from 'react';

class FlipCoin extends Component {

    static defaultProps = {
        coins : [
            {name : "heads" , imgSrc : "https://tinyurl.com/react-coin-heads-jpg"},
            {name : "tails" , imgSrc : "https://tinyurl.com/react-coin-tails-jpg"}
        ]
    }

    state = {
        isfilpStart : false,
        nFlips : 0,
        nHeads : 0,
        nTails : 0,
        newCoin : null
    }

    handleFlip = () => {
        
        this.setState({
            isfilpStart : true,
            newCoin : this.props.coins[Math.floor(Math.random() * this.props.coins.length)]
        })

        {this.state.isfilpStart && this.setState({
            nFlips : this.state.nFlips + 1
        })}

        {this.state.isfilpStart && this.state.newCoin.name === "heads" && this.setState({
            nHeads : this.state.nHeads + 1
        })}

        {this.state.isfilpStart && this.state.newCoin.name === "tails" && this.setState({
            nTails : this.state.nTails + 1
        })}


    }

    render() {
        return (
            <div>
                <h1>Let's Flip A Coin</h1>
                {this.state.isfilpStart && <div><img src={this.state.newCoin.imgSrc} /></div>}
                <button onClick={this.handleFlip}>Flip Me!</button>
                <p>Out of {this.state.nFlips}, there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>
            </div>
        );
    }
}

export default FlipCoin;