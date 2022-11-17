import React, {useContext, useRef} from 'react';
import {MdSearch} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import {SearchContext} from '../context/SearchContext';

const NavSearch = () => {
  let inputValue = '';
  const typingRef = useRef(null);
  const navigate = useNavigate();
  const srContext = useContext(SearchContext);

  // Handle input change function
  const handleInputChange = (e) => {
    // will get input value when user stop typing after 200ms

    if (typingRef.current) clearTimeout(typingRef.current);
    typingRef.current = setTimeout(() => {
      inputValue = e.target.value;
    }, 200);
  };

  return (
    <form
      className='text-white pr-1 flex  justify-end cursor-pointer '
      onSubmit={(e) => {
        e.preventDefault();
        srContext.onSubmit(inputValue);
        navigate('/search');
      }}
    >
      <MdSearch className='text-[28px] ml-[10px] translate-x-8 translate-y-2 font-bold   text-slate-300 hover:text-white' />

      <input
        type='text'
        className='bg-black  rounded outline-none w-0 focus:w-[350px] py-2 px-[30px]
       border border-solid border-white opacity-0 focus:opacity-100 transition-[width] delay-300 text-sm'
        placeholder='Movie name, Genres or People'
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
    </form>
  );
};

export default NavSearch;
