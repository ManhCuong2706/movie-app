import axios from 'axios';
import React, {memo, useContext, useEffect, useState} from 'react';
import {ShowDetailContext} from '../context/ShowDetailContext';
import requests from '../Requests';
import Trailer from './Trailer';

const MovieDetail = () => {
  const DetailContext = useContext(ShowDetailContext);
  const movie = DetailContext.movie;
  const show = DetailContext.showDetail;

  const [path, setPath] = useState('');

  //call api
  useEffect(() => {
    axios.get(requests.requestTrailer(movie?.id)).then((res) => {
      const movieList = res.data.videos.results;
      if (!Array.isArray(movieList) || movieList.length === 0) setPath('');
      movieList.forEach((item) => {
        setPath(item.key);
      });
    });
  }, [movie]);

  return (
    <>
      {/* <div className='fixed left-0 top-0 w-full h-full bg-black/50 z-[2000]'></div> */}
      {show && (
        <div
          className={`text-white bg-black flex justify-between p-5 fixed top-[25%] w-full  z-[3000] my-0 mx-auto shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all delay-300 lg:h-[60%] md:h-[70%] sm:h-[80%] ${
            show
              ? 'top-[25%] left-0 opacity-100 visible transition-[height] delay-300 ease-in-out'
              : 'top-0  opacity-0 hidden transition-[height] delay-300 ease-in-out'
          }`}
        >
          <div className='w-full pl-6 text-[18px]'>
            <h1 className='text-3xl my-6'>{movie.title || movie.name}</h1>
            <hr className='my-3' />
            <p>Released date: {movie?.release_date}</p>
            <p>Vote: {movie?.vote_count} </p>
            <p className='text-sm text-slate-300 my-3 '>{movie?.overview}</p>
          </div>
          <div className='w-full '>
            {path ? (
              <Trailer path={path} />
            ) : (
              <img
                className='w-full 
                
          h-full 
          object-contain '
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt={movie?.title}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default memo(MovieDetail);
