import { useContext } from "react";
import Post from "./Post";
// import { PostList } from "../store/Post-List-Store";

const PostList = () => {
  // useContext(PostList);
  return (
    <>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </>
  );
};

export default PostList;
