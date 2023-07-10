// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';

import ReactDOM from 'react-dom';
import React from 'react';
import App from './react/index';



ReactDOM.render(<App />, document.getElementById('root'));
