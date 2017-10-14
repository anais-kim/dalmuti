import React, {Component} from 'react';
import {Router, Redirect, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import history from './../history'
import Gate from './gate/gate';
import Main from './main/main';
import Game from './game/game';
import NotFound from './not-found/not-found';

export default class RootComponent extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router history={history}>
                    <Switch>
                        <Route path="/gate" component={Gate}/>
                        <Route path="/main" component={Main}/>
                        <Route path="/game" component={Game}/>
                        <Redirect exact from="/" to="/gate" />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}