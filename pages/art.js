import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

let Art = () => (
  <>
    <div className="art">
      <Navigation />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <br />
            <br />
            <br />
            <h1 className="pb-0">Art Gallery</h1>
          </div>
          <div className="col-xs-12 col-sm-5 col-md-4 col-lg-3 pr-3">
            <h2>Illustrations and Hand Drawings</h2>
            <div className="show-xs">
              <hr className="my-3" />
              <b>ACHIEVABLE SKILLS by DRAWINGS</b>
              <p>
                1. Lower chance to loose Ideas
                <br />
                2. To develop prototypes quickly
                <br />
                3. Color Skills Up
                <br />
                4. To train your imaginations
              </p>
            </div>
            <div className="hide-xs">
              <hr className="mr-2 my-4" />
              <div className="sub py-3">
                ACHIEVABLE SKILLS &nbsp;
                <br />
                by DRAWINGS
              </div>
              <small>
                1. Lower chance to loose Ideas
                <br />
                2. To developt prototypes quickly
                <br />
                3. Color Skills Up
                <br />
                4. Real freedom in your own world
                <br />
              </small>
            </div>
          </div>
          <div className="col-xs-12 col-sm-7 col-md-8 col-lg-7 pt-1">
            <b>Between Logic and Art</b>
            <p>
              Good architecture and Good user experienced design should be based
              on logical theory and data analysis. I believe that to set a
              logical goal in the beginning is one of the most important part of
              the project, but after setting strict rules, you can find out the
              artistic-freedom-spots easily.
            </p>
            <b>Personal Story</b>
            <p>
              It was miraculous that I won the best prize in the university art
              awards between more than thousands of art students who educated in
              the proper art studio. Until 17 years old, all my future dream was
              being a painter, but I couldn't afford to go art studio at that
              time. Instead, I only collected some images on comic books or
              magazines and illustrated fictional characters from my dreamworld.
              <br />
              From this experience, I believe that if I want to achive new
              skills, practicing by yourself is not difficult. If you enjoy your
              work like a game, you will love to repeat practicing and finally
              anyone can reach the goal in the end.
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10">
            <img
              alt="cat, drawing, illustration, aaatelier, ejay, eunjin"
              src="/images/art/01.png"
            />
            <img
              alt="cake, drawing, illustration, aaatelier, ejay, eunjin"
              src="/images/art/02.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>

    <style jsx>{`
      .art {
        background: linear-gradient(
          rgb(130, 75, 90) 0%,
          rgb(60, 40, 65) 20%,
          rgb(45, 50, 80) 75%,
          rgb(110, 65, 75) 100%
        );
      }

      .art h1 {
        color: rgb(255, 150, 160);
      }

      .art h2,
      .art h3 {
        color: rgb(255, 130, 140);
      }

      .art hr {
        border-bottom: 0.5px solid var(--pink4);
      }

      .art b {
        font-size: 1.1rem;
        color: var(--pink444);
        padding-bottom: 0;
        margin-top: 0rem;
      }

      .art small {
        font-size: 0.9rem;
      }

      .art sub {
        font-weight: 400;
        color: var(--pink4);
      }
    `}</style>
  </>
);

export default Art;
