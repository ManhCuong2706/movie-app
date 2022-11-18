import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {SearchContext} from '../context/SearchContext';
import requests from '../Requests';

import {ShowDetailContext} from '../context/ShowDetailContext.js';

const SearchResult = () => {
  const ctxSearch = useContext(SearchContext);
  const [movieList, setMovieList] = useState([]);
  const detailContext = useContext(ShowDetailContext);

  // Call API when receive keyword
  useEffect(() => {
    axios
      .get(requests.requestSearch(ctxSearch.keyword))
      .then((res) => setMovieList(res.data.results));
  }, [ctxSearch.keyword]);

  return (
    <div className='relative top-[30px]'>
      <div className=''>
        {movieList.length === 0 ? (
          <h1 className='text-white font-bold text-2xl py-9 px-4'>
            No results found for {''}
            <span className='text-teal-600'>{ctxSearch.keyword}</span>
          </h1>
        ) : (
          <h1 className='text-white font-bold text-2xl py-9 px-4'>
            Search Result of {''}
            <span className='text-teal-600'>{ctxSearch.keyword}</span>
          </h1>
        )}
      </div>

      <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative  flex flex-wrap justify-items-center'>
        {movieList.map((item, id) => (
          <div
            key={id}
            className={` w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  cursor-pointer relative p-2 hover:rounded-[6px]  transition-all delay-200 ease-linear hover:scale-110  m-3 `}
            onClick={() => {
              detailContext.handleShowDetail(item);
            }}
          >
            <img
              className='w-full h-full object-center rounded-[6px]'
              src={`https://image.tmdb.org/t/p/w500/${
                item?.poster_path || item?.backdrop_path
              } `}
              alt={item?.title}
            />
            <div className='absolute bottom-0 left-0 w-full h-full hover:bg-black/75 opacity-0 hover:opacity-100  text-white m-2 overflow-hidden'>
              <p
                className='white-space-normal 
                      text-xs 
                      md:text-sm
                      font-bold flex
                      justify-center
                      items-center
                      h-full text-center'
              >
                {item?.title || item?.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
