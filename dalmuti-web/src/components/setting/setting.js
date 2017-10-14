import React, {Component} from 'react';
import SettingView from "./setting-view";
import NavigationView from "../navigation/navigation-view";

class Setting extends Component {
    render() {
        return (
            <div className="setting-wrapper">
                <NavigationView activeMenu='setting'/>
                <SettingView/>
            </div>
        )
    }
}

export default Setting;