import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import mockFilms from './mocks/films.js';

import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const promo = {
  title: `Birds`,
  genre: `horror`,
  year: `1963`,
};

ReactDOM.render(
    <Provider store={store}>
      <App promo={promo} films={mockFilms} />
    </Provider>,
    document.getElementById(`root`)
);
