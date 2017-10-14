import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import RootComponent from './components/root-component';
import './assets/css/index.scss';
import {enter} from "./reducer/gate";

let store = createStore(combineReducers({enter}));
ReactDOM.render(<RootComponent store={store}/>, document.getElementById('root'));