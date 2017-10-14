import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class NavigationView extends Component {
    render() {
        return (
            <nav className='navigation'>
                <header className="navigation-logo">
                    <Link to='/main'>Dalmuti Online</Link>
                </header>
                <ul className="navigation-menu">
                   <li className="navigation-menu__item">
                       <Link to='/'>
                           {/*<i class="material-icons navigation-icons">input</i>*/}
                           Sign Out
                       </Link>
                   </li>
                    <li className={`navigation-menu__item ${this.props.activeMenu === 'setting'? 'active':''}`}>
                       <Link to='/main'>
                           {/*<i class="material-icons navigation-icons">settings</i>*/}
                           Setting
                       </Link>
                   </li>
                    <li className={`navigation-menu__item ${this.props.activeMenu === 'game'? 'active':''}`}>
                        <Link to='/game'>
                            {/*<i class="material-icons navigation-icons">play_circle_filled</i>*/}
                            Game
                        </Link>
                    </li>
                    <li className={`navigation-menu__item ${this.props.activeMenu === 'main'? 'active':''}`}>
                        <Link to='/main'>
                            {/*<i class="material-icons navigation-icons">home</i>*/}
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}