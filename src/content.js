import React from 'react';
import ReactDOM from 'react-dom';

import Main from './content/Main';

let reactRootElement = document.createElement('div');

reactRootElement.style.display = 'none';
document.body.appendChild(reactRootElement);

ReactDOM.render(React.createElement(Main), reactRootElement);