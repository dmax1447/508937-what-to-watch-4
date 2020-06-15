import React from "react";
import Main from '../Main/Main.jsx';
import PropTypes from "prop-types";

const App = (props) => {
  const onCardTitleClick = (evt) => {
    evt.preventDefault();
  };


  return (
    <div>
      <Main
        promo={props.promo}
        films={props.films}
        onCardTitleClick={onCardTitleClick}
      />
    </div>
  );
};

export default App;

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
  films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
