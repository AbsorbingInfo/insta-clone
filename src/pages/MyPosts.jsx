import React, { useEffect, useState} from 'react'
import PostCard from '../components/PostCard'
import { useSelector } from 'react-redux';

const MyPosts = () => {
  const [ myPostsPosts, setMyPostsPosts] = useState([])
  const data = useSelector((state) => state.poststore.posts);
  const username = useSelector((state) => state.authstore.user.username);

  useEffect(() => {
    //For large data it will better to create seperate slice
    setMyPostsPosts(data.filter(post => post.username === username ))
  },[data])

  return (
    <div className='min-h-[100vh] border-[#232426] border-x-2'>
      {
        myPostsPosts.length < 1 ?
        <div className=' mt-16 text-center font-semibold text-2xl text-white'>MY POSTS IS EMPTY</div> :
        myPostsPosts.map(post => <PostCard key={post.id} data={post} />)
      }
    </div>
  )
}

export default MyPosts