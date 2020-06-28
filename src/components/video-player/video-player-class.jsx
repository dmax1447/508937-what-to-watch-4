import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = createRef();
    this.timerId = null;

    this.state = {
      isActive: false,
    };

    this.videoMouseEnterHandler = this.videoMouseEnterHandler.bind(this);
    this.videoMouseLeaveHandler = this.videoMouseLeaveHandler.bind(this);
  }

  videoMouseEnterHandler() {
    this.setState({isActive: true});
    this.timerId = setTimeout(() => {
      this.videoRef.current.play();
    }, 1000);
  }

  videoMouseLeaveHandler() {
    clearTimeout(this.timerId);
    this.videoRef.current.pause();
    this.setState({isActive: false});
  }

  render() {
    const {video, picture, title} = this.props.movie;

    return (
      <div
        className="small-movie-card__image"
        onMouseEnter={this.videoMouseEnterHandler}
        onMouseLeave={this.videoMouseLeaveHandler}
      >
        {this.state.isActive ? (
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

export default VideoPlayer;

VideoPlayer.propTypes = {
  movie: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
