import React from 'react';
import {MdSearch} from 'react-icons/md';

const NavSearch = () => {
  return (
    <div className='text-white pr-1 flex  justify-end cursor-pointer '>
      <MdSearch className='text-[28px] ml-[10px] translate-x-8 translate-y-2 font-bold   text-slate-300 hover:text-white' />
      <input
        type='text'
        className='bg-black  rounded outline-none w-0 focus:w-[350px] py-2 px-[30px]
       border border-solid border-white opacity-0 focus:opacity-100 transition-[width] delay-300 text-sm'
        placeholder='Movie name, Genres or People'
      />
    </div>
  );
};

export default NavSearch;
