import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import mockFilms from './mocks/films.js';

const promo = {
  title: `Birds`,
  genre: `horror`,
  year: `1963`,
};

ReactDOM.render(
    <App promo={promo} films={mockFilms} />,
    document.getElementById(`root`)
);
