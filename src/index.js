import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import App from './components/app/app.jsx';
import reducer from "./reducer/reducer.js";
import {createAPI} from "./api.js";
import mockFilms from './mocks/films.js';

const api = createAPI(
    () => {}
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
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
