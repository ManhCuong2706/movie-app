import axios from 'axios';
import React, {useEffect, useState} from 'react';

import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {useRef} from 'react';
import MovieDetail from './MovieDetail';
import requests from '../Requests';

const Row = ({title, fetchUrl, rowID}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((res) => setMovies(res.data.results));
  }, [fetchUrl]);

  const slideLeft = () => {
    const slider = document.getElementById('slider' + rowID);

    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    const slider = document.getElementById('slider' + rowID);

    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const [movie, setMovie] = useState('');
  const [path, setPath] = useState('');
  const onMovieClick = (item) => {
    setMovie(item);

    axios.get(requests.requestTrailer(item?.id)).then((res) => {
      setPath(res.data.homepage);
    });
  };

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          size={45}
          className='bg-white left-0 rounded-full hover:opacity-100 cursor-pointer opacity-50 z-10 hidden group-hover:block absolute'
        />
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item, id) => (
            <Movie
              item={item}
              key={id}
              title={title}
              onMovieClick={onMovieClick}
            />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={45}
          className='bg-white right-0 rounded-full hover:opacity-100 cursor-pointer opacity-50 z-10 hidden group-hover:block absolute'
        />
      </div>
      <MovieDetail movie={movie} video={path} />
    </>
  );
};

export default Row;
