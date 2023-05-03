import React from "react";
import ProfileInfo from "../../components/profile/ProfileInfo";

import PostUserCard from "./../../components/userId/PostUserCard";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { user, myPosts } = useSelector((state) => state);

  return (
    <div className="postid_content">
      <ProfileInfo user={user} />
      <div className="postid__history bg_grey">
        {myPosts?.posts?.map((post) => (
          <PostUserCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
