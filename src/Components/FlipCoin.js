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
        nTails : 0
    }

    handleFlip = () => {
        this.setState({
            isfilpStart : true
        })
    }

    render() {
        return (
            <div>
                <h1>Let's Flip A Coin</h1>
                {this.state.isfilpStart && <div><img src={this.props.coins[0].imgSrc} alt={this.props.coins[0].name} /></div>}
                <button onClick={this.handleFlip}>Flip Me!</button>
                <p>Out of {this.state.nFlips}, there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>
            </div>
        );
    }
}

export default FlipCoin;