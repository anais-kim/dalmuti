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
                           <i className="material-icons navigation-menu__item--icon">input</i>
                           <span className="navigation-menu__item--desc">Sign Out</span>
                       </Link>
                   </li>
                    <li className={`navigation-menu__item ${this.props.activeMenu === 'setting'? 'active':''}`}>
                       <Link to='/setting'>
                           <i className="material-icons navigation-menu__item--icon">settings</i>
                           <span className="navigation-menu__item--desc">Setting</span>
                       </Link>
                   </li>
                    <li className={`navigation-menu__item ${this.props.activeMenu === 'game'? 'active':''}`}>
                        <Link to='/game'>
                            <i className="material-icons navigation-menu__item--icon">play_arrow</i>
                            <span className="navigation-menu__item--desc">Game</span>
                        </Link>
                    </li>
                    <li className={`navigation-menu__item ${this.props.activeMenu === 'main'? 'active':''}`}>
                        <Link to='/main'>
                            <i className="material-icons navigation-menu__item--icon">home</i>
                            <span className="navigation-menu__item--desc">Home</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}