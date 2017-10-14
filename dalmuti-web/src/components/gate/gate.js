import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {enter} from "../../action/gate";
import history from '../../history';
import GateView from './gate-view';

class Gate extends Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onClickEnter = this.onClickEnter.bind(this);
        this.onEnter = this.onEnter.bind(this);

        this.state = {
            name: ''
        }
    }

    onNameChange(name) {
        this.setState({name: name});
    }

    onClickEnter() {
        this.props.actions.enter(this.state.name);
    }

    onEnter({key}) {
        if (key === 'Enter') {
            this.onClickEnter();
            history.push('/main');
        }
    }

    render() {
        return (
            <GateView name={this.state.name}
                      onNameChange={this.onNameChange}
                      onClickEnter={this.onClickEnter}
                      onEnter={this.onEnter}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({enter}, dispatch)
    }
};

export default connect(undefined, mapDispatchToProps)(Gate);