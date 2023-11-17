import React, { useState } from 'react'
import HOME from '../assets/home-icon.png'
import POST from '../assets/instagram-post.png'
import SAVED from '../assets/bookmark.png'
import LIKED from '../assets/heart.png'
import PROFILE_LOGO from '../assets/profile-icon.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../slices/postsSlice';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <div className='bg-black fixed bottom-0 w-4/12 h-10 border-[#232426] border-2'>
      <div className='flex items-center justify-between mx-5 px-3 my-2 '>
        <Link to='/app/home'><img src={HOME} className='w-6' /></Link>
        <Link to='/app/liked'><img src={LIKED} className='w-6' /></Link>
        <img onClick={() => dispatch(setIsVisible({ value: true}))} src={POST} className='w-6' />
        <Link to='/app/saved'><img src={SAVED} className='w-6' /></Link>
        <Link to='/app/myposts'><img src={PROFILE_LOGO} className='w-8' /></Link>
      </div>
    </div>
  )
}

export default Footer