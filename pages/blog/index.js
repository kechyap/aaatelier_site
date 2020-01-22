import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
// import PostBeachHub from "../../components/post-beachub";
// import PostCat from "../../components/post-cat";
import PostHeyGround from "../../components/post-heyground";
import PostPunSpace from "../../components/post-punspace";
// import PostScooPoint from "../../components/post-scoopoint";

let Blog = () => (
  <div className="blog">
    <Navigation />
    <br />
    <br />
    <br />
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12">
          <h1>
            Creative Spaces
            <br />
            over the world
          </h1>
        </div>
      </div>
    </div>
    {/* <PostScooPoint /> */}
    <PostHeyGround />
    {/* <PostCat /> */}
    {/* <PostBeachHub /> */}
    <PostPunSpace />
    <Footer />
  </div>
);

export default Blog;
