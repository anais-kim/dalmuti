import React, {Component} from 'react';

class GateEnter extends Component {
    render() {
        return (
            <div className="gate-enter">
                <input type="text"
                       className="gate-enter-input-username"
                        placeholder={this.props.username.desc}/>
                <button className="gate-enter-btn">ENTER</button>
            </div>
        );
    }
}

GateEnter.defaultProps = {
    username: {
        desc: 'enter your name'
    }
}

export default GateEnter;