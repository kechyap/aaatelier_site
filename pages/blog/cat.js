import React from "react";
import Navigation from "../../components/navigation";
import Foot from "../../components/foot";
import PostCat from "../../components/post-cat";

let Cat = () => (
  <div className="blog">
    <Navigation />
    <PostCat />
    <Foot />
  </div>
);

export default Cat;
