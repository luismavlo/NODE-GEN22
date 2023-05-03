import { createSlice } from "@reduxjs/toolkit";
import blogApi from "../../api/blog";

const myPostsSlice = createSlice({
  name: 'myPosts',
  initialState: 'myPosts',
  reducers: {
    setMyPost: (state, action) => action.payload
  }
})

export const { setMyPost } = myPostsSlice.actions

export default myPostsSlice.reducer

export const getMyPostsThunk = () => (dispatch) => {
  blogApi.get('/posts/me')
    .then(res => dispatch(setMyPost(res.data)))
    .catch(err => console.log(err))
}