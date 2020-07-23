import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = createRef();
    this.timerId = null;

    this.videoMouseEnterHandler = this.videoMouseEnterHandler.bind(this);
    this.videoMouseLeaveHandler = this.videoMouseLeaveHandler.bind(this);
  }

  videoMouseEnterHandler() {
    this.props.setActiveItem(this.props.movie.id);
    this.timerId = setTimeout(() => {
      this.videoRef.current.play();
    }, 1000);
  }

  videoMouseLeaveHandler() {
    clearTimeout(this.timerId);
    this.videoRef.current.pause();
    this.props.setActiveItem(null);
  }

  render() {
    const {video, picture, title, id} = this.props.movie;
    const {activeItem} = this.props;

    return (
      <div
        className="small-movie-card__image"
        onMouseEnter={this.videoMouseEnterHandler}
        onMouseLeave={this.videoMouseLeaveHandler}
      >
        {activeItem === id ? (
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
}

export default withActiveItem(VideoPlayer);

VideoPlayer.propTypes = {
  movie: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  activeItem: PropTypes.string,
  setActiveItem: PropTypes.func.isRequired,
};
