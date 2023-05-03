import "./styles/userinfo.css";
import { useNavigate } from "react-router-dom";

const UserInfo = ({ postId }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/user/${postId.user.id}`);
  };

  return (
    <article className="userinfo__content">
      <header className="userinfo__header">
        <img src={postId?.user?.profileImgUrl} alt="" />
      </header>
      <section className="userinfo__body">
        <h3>
          <p className="userinfo__name" onClick={handleCardClick}>
            {postId?.user?.name}
          </p>
          <span>{postId?.user?.isFollow ? "follow" : "unfollow"}</span>
        </h3>
        {/* TODO: Covertir el nombre en link */}
        <p>{postId?.user?.description}</p>
        <small>22 Jult 2020</small>
      </section>
    </article>
  );
};

export default UserInfo;
