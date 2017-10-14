import React, {Component} from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import { Button } from 'react-toolbox/lib/button';

class Main extends Component {
    render() {
        return (
            <div>
                {/*<AppBar title='Dalmuti Online' leftIcon='menu'>*/}
                    {/*<Navigation type='horizontal'>*/}
                        {/*<Button icon='inbox' label='inbox' flat/>*/}
                    {/*</Navigation>*/}
                {/*</AppBar>*/}
                This is main page.
            </div>
        );
    }
}

export default Main;