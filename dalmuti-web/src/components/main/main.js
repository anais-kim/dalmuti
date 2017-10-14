import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavigationView from "../navigation/navigation-view";
import MainContentView from "./main-content-view";

class Main extends Component {
    render() {
        return (
            <div className='main-wrapper'>
                <NavigationView />
                <MainContentView name={this.props.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let {enter: {name}} = state;
    name = name || '';
    return {name};
}

export default connect(mapStateToProps, undefined)(Main);