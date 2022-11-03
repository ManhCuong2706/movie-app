import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';
import requests from '../Requests';

const SignUp = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const typingRef = useRef(null);

  const {user, signUp} = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const inputType = e.target.type;
    if (typingRef.current) clearTimeout(typingRef.current);

    typingRef.current = setTimeout(() => {
      inputType === 'email' ? setEmail(value) : setPassword(value);
    }, 500);
  };

  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16 '>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                  className='rounded p-3 my-2 bg-gray-700'
                  type='email'
                  placeholder='Email or Phone number'
                  autoComplete='email'
                  onChange={handleInputChange}
                />
                <input
                  className=' rounded p-3 my-2 bg-gray-700'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                  onChange={handleInputChange}
                />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                  Sign Up
                </button>
                <div className='flex justify-between items-center text-sm text-gray-400'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need help ?</p>
                </div>
                <p className='text-sm text-gray-400 py-5'>
                  Already have account ?
                  <Link to='/login' className='ml-2 text-white'>
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
