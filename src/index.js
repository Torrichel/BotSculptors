import React from "react";
import ReactDOM from "react-dom";


import App from './components/App';
import { store, history } from './helpers';

ReactDOM.render(<App history={history} store={store} />, document.getElementById("root"));