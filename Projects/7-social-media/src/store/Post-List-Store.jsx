import { createContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = () => {};

  const deletePost = () => {};
  return (
    <PostListProvider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListProvider>
  );
};

export default PostListProvider;
