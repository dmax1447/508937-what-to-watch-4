import React, {PureComponent, Ref} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };


  }

  render() {
    const {video, picture} = this.props.movie;

    return (
      <video
        src={video}
        poster={`img/${picture}`}
        width="280"
        height="175"
      ></video>
    );
  }

}

export default VideoPlayer;

VideoPlayer.propTypes = {
  movie: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
  }),
};
