import React, {PureComponent} from "react";
// import PropTypes from "prop-types";

const withCurrentMovie = (Component) => {
  class WithCurrentMovie extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentMovie: null,
      };

      this.setCurrentMovie = this.setCurrentMovie.bind(this);
    }

    setCurrentMovie(movieId) {
      this.setState({currentMovie: movieId});
    }

    render() {
      return (<Component
        {...this.props}
        currentMovie = {this.state.currentMovie}
        setCurrentMovie={this.setCurrentMovie}
      />);
    }
  }

  WithCurrentMovie.propTypes = {};

  return WithCurrentMovie;
};

export default withCurrentMovie;
