import React, {Component} from 'react';
import GateHeader from './gate-header'
import GateEnter from './gate-enter'
import './gate.css';

class Gate extends Component {
    render() {
        return (
            <div className="gate">
                <GateHeader />
                <GateEnter />
            </div>
        );
    }
}

export default Gate;