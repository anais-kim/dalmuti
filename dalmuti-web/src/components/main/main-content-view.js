import React, {Component} from 'react';

export default class MainContentView extends Component {
    render() {
        return (
            <section className="main-content">
                <header className="main-content-header">
                    <h1>WelCome {this.props.name}</h1>
                </header>
            </section>
        )
    }
}