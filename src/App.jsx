import { useEffect } from "react";
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import ErrorLayout from "./pages/ErrorLayout";
import Saved from "./pages/Saved";
import Liked from "./pages/Liked";
import Login from "./pages/Login";
import MyPosts from "./pages/MyPosts";
import { useDispatch } from 'react-redux';
import { setData } from './slices/postsSlice';
import { DATA } from "./constants";
import {
  createBrowserRouter,
  Outlet 
} from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(DATA));
  }, []);

  return (
    <div className="w-4/12 mx-auto">
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorLayout />,
  },
  {
    path:"/app",
    element:<App />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "saved",
        element: <Saved />
      },
      {
        path:'liked',
        element:<Liked />
      },
      {
        path:'myposts',
        element:<MyPosts />
      }
    ]
  }
])

export default App
