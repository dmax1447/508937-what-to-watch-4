import React, {PureComponent, createRef, Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation} from "../../reducer/user/user.js";
import {getFilmById} from "../../reducer/app/selectors.js";
import {withRouter} from "react-router-dom";
import withReviewState from "../../hocs/with-review-state/with-review-state.js";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);
    this.reviewTextareaRef = createRef();
    this.formRef = createRef();
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onSuccessSubmit = this.onSuccessSubmit.bind(this);
    this.onFailSubmit = this.onFailSubmit.bind(this);
  }

  onSubmitHandler(evt) {
    evt.preventDefault();
    this.props.setBlocked(true);
    // this.props.submitReviewOperation(review, this.onSuccessSubmit, this.onFailSubmit);
  }

  onSuccessSubmit() {
    this.props.history.goBack();
  }

  onFailSubmit() {
    throw new Error(`error in submit`);
  }


  render() {
    const {film} = this.props;

    if (!film) {
      return (
        <p className="page__header">
          film is loading, wait please...
        </p>);
    }

    const {setRating, setComment, blocked, valid} = this.props;

    return (
      <Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={film.picture} alt={film.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <a href="movie-page.html" className="breadcrumbs__link">{film.title}</a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src={film.poster} alt={film.title} />
            </div>
          </div>

          <div className="add-review">
            <form action="#" className="add-review__form" onSubmit={this.onSubmitHandler} ref={this.formRef}>
              <div className="rating">
                <div className="rating__stars">
                  <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onInput={setRating}/>
                  <label className="rating__label" htmlFor="star-1">Rating 1</label>

                  <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onInput={setRating}/>
                  <label className="rating__label" htmlFor="star-2">Rating 2</label>

                  <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked onInput={setRating}/>
                  <label className="rating__label" htmlFor="star-3">Rating 3</label>

                  <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onInput={setRating}/>
                  <label className="rating__label" htmlFor="star-4">Rating 4</label>

                  <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onInput={setRating}/>
                  <label className="rating__label" htmlFor="star-5">Rating 5</label>
                </div>
              </div>

              <div className="add-review__text">
                <textarea ref={this.reviewTextareaRef} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onInput={setComment}></textarea>
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit" disabled={blocked || !valid}>Post</button>
                </div>

              </div>
            </form>
          </div>

        </section>
      </Fragment>
    );
  }
}

AddReview.propTypes = {
  submitReviewOperation: PropTypes.func.isRequired,
  history: PropTypes.object,
  film: PropTypes.object,
  setRating: PropTypes.func.isRequired,
  setComment: PropTypes.func.isRequired,
  setBlocked: PropTypes.func.isRequired,
  blocked: PropTypes.bool,
  valid: PropTypes.bool
};

const mapStateToProps = (state) => ({
  film: getFilmById(state),
});

const mapDispatchToProps = (dispatch) => ({
  submitReviewOperation(review, onSuccessSubmit, onFailSubmit) {
    dispatch(Operation.login(review, onSuccessSubmit, onFailSubmit));
  },
});

const AddReviewWithState = withReviewState(AddReview);
const WithRouterAddReview = withRouter(AddReviewWithState);

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(WithRouterAddReview);
