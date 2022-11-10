import axios from 'axios';
import React, {memo, useEffect} from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import requests from '../Requests';

const MovieDetail = (props) => {
  const {movie, video} = props;
  const [show, setShow] = useState(false);
  const modalDOM = useRef();
  useEffect(() => {
    setShow(!!movie);

    const handleClick = (e) => {
      if (e.key === 'Escape') setShow(false);
    };
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, [movie]);

  return (
    <div className={`${show ? 'block' : 'hidden'}  `} ref={modalDOM}>
      <div className='fixed left-0 top-0 w-full h-full bg-black/50 z-[2000]'></div>
      <div
        className={`text-white bg-black flex justify-between p-5 fixed top-[25%] w-full  z-[3000] my-0 mx-auto shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all delay-300 lg:h-[60%] md:h-[70%] sm:h-[80%] ${
          show
            ? 'top-[25%] left-0 opacity-100 visible transition-[height] delay-300 ease-in-out'
            : 'top-0  opacity-0 hidden transition-[height] delay-300 ease-in-out'
        }`}
      >
        <div className='w-full pl-6 text-[18px]'>
          <h1 className='text-3xl'>{movie?.title}</h1>
          <hr className='my-3' />
          <p>{movie?.release_date}</p>
          <p>Vote</p>
          <p className='text-sm text-slate-300 my-3 '>{movie?.overview}</p>
        </div>
        <div className='w-full'>
          <iframe
            className='w-full h-full'
            src={video}
            title={movie?.title || movie?.name}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default memo(MovieDetail);
