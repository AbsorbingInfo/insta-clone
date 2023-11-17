import React, { useEffect, useState} from 'react'
import PostCard from '../components/PostCard'
import { useSelector } from 'react-redux';

const Liked = () => {
  const [ likedPosts, setLikedPosts] = useState([])
  const data = useSelector((state) => state.poststore.posts);

  useEffect(() => {
    //For large data it will better to create seperate slice
    setLikedPosts(data.filter(post => post.isLiked))
  },[data])

  return (
    <div className='min-h-[100vh] border-[#232426] border-x-2'>
      {
        likedPosts.length < 1 ?
        <div className=' mt-16 text-center font-semibold text-2xl text-white'>LIKED POSTS IS EMPTY</div> :
        likedPosts.map(post => <PostCard key={post.id} data={post} />)
      }
    </div>
  )
}

export default Liked