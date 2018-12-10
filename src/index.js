import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Callback from './Callback';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />

      <Route exact path="/callback" component={Callback} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
