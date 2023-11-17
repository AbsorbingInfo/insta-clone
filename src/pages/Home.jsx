import React, { useEffect, useState} from 'react'
import PostCard from '../components/PostCard'
import CreatePostPopup from '../components/CreatePostPopup';
import { useSelector } from 'react-redux';

const Home = () => {
  const data = useSelector((state) => state.poststore.posts);

  return (
    <div className='min-h-[100vh] border-[#232426] border-x-2'>
      <CreatePostPopup />
      {
        data.map(post => <PostCard key={post.id} data={post} />)
      }
    </div>
  )
}

export default Home