import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import LandingPage from './pages/LandingPage/LandingPage';

if (process.env.BROWSER) {
    require('../browser/styles/scss/all.scss');
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={LandingPage} />
    </Router>,
    document.getElementById('content')
);
