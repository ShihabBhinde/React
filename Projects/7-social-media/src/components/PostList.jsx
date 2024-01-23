import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-List-Store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </>
  );
};

export default PostList;
