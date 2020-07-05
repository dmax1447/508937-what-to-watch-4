import React, {PureComponent} from "react";
// import PropTypes from "prop-types";

const withActiveFlag = (Component) => {
  class WithActiveFlag extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false,
      };

      this.setFlagActive = this.setFlagActive.bind(this);
      this.setFlagInactive = this.setFlagInactive.bind(this);
    }

    setFlagActive() {
      this.setState({isActive: true});
    }

    setFlagInactive() {
      this.setState({isActive: false});
    }

    render() {
      return (<Component
        {...this.props}
        isActive = {this.state.isActive}
        setFlagActive={this.setFlagActive}
        setFlagInactive={this.setFlagInactive}
      />);
    }
  }

  WithActiveFlag.propTypes = {};

  return WithActiveFlag;
};

export default withActiveFlag;
