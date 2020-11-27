import React from "react";

const withPlayerPage = (Component) => {
  class PlayerPage extends React.PureComponent {
    constructor(props) {
      super(props);

      this._progressRef = React.createRef();
      this._videoRef = React.createRef();

      this.state = {
        isPlaying: false,
        progressBar: 0,
        timeRemaining: 0,
      };

      this.handleFullScreenButton = this.handleFullScreenButton.bind(this);
      this.handlePlayButton = this.handlePlayButton.bind(this);
      this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.onstarted = () => {
        this.setState({
          isPlaying: true,
          timeRemaining: video.duration,
        });
      };

      video.onended = () => {
        this.setState({
          isPlaying: false,
          progressBar: 0,
          timeRemaining: 0,
        });
      };

      video.ontimeupdate = () => {
        this.setState({
          progressBar: video.currentTime / video.duration * 100,
          timeRemaining: video.duration - video.currentTime,
        });
      };
    }

    componentWillUnmount() {
      this.handleFullScreenButton = null;
      this.handlePlayButton = null;
      this.handleMouseDown = null;
    }

    handleFullScreenButton() {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    }

    handlePlayButton() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.pause();
        this.setState({isPlaying: false});
      } else {
        video.play();
        this.setState({isPlaying: true});
      }
    }

    handleMouseDown(evt) {
      const video = this._videoRef.current;
      const progress = this._progressRef.current.offsetWidth;
      let target = evt.target;
      let start = evt.clientX;

      document.onmousemove = (moveEvt) => {
        let shift = start - moveEvt.clientX;
        start = moveEvt.clientX;
        let offset = target.offsetLeft - shift;
        let percentage = offset * 100 / progress;
        let time = offset * video.duration / progress;

        if (percentage > 0 && percentage < 100) {
          video.currentTime = time;
          this.setState({
            progressBar: percentage,
          });
        }
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };

      document.ondragstart = () => {
        return false;
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          progressRef={this._progressRef}
          videoRef={this._videoRef}
          isPlaying={this.state.isPlaying}
          progressBar={this.state.progressBar}
          timeRemaining={this.state.timeRemaining}
          handleFullScreenButton={this.handleFullScreenButton}
          handlePlayButton={this.handlePlayButton}
          handleMouseDown={this.handleMouseDown}
        />
      );
    }
  }

  return PlayerPage;
};

export default withPlayerPage;
