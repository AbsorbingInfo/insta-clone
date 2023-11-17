import { useState } from "react"
import CLOSE from '../assets/close-icon.png'
import { useDispatch, useSelector } from 'react-redux';
import { setCommentPost } from '../slices/postsSlice';

const CommentPopup = ({data}) => {
  console.log(data)
  const dispatch = useDispatch();
  const username = useSelector((state) => state.authstore.user.username)
  const [comment , setComment] = useState('')

  const handleSubmit = () => {
    data.setIsCommentVisible(false)
    dispatch(setCommentPost({ id: data.id ,comment: comment, user: username}));
  }

  return (
    <>
    {
      data.isCommentVisible &&
      <div className='w-96 h-40 bg-black border-[#232426] border-2 absolute ml-10 mt-80 rounded-lg flex items-center justify-center'>
        <div>
          <img src={CLOSE} className="h-9 ml-auto cursor-pointer" onClick={() => data.setIsCommentVisible(false)} />
          <input onChange={(e)=> setComment(e.target.value)} value={comment} className='bg-[#262626] h-10 w-72 px-3' placeholder='comment here...' />
          <button className='bg-white block px-3 py-2 rounded font-bold mt-2 text-black' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    
    }
    </>
    
  )
}

export default CommentPopup