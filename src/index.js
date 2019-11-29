import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Componentes
import App from './assets/js/App.js';
import ApiWeather from './assets/js/ApiWeather';
import ApiParking from './assets/js/ApiParking';
import ErrorNotFound from './assets/js/ErrorNotFound';

import * as serviceWorker from './serviceWorker';

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/apiWeather' component={ApiWeather}/>
                <Route path='/apiParking' component={ApiParking}/>
                <Route component={ErrorNotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<RouterApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
