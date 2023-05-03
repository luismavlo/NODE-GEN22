import PostCard from "../../components/home/PostCard";
import "./home.css";
import { useSelector } from "react-redux";
import usePostCrud from "../../hooks/usePostCrud";
import FormPost from "../../components/home/FormPost";
import { useState } from "react";
/* ----  */

const Home = () => {
  const { posts } = useSelector((state) => state);

  const [isCloseForm, setIsCloseForm] = useState(true);

  const { createNewPost } = usePostCrud();

  const handleCreatePost = () => {
    setIsCloseForm(false);
  };

  return (
    <div className="home">
      <h1 className="home__title">Infinite Insights</h1>
      <p className="home__description">
        Discover a unique perspective on Infinite Insights, where we explore a
        wide range of topics and provide you with fresh and surprising ideas.
        From technology to art, from science to culture, our team of experts
        will guide you through a fascinating intellectual journey. Join us in
        the quest for endless knowledge.
      </p>
      <div className="home__post-container">
        {posts?.posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <button onClick={handleCreatePost} className="home__btn">
        +
      </button>
      <FormPost isCloseForm={isCloseForm} setIsCloseForm={setIsCloseForm} />
    </div>
  );
};

export default Home;
