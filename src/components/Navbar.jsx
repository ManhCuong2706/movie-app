import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';
import NavSearch from './NavSearch';

const Navbar = () => {
  const {user, logOut} = UserAuth();
  const [background, setBackground] = useState(false);
  const navigate = useNavigate();

  // Handel logout function
  const handleLogOut = async () => {
    try {
      await logOut();

      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  // handel user scroll screen
  useEffect(() => {
    const handleScroll = () => {
      setBackground(window.scrollY >= 100);
    };
    window.addEventListener('scroll', handleScroll);

    // clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='sticky top-0 z-[100] '>
      <div
        className={`flex items-center justify-between p-2  absolute w-full ${
          background && 'bg-black'
        }`}
      >
        <div className='flex justify-between text-center items-center'>
          <Link to='/'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
              Movie App
            </h1>
          </Link>
          <NavSearch />
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
