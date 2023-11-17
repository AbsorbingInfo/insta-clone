import React, { useState } from 'react'
import SAVE from '../assets/bookmark.png'
import SAVED from '../assets/bookmark-filled.png'
import LIKE from '../assets/heart.png'
import LIKED from '../assets/heart-filled.png'
import COMMENT from '../assets/chat.png'
import CommentPopup from './CommentPopup';
import { useDispatch } from 'react-redux';
import { setLikePost, setSavePost } from '../slices/postsSlice';

const PostCard = ({data}) => {
  const dispatch = useDispatch();
  const [ isCommentVisible, setIsCommentVisible] = useState(false)

  const handleLike = () => {
    dispatch(setLikePost({id: data.id, value: !data.isLiked}));
  }

  const handleSave = () => {
    dispatch(setSavePost({id: data.id, value: !data.isSaved}));
  }

  return (
    <div className='text-white font-semibold w-[448px] mx-auto border-[#232426] border-b-2 mb-3'>
      <CommentPopup data={{ isCommentVisible ,setIsCommentVisible, id: data.id }} />
      <div className='ml-2 py-2'>{data.username}</div>
      <img src={data.image} className='w-[448px] h-[448px] object-cover mx-auto border-[#232426] border-2' />
      <div className='flex justify-between mx-3 py-2'>
        <div className='flex'>
          <img src={data.isLiked ? LIKED : LIKE} className='w-6 mx-2 cursor-pointer' onClick={handleLike} />
          <img src={COMMENT} onClick={() => setIsCommentVisible(true)} className='w-6 mx-2 cursor-pointer' />
        </div>
        <img src={data.isSaved ? SAVED : SAVE} onClick={handleSave} className='w-6 cursor-pointer' />
      </div>
      <div className='mx-3'>{data.likes} likes</div>
      <div className='mx-3'>
        {
          data.comments.map((comment,i) => (
            <div key={i} className='font-normal'>
              <span className='font-medium mx-2'>{comment.username}</span>
              {comment.comment}
            </div> 
          ))
        }
      </div>
    </div>
  )
}

export default PostCard