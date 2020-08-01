import React, {PureComponent} from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withReviewState from './with-review-state.js';
import PropTypes from "prop-types";

Enzyme.configure({
  adapter: new Adapter(),
});


class MockComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  formSubmitHandler() {
  }

  render() {
    const {blocked, valid, setComment, setRating} = this.props;

    return (
      <form className="form">
        <textarea className="form__textarea" name="review-text" id="textarea" placeholder="Review text" minLength="50" maxLength="400" onInput={setComment}></textarea>
        <input className="form__input" id="star-1" type="radio" name="rating" value="1" onInput={setRating} />
        <input className="form__input" id="star-2" type="radio" name="rating" value="2" onInput={setRating} />
        <button className="form__btn" type="submit" disabled={blocked || !valid}>Post</button>
      </form>
    );
  }
}

MockComponent.propTypes = {
  blocked: PropTypes.bool,
  valid: PropTypes.any,
  rating: PropTypes.number,
  comment: PropTypes.string,
  setRating: PropTypes.func,
  setComment: PropTypes.func,
};


describe(`check WithReviewState HOC`, () => {
  const testValidValue = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;
  const WithStateMockComponent = withReviewState(MockComponent);
  const withStateMockComponent = mount(<WithStateMockComponent />);
  const textarea = withStateMockComponent.find(`#textarea`);
  const star2 = withStateMockComponent.find(`#star-2`);

  it(`setComment update state key`, () => {
    textarea.simulate(`input`, {
      target: {
        value: testValidValue
      }
    });
  });

  it(`setRating update state key`, () => {
    star2.simulate(`input`);
  });

  it(`when rating set and comment length > 50 form prop valid is true`, () => {
    const validProp = withStateMockComponent.children().props().valid;
    expect(validProp).toEqual(true);
  });
});
