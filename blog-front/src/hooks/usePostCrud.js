import blogApi from "../api/blog";
import { useDispatch } from "react-redux";
import { getAllPostThunk } from "../store/slices/posts.slice";
import { getMyPostsThunk } from "../store/slices/myPosts.slice";
import { useState } from "react";

const usePostCrud = () => {
  const [postId, setPostId] = useState();

  const dispatch = useDispatch();

  // POST - Crear un nuevo posts
  const createNewPost = (formData) => {
    blogApi
      .post("/posts", formData)
      .then(() => {
        dispatch(getAllPostThunk());
        dispatch(getMyPostsThunk());
      })
      .catch((err) => console.log(err));
  };
  // UPDATE - Actualizar un post
  const updatePostById = (id, data) => {
    blogApi
      .patch(`/posts/${id}`, data)
      .then(() => {
        dispatch(getAllPostThunk());
        dispatch(getMyPostsThunk());
      })
      .catch((err) => console.log(err));
  };
  // DELETE - Borrar un post
  const deletePostById = (id) => {
    blogApi
      .delete(`/posts/${id}`)
      .then(() => {
        dispatch(getAllPostThunk());
        dispatch(getMyPostsThunk());
      })
      .catch((err) => console.log(err));
  };
  // GET - Obtener posts por ID
  const getPostById = (id) => {
    blogApi
      .get(`/posts/${id}`)
      .then((res) => setPostId(res.data.post))
      .catch((err) => console.log(err));
  };

  return {
    createNewPost,
    updatePostById,
    deletePostById,
    getPostById,
    postId,
  };
};

export default usePostCrud;
