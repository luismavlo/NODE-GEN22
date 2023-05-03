import { useNavigate } from "react-router-dom";
import "./styles/postCard.css";

const PostUserCard = ({ post }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <article onClick={handleCardClick} className="userpost">
      <header className="userpost__header">
        <img
          className="userpost__image"
          src={
            post.image?.[0] ||
            "https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
          }
          alt=""
        />
      </header>
      <section className="userpost__body">
        <h3 className="userpost__title">{post.title}</h3>
        <p className="userpost__content">{post.content}</p>
      </section>
      <section className="userpost__footer">
        <header className="userpost__avatar">
          <img
            className="userpost__avatar-img"
            src={post.user?.profileImgUrl}
            alt=""
          />
        </header>
        <article className="userpost__footer-info">
          <h4 className="userpost__nameUser">{post.user?.name}</h4>
          <p className="userpost__date">{post.updatedAt}</p>
        </article>
        <div className="userpost__outstanding">
          {post?.outstanding ? (
            <i className="bx bxs-bookmark-star"></i>
          ) : (
            <i className="bx bx-bookmark"></i>
          )}
        </div>
      </section>
    </article>
  );
};

export default PostUserCard;
