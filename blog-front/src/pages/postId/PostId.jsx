import { useParams } from "react-router-dom";
import usePostCrud from "../../hooks/usePostCrud";
import { useEffect } from "react";
import UserInfo from "../../components/postId/UserInfo";
import PostIdInfo from "../../components/postId/PostIdInfo";
import "./postId.css";
/* ----------- */

const PostId = () => {
  const { postId, getPostById } = usePostCrud();

  const { id } = useParams();

  useEffect(() => {
    getPostById(id);
    console.log(postId);
  }, []);

  return (
    <div className="postid_content">
      <UserInfo postId={postId} />
      <PostIdInfo postId={postId} />
    </div>
  );
};

export default PostId;
