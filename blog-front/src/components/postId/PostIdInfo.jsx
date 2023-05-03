import { Carrousel } from "./Carrousel";
import Comment from "./Comment";
import "./styles/postidinfo.css";

const PostIdInfo = ({ postId }) => {
  return (
    <section className="postidinfo">
      <h2>{postId?.title}</h2>
      <img src={postId?.postImgs[0]} alt="" />
      <Carrousel postImgs={postId?.postImgs} />

      <p className="postidinfo__content">{postId?.content}</p>

      <Comment comments={postId?.comments} />
    </section>
  );
};

export default PostIdInfo;
