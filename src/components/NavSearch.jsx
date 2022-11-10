import axios from 'axios';
import React, {useRef, useState} from 'react';
import {MdSearch} from 'react-icons/md';
import requests from '../Requests';

const NavSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const typingRef = useRef(null);

  const handleInputChange = (e) => {
    if (typingRef.current) clearTimeout(typingRef.current);

    typingRef.current = setTimeout(() => {
      setInputValue(e.target.value);
    }, 300);
  };
  console.log(inputValue);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .get(requests.requestSearch(inputValue))
      .then((res) => console.log(res));
  };

  return (
    <form
      className='text-white pr-1 flex  justify-end cursor-pointer '
      onSubmit={(e) => {
        handleFormSubmit(e);
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
