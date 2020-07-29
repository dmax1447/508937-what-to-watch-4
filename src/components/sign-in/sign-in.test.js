import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";


it(`<SignIn /> should correctly`, () => {
  const loginOperation = jest.fn();

  const card = renderer
    .create(
        <SignIn
          loginOperation={loginOperation}
        />)
    .toJSON();

  expect(card).toMatchSnapshot();
});
