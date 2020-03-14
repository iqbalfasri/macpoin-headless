import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// Style Component
import Card from "../components/Card/card";

// Actions
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

  const renderContent = () => {
    if (loadingState) {
      return <span>Loading...</span>;
    } else {
      return (
        <>
          {postsState.map((post, index) => (
            <Card key={index} title={post.title.rendered} links={post._links} />
          ))}
        </>
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div
            className="mb-5"
            style={{ width: "100%", height: "250px", backgroundColor: "#ccc" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <h1 className="mb-4" style={{ fontSize: "32px", fontWeight: "900" }}>
            Kabar Apple Terbaru
          </h1>
          {renderContent()}
        </div>
        <div className="col-md-4">
          <h1 className="mb-4" style={{ fontSize: "32px", fontWeight: "900" }}>
            Tips MacOS &amp; iOS
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
