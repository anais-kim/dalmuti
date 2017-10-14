import React, {Component} from 'react';
import PropType from 'prop-types';
import ContentHeader from "../content/content-header";
import {Link} from "react-router-dom";

export default class MainView extends Component {
    constructor(props) {
        super(props);
        this.title = 'Hello, '+props.name;
    }

    render() {
        return (
            <section className="content-wrapper">
                <ContentHeader title={this.title}/>
                <article className={`introduction--stranger ${this.props.name === 'Stranger'? '':'hidden'}`}>
                    <p>
                        Welcome to Dalmuti Online.<br/>
                        Please <Link to='/gate'>Sign In</Link> first.
                    </p>
                </article>
            </section>
        )
    }
}

MainView.propTypes = {
    name: PropType.string.isRequired
}
