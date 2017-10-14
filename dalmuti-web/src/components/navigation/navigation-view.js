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
                   <li className="navigation-menu-item">
                       <Link to='/'>Sign Out</Link>
                   </li>
                    <li className="navigation-menu-item">
                       <Link to='/main'>Setting</Link>
                   </li>
                    <li className="navigation-menu-item">
                        <Link to='/game'>Game</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}