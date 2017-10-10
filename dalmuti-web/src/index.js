import React from 'react';
import ReactDOM from 'react-dom';
import Gate from './components/gate/gate';

const title = 'Dalmuti Online';

const rootElement = document.getElementById('root');
ReactDOM.render(<Gate title={title}/>, rootElement);