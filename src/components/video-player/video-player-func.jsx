import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {video, picture} = props.movie;
  const videoRef = React.createRef();
  let timerId;

  const videoMouseEnterHandler = () => {
    timerId = setTimeout(() => {
      videoRef.current.play();
    }, 1000);
  };

  const videoMouseOutHandler = () => {
    clearTimeout(timerId);
    videoRef.current.pause();
  };


  return (
    <video
      src={video}
      poster={`img/${picture}`}
      width="280"
      height="175"
      ref={videoRef}
      onMouseEnter={videoMouseEnterHandler}
      onMouseLeave={videoMouseOutHandler}
      muted
    ></video>
  );
};

export default VideoPlayer;

VideoPlayer.propTypes = {
  movie: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
  }),
  active: PropTypes.bool
};
