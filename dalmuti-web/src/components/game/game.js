import React, {Component} from 'react';
import MyCard from './my-card.js';
import './game.scss';

class Game extends Component {
    render() {
        return (
            <div className="game">
                {/*<Others />*/}
                {/*<CurrentCard />*/}
                <MyCard />
            </div>
        );
    }
}

export default Game;