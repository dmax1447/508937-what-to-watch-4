import React from "react";
import ReactDOM from "react-dom";
import App from './components/App/App.jsx';

const promo = {
  title: `Birds`,
  genre: `horror`,
  year: `1963`,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App promo={promo} films={films} />,
    document.getElementById(`root`)
);
