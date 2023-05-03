import "./../postId/styles/userinfo.css";
import { useNavigate } from "react-router-dom";

const ProfileInfo = ({ user }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <article className="userinfo__content">
      <header className="userinfo__header">
        <img src={user.profileImgUrl} alt="" />
      </header>
      <section className="userinfo__body">
        <h3>
          <p className="userinfo__name" onClick={handleCardClick}>
            {user.name}
          </p>
          <span>{user?.isFollow ? "follow" : "unfollow"}</span>
        </h3>
        {/* TODO: Covertir el nombre en link */}
        <p>{user.description}</p>
        <small>22 Jult 2020</small>
      </section>
    </article>
  );
};

export default ProfileInfo;
