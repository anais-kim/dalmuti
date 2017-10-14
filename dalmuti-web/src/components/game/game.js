import React, {Component} from 'react';
import MyCard from './my-card.js';
import NavigationView from "../navigation/navigation-view";
import Chat from "./chat";

class Game extends Component {
    render() {
        return (
            <div>
                <NavigationView activeMenu='game'/>
                <div className="game-wrapper">
                    <Chat />
                    {/*<MyCard />*/}
                </div>
            </div>
        );
    }
}

export default Game;