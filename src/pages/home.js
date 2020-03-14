import React, { useEffect, useCallback } from "react";
import "../App.css";

import { useSelector, useDispatch } from "react-redux";

import { getAllPosts } from "../redux/posts/action";

function Home() {
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const postsState = useSelector(state => state.posts.data);
  const loadingState = useSelector(state => state.posts.loading);

  return (
    <div>
      {loadingState ? (
        <span>Loading...</span>
      ) : (
        postsState.map((post, index) => <div key={index}>{post.id}</div>)
      )}
    </div>
  );
}

export default Home;
