import React, { useEffect, useState} from 'react'
import PostCard from '../components/PostCard'
import { useSelector } from 'react-redux';

const Saved = () => {
  const [ savedPosts, setSavedPosts] = useState([])
  const data = useSelector((state) => state.poststore.posts);

  useEffect(() => {
    //For large data it will better to create seperate slice
    setSavedPosts(data.filter(post => post.isSaved))
  },[data])

  return (
    <div className='min-h-[100vh] border-[#232426] border-x-2'>
      {
        savedPosts.length < 1 ?
        <div className=' mt-16 text-center font-semibold text-2xl text-white'>SAVED POSTS IS EMPTY</div> :
        savedPosts.map(post => <PostCard key={post.id} data={post} />)
      }
    </div>
  )
}

export default Saved