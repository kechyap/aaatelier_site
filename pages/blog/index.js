import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
// import PostBeachHub from "../../components/post-beachub";
// import PostCat from "../../components/post-cat";
import PostHeyGround from "../../components/post-heyground";
import PostPunSpace from "../../components/post-punspace";
// import PostScooPoint from "../../components/post-scoopoint";

let Blog = () => (
  <>
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

    <style jsx global>{`
      .blog {
        background: linear-gradient(
          rgb(130, 75, 90),
          rgb(100, 80, 105),
          rgb(110, 65, 75),
          rgb(110, 70, 100),
          rgb(130, 70, 90),
          rgb(100, 80, 110),
          rgb(110, 65, 75)
        );
      }

      .blog h1 {
        color: rgb(255, 150, 160);
      }

      .blog h2,
      .blog h3 {
        color: rgb(255, 130, 140);
      }

      .blog h4 {
        color: var(--pink2);
      }

      .blog hr {
        border-bottom: 0.5px solid var(--pink4);
      }

      .blog small {
        font-size: 0.88rem;
        line-height: 0rem;
        margin: 0;
        padding: 0;
      }

      .blog b {
        font-size: 1.2rem;
        color: var(--pink4);
      }
    `}</style>
  </>
);

export default Blog;
