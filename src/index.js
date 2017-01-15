import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Data from './Data';
import './index.css';

ReactDOM.render(
  <App {...Data}/>,
  document.getElementById('root')
);
