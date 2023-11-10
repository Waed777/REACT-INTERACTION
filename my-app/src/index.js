import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOMMini from './ReactDOMMini'; // Commentez cette ligne si vous ne l'utilisez pas
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Si vous ne l'utilisez pas, vous pouvez également commenter cette ligne
// ReactDOMMini.render(<App />, document.getElementById('root'));

// Si vous voulez que votre application fonctionne hors ligne et charge plus rapidement, vous pouvez changer
// unregister() en register() ci-dessous. Notez que cela présente certains inconvénients.
// En savoir plus sur les service workers : https://bit.ly/CRA-PWA
serviceWorker.unregister();
