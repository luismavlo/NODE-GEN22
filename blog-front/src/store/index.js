import { configureStore } from "@reduxjs/toolkit";
import posts from "./slices/posts.slice";
import myPosts from "./slices/myPosts.slice";
import user from "./slices/user.slice";

export default configureStore({
  reducer: {
    posts,
    myPosts,
    user,
  },
});
