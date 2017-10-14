import React, {Component} from 'react';
import GateView from './gate-view';

class Gate extends Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onClickEnter = this.onClickEnter.bind(this);

        this.state = {
            name: ''
        }
    }

    onNameChange(name) {
        this.setState({name: name});
    }

    onClickEnter() {
        alert(this.state.name);
    }

    render() {
        return (
            <GateView name={this.state.name}
                      onNameChange={this.onNameChange}
                      onClickEnter={this.onClickEnter}/>
        );
    }
}

export default Gate;