import React from "react";

let TextIllustration = () => (
  <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-10 offset-xs-1 col-sm-10 offset-sm-1">
          <div className="row">
            <div className="col-xs-12 col-md-4 col-lg-3 offset-lg-1">
              <h2
                style={{ color: "rgba(250, 200, 200, 1)", marginTop: "0rem" }}
              >
                TOTAL DESIGN SOLUTION
              </h2>
            </div>

            <div className="col-xs-12 col-md-8 col-lg-7">
              <div className="text-align-justify">
                도시, 건축, 인테리어, 가구, 소품, 사인, 그래픽 디자인을 통합하여
                다양한 스케일에서 일관된 해결책을 찾고자 하는 Art and
                Architecture Atelier 입니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-dosis text-align-centered pt-5 pb-2">
        <div className="row">
          <div className="col-xs-12">
            <div className="show-col-xs-sm">
              <img
                alt=""
                src="/images/logo_white.svg"
                style={{ maxWidth: "7rem" }}
              />
            </div>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-4 col-lg-3 offset-lg-1">
            <div style={{ letterSpacing: "0.4em", paddingLeft: "0.4em" }}>
              ARCHITECTURE
            </div>

            <div style={{ letterSpacing: "0.17em", paddingLeft: "0.17em" }}>
              & URBAN PLANNING
            </div>

            <div
              style={{
                letterSpacing: "0.062em",
                paddingLeft: "0.062em",
                color: "#EEE"
              }}
            >
              urban issue, social issue
            </div>

            <div
              style={{
                letterSpacing: "0.062em",
                paddingLeft: "0.062em",
                color: "#EEE"
              }}
            >
              community, remodeling
            </div>

            <br />

            <div style={{ letterSpacing: "0.95em", paddingLeft: "0.95em" }}>
              INTERIOR
            </div>

            <div style={{ letterSpacing: "1.46em", paddingLeft: "1.46em" }}>
              DESIGN
            </div>

            <div
              style={{
                letterSpacing: "0.001em",
                paddingLeft: "0.001em",
                color: "#EEE"
              }}
            >
              exhibition, furniture, display
            </div>

            <br />
          </div>

          <div className="col-xs-12 col-md-4 col-lg-4">
            <div className="hide-col-xs-sm">
              <img
                alt=""
                src="/images/logo_white.svg"
                style={{ maxWidth: "7rem", paddingTop: "2rem" }}
              />

              <div style={{ letterSpacing: "0.4em", paddingLeft: "0.4em" }}>
                BRAND
              </div>

              <div style={{ letterSpacing: "0.11em", paddingLeft: "0.11em" }}>
                IDENTITY
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-4 col-lg-3">
            <div style={{ letterSpacing: "0.95em", paddingLeft: "0.95em" }}>
              ARTISTIC
            </div>

            <div style={{ letterSpacing: "0.55em", paddingLeft: "0.55em" }}>
              INSPIRATION
            </div>

            <div
              style={{
                letterSpacing: "0.07em",
                paddingLeft: "0.07em",
                color: "#EEE"
              }}
            >
              illustration, photograph
            </div>

            <br />

            <div style={{ letterSpacing: "1.5em", paddingLeft: "1.5em" }}>
              VISUAL
            </div>

            <div style={{ letterSpacing: "1.5em", paddingLeft: "1.5em" }}>
              DESIGN
            </div>

            <div
              style={{
                letterSpacing: "0.02em",
                paddingLeft: "0.02em",
                color: "#EEE"
              }}
            >
              signage, poster, publishing
            </div>

            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-9 offset-lg-1">
            <div className="hide-col-xs-sm text-align-center">
              <img alt="" src="/images/aboutFA.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TextIllustration;
