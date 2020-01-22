import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Link from "next/link";

let Home = () => (
  <>
    <div className="home">
      <div className="front">
        <div className="pt-5">
          <Grid fluid>
            <Row className="pt-2">
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <img
                  alt=""
                  src={require("./images/logo_pink.svg")}
                  style={{ width: "6.5rem", paddingTop: "0.5rem" }}
                />
              </Col>

              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <h2 className="no-pm">AAAtelier</h2>

                <div className="subtitle">Art & Architecture Atelier</div>

                <div className="subsubtitle">Total Design Solution</div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>

      <Link href="/grill">
        <a>Grill</a>
      </Link>

      <Link href="/seam">
        <a>Seam</a>
      </Link>

      <Link href="/tego">
        <a>Tego</a>
      </Link>

      <Link href="/pops">
        <a>Pops</a>
      </Link>

      <Link href="/upcycle">
        <a>Upcycle</a>
      </Link>

      <Link href="/material-bank">
        <a>MaterialBank</a>
      </Link>
    </div>

    <style jsx>{`
      .home .front {
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

      .home .front h2 {
        color: rgba(255, 200, 190, 1);
      }

      .home .front .subtitle {
        color: rgba(255, 190, 180, 0.8);
        font-size: 1rem;
        padding-top: -1rem;
      }

      .home .front .subsubtitle {
        color: rgb(250, 190, 180);
        font-weight: 300;
        font-size: 0.9rem;
        margin-top: -0.5rem;
      }
    `}</style>
  </>
);

export default Home;
