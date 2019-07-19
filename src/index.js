import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import FilmApp from './container/FilmApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FilmApp />, document.getElementById('root'));


serviceWorker.unregister();
