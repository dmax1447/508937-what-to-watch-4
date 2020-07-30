import React, {PureComponent} from "react";

const withReviewState = (Component) => {
  class WithReviewState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        blocked: false,
        comment: null,
        rating: null,
      };

      this.setComment = this.setComment.bind(this);
      this.setRating = this.setRating.bind(this);
      this.setBlocked = this.setBlocked.bind(this);
    }

    setComment(evt) {
      this.setState({comment: evt.target.value});
    }

    setRating(evt) {
      this.setState({rating: evt.target.value});
    }

    setBlocked(value) {
      this.setState({blocked: value});
    }

    render() {
      return (<Component
        {...this.props}
        valid={this.state.comment && this.state.comment.length >= 50 && this.state.comment.length <= 400 && this.state.rating !== null}
        blocked={this.state.blocked}
        comment={this.state.comment}
        rating={this.state.rating}
        setComment={this.setComment}
        setRating={this.setRating}
        setBlocked={this.setBlocked}
      />);
    }
  }

  return WithReviewState;
};

export default withReviewState;
