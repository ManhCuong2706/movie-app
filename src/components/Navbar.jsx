import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

const Navbar = () => {
  const {user, logOut} = UserAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      console.log('click');
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(user ? 'a' : 'b');

  return (
    <div className='sticky top-0 z-[1000]'>
      <div className=' flex items-center justify-between p-2  absolute w-full'>
        <div className='flex justify-between text-center items-center'>
          <Link to='/'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
              Movie App
            </h1>
          </Link>

          <div className='text-white'>
            <FaSearch className='text-[20px] ml-4 absolute top-[45%]' />
          </div>
        </div>
        {!user ? (
          <div>
            <Link to='/login'>
              <button className='text-white px-4'>Sign In</button>
            </Link>
            <Link to='/signup'>
              <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to='/account'>
              <button className='text-white px-4'>Hi {user?.email}</button>
            </Link>

            <button
              onClick={handleLogOut}
              className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
