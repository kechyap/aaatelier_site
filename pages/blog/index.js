import React from "react";
import Link from "next/link";
import Navigation from "../../components/navigation";
import Foot from "../../components/foot";

let Blog = () => (
  <>
    <div className="blog">
      <Navigation />
      <h1>
        Creative Spaces
        <br />
        over the world
      </h1>
      <ul>
        <li>
          <Link href="/blog/punspace">
            <a>punspace</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/beachub">
            <a>beachub</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/cat">
            <a>cat</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/heyground">
            <a>heyground</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/scoopoint">
            <a>scoopoint</a>
          </Link>
        </li>
      </ul>
      <Foot />
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
