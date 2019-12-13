import React from 'react';
import ReactDOM from 'react-dom';

import Main from './popup/Main';

let componentRoot = document.querySelector('.repository-content .subnav:nth-child(2)');

ReactDOM.render(React.createElement(Main), componentRoot);