// You will add code in this file

import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  const [likes, setLikes] = useState(props.data.likes)

  const incrementLikes = () => {
    setLikes(likes => likes + 1);
  }
  return (
    <div className="post-border">
      <PostHeader
        username={props.data.username}
        thumbnailUrl={
          props.data.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.data.imageUrl}
        />
      </div>
      <LikeSection likes={likes} incrementLikes={incrementLikes} />
      <CommentSection
        postId={props.data.imageUrl}
        comments={props.data.comments}
      />
    </div>
  );
};

export default Post;
