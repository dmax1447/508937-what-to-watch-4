import React, {PureComponent} from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from './with-active-item.js';
import PropTypes from "prop-types";

Enzyme.configure({
  adapter: new Adapter(),
});


class MockComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.props.setActiveItem(this.props.item);
  }

  render() {
    return (
      <button className="test-button" onClick={this.onClickHandler}>just click me</button>
    );
  }
}

MockComponent.propTypes = {
  item: PropTypes.string.isRequired,
  activeItem: PropTypes.string,
  setActiveItem: PropTypes.func.isRequired,
};


describe(`check WithActiveItem HOC`, () => {
  it(`setActiveItem update state key`, () => {
    const mockItemId = `id001`;
    const WithActiveItem = withActiveItem(MockComponent);
    const withActiveItemComponent = mount(<WithActiveItem item={mockItemId} />);
    const btn = withActiveItemComponent.find(`.test-button`);
    btn.simulate(`click`);
    expect(withActiveItemComponent.state(`activeItem`)).toEqual(mockItemId);
  });
});
