import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {AddReview} from "./add-review.jsx";

import movieMockFull from '../../mocks/tests/movie-full.js';


it(`Add review page should render correctly`, () => {
  const submitReviewOperation = jest.fn();
  const setRating = jest.fn();
  const setComment = jest.fn();
  const setBlocked = jest.fn();

  const comment = ``;
  const rating = 5;
  const blocked = false;
  const valid = false;

  const page = renderer.create(
      <BrowserRouter>
        <AddReview
          film={movieMockFull}
          comment={comment}
          rating={rating}
          blocked={blocked}
          valid={valid}
          setRating={setRating}
          setComment={setComment}
          setBlocked={setBlocked}
          submitReviewOperation={submitReviewOperation}
        />
      </BrowserRouter>
  ).toJSON();
  expect(page).toMatchSnapshot();
});
