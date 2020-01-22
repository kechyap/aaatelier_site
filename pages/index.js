import React from "react";
import Link from "next/link";
import Navigation from "../components/navigation";
import Foot from "../components/foot";

let Home = () => (
  <>
    <div className="home">
      <Navigation />
      <div className="front pt-5">
        <div className="container-fluid">
          <div className="row pt-2">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <img
                alt=""
                src="/images/logo_pink.svg"
                style={{ width: "6.5rem", paddingTop: "0.5rem" }}
              />
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
              <h2 className="m-0 p-0">AAAtelier</h2>
              <div className="subtitle">Art & Architecture Atelier</div>
              <div className="subsubtitle">Total Design Solution</div>
            </div>
          </div>
          <div className="row">
            <ul>
              <li>
                <Link href="/project/grill">
                  <a>Grill</a>
                </Link>
              </li>
              <li>
                <Link href="/project/seam">
                  <a>Seam</a>
                </Link>
              </li>
              <li>
                <Link href="/project/tego">
                  <a>Tego</a>
                </Link>
              </li>
              <li>
                <Link href="/project/pops">
                  <a>Pops</a>
                </Link>
              </li>
              <li>
                <Link href="/project/upcycle">
                  <a>Upcycle</a>
                </Link>
              </li>
              <li>
                <Link href="/project/material-bank">
                  <a>MaterialBank</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Foot />
    </div>

    <style jsx>{`
      .front {
        height: 22rem;
        background: linear-gradient(
          rgba(110, 85, 120, 1) 0%,
          rgba(200, 100, 110, 0.6) 60%,
          rgba(255, 200, 190, 0) 100%
        );
      }

      .home {
        background: linear-gradient(
          rgb(235, 215, 210) 0%,
          rgb(230, 220, 218) 20%
        );
      }

      .front h2 {
        color: rgba(255, 200, 190, 1);
      }

      .subtitle {
        color: rgba(255, 190, 180, 0.8);
        font-size: 1rem;
        padding-top: -1rem;
      }

      .subsubtitle {
        color: rgb(250, 190, 180);
        font-weight: 300;
        font-size: 0.9rem;
        margin-top: -0.5rem;
      }
    `}</style>
  </>
);

export default Home;
