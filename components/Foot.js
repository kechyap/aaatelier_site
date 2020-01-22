import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

let Foot = () => (
  <>
    <div className="ending">
      <Grid fluid>
        <Row>
          <Col xs={6} sm={5} md={4} className="pl-1 ml-0">
            <h4 className="pb-0 my-0">
              C O N T A C T <br />A A A t e l i e r
            </h4>
            <small>aaatelier@ejay.kim</small>
          </Col>

          <Col xs={6} sm={7} md={8} className="pt-0 my-0">
            <a href="mailto:aaatelier@ejay.kim">
              <img alt="" src="/images/icon_email.svg" className="icon" />
            </a>

            <a
              href="http://www.facebook.com/kechyap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="" src="/images/icon_facebook.svg" className="icon" />
            </a>

            <a
              href="http://www.linkedin.com/in/ejayk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="" src="/images/icon_linkedin.svg" className="icon" />
            </a>

            <a
              href="http://www.instagram.com/aaatelier_ejay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="" src="/images/icon_insta.svg" className="icon" />
            </a>

            <small>
              <br style={{ lineHeight: "3rem" }} />
              Web Design & Development by AAAtelier
            </small>
          </Col>
        </Row>
      </Grid>
    </div>

    <style jsx>{`
      .ending {
        padding-bottom: 4rem;
        padding-top: 1rem;
        line-height: 1.6rem;
        background: linear-gradient(
          rgba(210, 110, 125, 0) 10%,
          rgba(255, 195, 200, 0.6) 100%
        );
      }

      .ending .icon {
        color: var(--pink3);
        height: 1.3em;
        margin-top: 0.5rem;
        margin-right: 0.8rem;
        display: inline-block;
      }
    `}</style>
  </>
);

export default Foot;
