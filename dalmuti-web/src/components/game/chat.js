import React, {Component} from 'react';
import {init, chat, leave} from "../../socket/index";

class Chat extends Component {
    constructor(props) {
        super(props);
        init();
    }

    render() {
        return (
            <div className="chatMessage"></div>
        )
    }
}

export default Chat;