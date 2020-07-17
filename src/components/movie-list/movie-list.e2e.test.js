import React, {PureComponent} from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MovieCard} from '../movie-card/movie-card.jsx';
import PropTypes from "prop-types";

import filmsMock from '../../mocks/tests/films.js';

Enzyme.configure({
  adapter: new Adapter(),
});


it(`check MovieList card click update state key currentMovie with movie id`, () => {
  class MovieListMock extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        currentMovie: null,
      };

      this._cardMouseEnterHandler = this._cardMouseEnterHandler.bind(this);
    }

    _cardMouseEnterHandler(movie) {
      this.setState({currentMovie: movie});
    }

    render() {
      const {films} = this.props;
      const onCardTitleClickMock = () => {};

      return (
        <div className="catalog__movies-list">
          {films.map((item) => (
            <MovieCard
              movie={item}
              onMouseEnter={this._cardMouseEnterHandler}
              onCardTitleClick={onCardTitleClickMock}
              key={item.id}
            />
          ))}
        </div>
      );
    }
  }

  MovieListMock.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired,
        })
    ).isRequired,
  };

  const movieList = mount(
      <MovieListMock films={filmsMock} />
  );

  filmsMock.forEach((item, i) => {
    const card = movieList.find(`.small-movie-card`).at(i);
    card.simulate(`mouseEnter`);
    expect(movieList.state(`currentMovie`)).toEqual(item);
  });
});
