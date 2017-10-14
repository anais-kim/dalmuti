import React, {Component} from 'react';

export default class ContentHeader extends Component {
    render() {
        return (
            <header className="content-header">
                <h1>{this.props.title}</h1>
            </header>
       )
    }
}