import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.jsx';

const promo = {
  title: `Birds`,
  genre: `horror`,
  year: `1963`,
};

ReactDOM.render(
    <App promo={promo} />,
    document.getElementById(`root`)
);
