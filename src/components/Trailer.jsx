import React from 'react';
import YouTube from 'react-youtube';

const Trailer = (props) => {
  const {path} = props;

  // option config object
  const opts = {
    playerVars: {
      height: '80%',
      width: '100%',
      autoplay: 1,
      origin: 'http://localhost:3000',
    },
  };

  const pauseVideoFnc = (e) => {
    e.target.pauseVideo();
  };
  return (
    <YouTube
      videoId={path}
      opts={opts}
      onReady={(e) => pauseVideoFnc(e)}
      className='w-full h-full '
    />
  );
};

export default Trailer;
