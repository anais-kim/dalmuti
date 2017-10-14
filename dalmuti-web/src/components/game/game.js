import React, {Component} from 'react';
import MyCard from './my-card.js';
import './game.scss';
import NavigationView from "../navigation/navigation-view";

class Game extends Component {
    render() {
        return (
            <div>
                <NavigationView activeMenu='game'/>
                <div className="game-wrapper">
                    {/*<Others />*/}
                    {/*<CurrentCard />*/}
                    <MyCard />
                </div>
            </div>
        );
    }
}

export default Game;