import React, { useContext } from "react";
import { ContextProvider } from "../Global/Context";
import Comments from "./Comments";

const Post = () => {
  const { posts } = useContext(ContextProvider);
  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <div className="posts_header">
            <div className="posts_header-avator">{post.username[0]}</div>
            <div className="posts_header-name">{post.username}</div>
          </div>
          <div className="posts_img">
            <img src={post.image} alt={post.image} />
          </div>
          <Comments id={post.id} />
        </div>
      ))}
    </>
  );
};
export default Post;
