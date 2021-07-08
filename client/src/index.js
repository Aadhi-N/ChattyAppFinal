// Application entrypoint.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Load application styles
require('./styles/application.scss');

ReactDOM.render(<App />, document.getElementById('root'));
