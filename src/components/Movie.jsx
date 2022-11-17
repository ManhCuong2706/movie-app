import React, {useContext} from 'react';
import {ShowDetailContext} from '../context/ShowDetailContext';

const Movie = ({item, title}) => {
  // create context consumer
  const detailContext = useContext(ShowDetailContext);

  return (
    <div
      className={` w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  inline-block cursor-pointer relative p-2 hover:rounded-[6px]  transition-all delay-200 ease-linear hover:scale-110  ${
        title === 'Originals' ? ' h-[400px]' : ''
      }`}
      onClick={() => {
        detailContext.handleShowDetail(item);
      }}
    >
      <img
        className='w-full h-full object-center rounded-[6px]'
        src={`https://image.tmdb.org/t/p/w500/${
          title === 'Originals' ? item?.poster_path : item?.backdrop_path
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
  );
};

export default Movie;
