import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null,
      };

      this.setActiveItem = this.setActiveItem.bind(this);
    }

    setActiveItem(item) {
      this.setState({activeItem: item});
    }

    render() {
      return (<Component
        {...this.props}
        activeItem={this.state.activeItem}
        setActiveItem={this.setActiveItem}
      />);
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
