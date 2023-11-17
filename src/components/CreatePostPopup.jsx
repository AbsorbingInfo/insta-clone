import { useState } from "react"
import CLOSE from '../assets/close-icon.png'
import { useDispatch, useSelector } from 'react-redux';
import { setNewPost, setIsVisible } from '../slices/postsSlice';

const CreatePostPopup = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.authstore.user.username)
  const isVisible = useSelector((state) => state.poststore.isVisbile)
  const [url , setUrl] = useState('')

  const handleSubmit = () => {
    dispatch(setNewPost({ image: url, user: username}));
    dispatch(setIsVisible({ value: false}));
  }

  return (
    <>
    {
      isVisible &&
      <div className='w-96 h-40 bg-black border-[#232426] border-2 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg flex items-center justify-center'>
        <div>
          <img src={CLOSE} className="h-9 ml-auto cursor-pointer" onClick={() => dispatch(setIsVisible({ value: false}))} />
          <input onChange={(e)=> setUrl(e.target.value)} value={url} className='bg-[#262626] h-10 w-72 px-3 tex-white' placeholder='image url here' />
          <button className='bg-white block px-3 py-2 rounded font-bold mt-2 text-black' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    
    }
    </>
    
  )
}

export default CreatePostPopup