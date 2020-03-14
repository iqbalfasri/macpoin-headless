import React from "react";

function Post(props) {
  console.log(props)
  return <div>Post {JSON.stringify(props)}</div>;
}

export default Post;
