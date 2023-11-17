import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/authSlice';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username , setUsername] = useState('')
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser({username}));
  }

  return (
      <div className="h-screen flex flex-col justify-center items-center text-white">
        <div className="border border-[#232426] w-80 py-8 flex items-center flex-col mb-3 ">
            <div className="bg-no-repeat instagram-logo"></div>
            <form className="mt-8 w-64 flex flex-col">
                <input 
                      className="text-xs w-full mb-2 rounded border bg-[#232426] border-[#232426] px-2 py-2 focus:outline-none active:outline-none"
                      placeholder="username" type="text"
                      value={username}
                      onChange={(e) =>  setUsername(e.target.value)}
                      />
                <input
                      className="text-xs w-full mb-4 rounded border bg-[#232426] border-[#232426] px-2 py-2 focus:outline-none active:outline-none"
                      placeholder="Password" type="password"
                      />
                <Link to='/app/home' onClick={handleLogin} className=" text-sm text-center bg-blue-800 py-1 rounded font-medium">
                    Log In
                </Link>
            </form>
            <div className="text-xs mt-4 cursor-pointer -mb-4">Forgot password?</div>
        </div>
        <div className="bg-black border-[#232426] border-2 text-center w-80 py-4">
            <span className="text-sm">Don't have an account?</span>
            <div className=" text-sm font-semibold cursor-pointer">Sign up</div>
        </div>
    </div>
  )
}

export default Login