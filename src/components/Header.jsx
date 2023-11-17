import React from 'react'
import LOGO from '../assets/logo.png'
import { useSelector } from 'react-redux';

const Header = () => {
  const username = useSelector((state) => state.authstore.user.username);

  return (
    <div className='border-[#232426] border-2 h-16 flex items-center justify-between'>
      <img
        className='w-28 mx-5'
        src={LOGO}
        alt="Instagram Logo"/>
      <div className='flex text-white font-bold mx-3'>
        <span className='bg-[#262626] h-9 px-5 mr-3 flex items-center rounded-md'> {username} </span>
      </div>
    </div>
  )
}

export default Header