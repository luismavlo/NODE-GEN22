import { useState } from "react";
import blogApi from "../api/blog";
import { useDispatch } from "react-redux";

const useComment = () => {
  const [comment, setComment] = useState();

  const dispatch = useDispatch();

  const createComment = (text, id) => {
    blogApi
      .post(`/comments/${id}`, { text })
      .then(() => {
        console.log("se creo");
      })
      .catch((err) => console.log(err));
  };

  return {
    createComment,
  };
};

export default useComment;
