import { createSlice  } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'poststore',
  initialState: {
    posts: [],
    isVisbile: false,
  },
  reducers: {
    setData: (state, action) => {
      state.posts = action.payload;
    },
    setLikePost: (state, action) => {
      const { id, value } = action.payload;
      const updatedPosts = state.posts.map((post) => {
        if (post.id === id) {
          let likeCount = post.likes;
          if(value === true){
            likeCount++
          }else {
            likeCount--
          }
          return { ...post, isLiked: value, likes: likeCount };
        }
        return post;
      });
      return { ...state, posts: updatedPosts };
    },
    setSavePost: (state, action) => {
      const { id, value } = action.payload;
      const updatedPosts = state.posts.map((post) => {
        if (post.id === id) {
          return { ...post, isSaved: value };
        }
        return post;
      });

      return { ...state, posts: updatedPosts };
    },
    setCommentPost: (state, action) => {
      const { id, comment, user } = action.payload;
      const updatedPosts = state.posts.map((post) => {
        if (post.id === id) {
          return { ...post, comments: [...post.comments, {"username": user, "comment": comment}] };
        }
        return post;
      });

      return { ...state, posts: updatedPosts };
    },
    setNewPost: (state, action) => {
      const { image, user } = action.payload;
      const newPost = {
        id: state.posts.length + 1,
        username: user,
         image,
        likes: 0,
        comments: [
        ],
        isLiked: false,
        isSaved: false
      }

      return { ...state, posts: [ ...state.posts, newPost] };
    },
    setIsVisible: (state, action) => {
      const { value } = action.payload;
      return { ...state, isVisbile: value };
    },
  },
});

export const {
  setData,
  setLikePost,
  setSavePost,
  setCommentPost,
  setNewPost,
  setIsVisible
} = postsSlice.actions;

export default postsSlice.reducer;
