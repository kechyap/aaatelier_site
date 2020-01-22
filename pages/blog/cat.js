import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import PostCat from "../../components/post-cat";

let Cat = () => (
  <div className="blog">
    <Navigation />
    <PostCat />
    <Footer />
  </div>
);

export default Cat;
