import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './pages/Root.jsx';
import Firebase, { FirebaseContext } from './components/Firebase';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Root />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
