import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavigationView from "../navigation/navigation-view";
import MainView from "./main-view";

class Main extends Component {
    constructor(props) {
        super(props);

        const {name} = this.props;
        this.name = name === ''? 'Stranger':name;
    }

    render() {
        return (
            <div className='main-wrapper'>
                <NavigationView activeMenu='main'/>
                <MainView name={this.name}/>
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