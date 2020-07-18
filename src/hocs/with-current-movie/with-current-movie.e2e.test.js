import React, {PureComponent} from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withCurrentMovie from './with-current-movie.js';
import {MovieCard} from '../../components/movie-card/movie-card.jsx';
import PropTypes from "prop-types";


import filmsMock from '../../mocks/tests/films.js';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this._cardMouseEnterHandler = this._cardMouseEnterHandler.bind(this);
  }

  _cardMouseEnterHandler({id}) {
    this.props.setCurrentMovie(id);
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((item) => (
          <MovieCard
            movie={item}
            onMouseEnter={this._cardMouseEnterHandler}
            onCardTitleClick={()=>{}}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      })
  ).isRequired,
  currentMovie: PropTypes.string,
  setCurrentMovie: PropTypes.func.isRequired,
};


Enzyme.configure({
  adapter: new Adapter(),
});

it(`when mouse enter card current movie should be updated`, () => {
  const WithCurrentMovieMovieList = withCurrentMovie(MovieList);
  const withCurrentMovieMovieList = mount(<WithCurrentMovieMovieList films={filmsMock} />);
  const cards = withCurrentMovieMovieList.find(`.small-movie-card`);
  cards.at(0).simulate(`mouseEnter`);
  expect(withCurrentMovieMovieList.state(`currentMovie`)).toEqual(filmsMock[0].id);
});
