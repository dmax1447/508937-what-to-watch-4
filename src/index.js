import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";


import App from './components/app/app.jsx';
import reducer from "./reducer/reducer.js";
import {createAPI} from "./api.js";

import {Operation as DataOperation} from "./reducer/data/data.js";
import {ActionCreator, AuthorizationStatus} from "./reducer/user/user.js";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

// store.dispatch(UserOperation.checkAuth());
store.dispatch(DataOperation.loadFilms());

const promo = {
  title: `Birds`,
  genre: `horror`,
  year: `1963`,
};

ReactDOM.render(
    <Provider store={store}>
      <App promo={promo} />
    </Provider>,
    document.getElementById(`root`)
);
