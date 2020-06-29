import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import withActiveFlag from '../../hocs/with-active-flag/with-active-flag.js';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = createRef();
    this.timerId = null;

    this.videoMouseEnterHandler = this.videoMouseEnterHandler.bind(this);
    this.videoMouseLeaveHandler = this.videoMouseLeaveHandler.bind(this);
  }

  videoMouseEnterHandler() {
    this.props.setFlagActive();
    this.timerId = setTimeout(() => {
      this.videoRef.current.play();
    }, 1000);
  }

  videoMouseLeaveHandler() {
    clearTimeout(this.timerId);
    this.videoRef.current.pause();
    this.props.setFlagInactive();
  }

  render() {
    const {video, picture, title} = this.props.movie;
    const {isActive} = this.props;

    return (
      <div
        className="small-movie-card__image"
        onMouseEnter={this.videoMouseEnterHandler}
        onMouseLeave={this.videoMouseLeaveHandler}
      >
        {isActive ? (
          <video
            src={video}
            poster={`img/${picture}`}
            width="280"
            height="175"
            ref={this.videoRef}
            muted
          />
        ) : (
          <img src={`img/${picture}`} alt={title} width="280" height="175" />
        )}
      </div>
    );
  }

  componentDidMount() {
  }
}

export default withActiveFlag(VideoPlayer);

VideoPlayer.propTypes = {
  movie: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  isActive: PropTypes.bool.isRequired,
  setFlagActive: PropTypes.func.isRequired,
  setFlagInactive: PropTypes.func.isRequired,
};
