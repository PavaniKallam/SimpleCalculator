import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SimpleComponent from './components/simpleComponent/SimpleComponent'

import SharpCalculator from './sharpcalculator/SharpCalculator'

let message = "ram's first react application"

ReactDOM.render(
  <React.StrictMode>
    <SharpCalculator></SharpCalculator>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
