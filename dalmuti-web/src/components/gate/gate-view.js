import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Input} from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';

export default class GateView extends Component {
    render() {
        const {name, onNameChange, onClickEnter} = this.props;

        return (
            <div className="gate-wrapper">
                <div className="gate">
                    <header className="gate-header">
                        <h1 className="gate-header__title">THE GREAT DALMUTI</h1>
                    </header>
                    <div className="gate-enter">
                        <div className="gate-enter__input">
                            <Input type="text" name='name' label='Enter your name' value={name}
                                   onChange={onNameChange} maxLength={16} />
                        </div>
                        <div className="gate-enter__button">
                            <Button label='Enter' raised primary onClick={onClickEnter}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

GateView.propTypes = {
    name: PropTypes.string,
    onNameChange: PropTypes.func.isRequired,
    onClickEnter: PropTypes.func.isRequired
}