import React, {Component} from 'react';
import MyCard from './my-card.js';
import NavigationView from "../navigation/navigation-view";

class Game extends Component {
    render() {
        return (
            <div>
                <NavigationView activeMenu='game'/>
                <div className="game-wrapper">
                    <MyCard />
                </div>
            </div>
        );
    }
}

export default Game;