import React from "react";

let project = {
  folder: "Pops",
  title: "P.O.P.S",
  text: "Forum",

  photos: [
    { filename: "menuP.svg", break: { xs: 12, sm: 12, xl: 10 } },
    { filename: "01.jpg", break: { xs: 12, sm: 12, xl: 10 } },
    { filename: "02.jpg", break: { xs: 12, sm: 6, xl: 5 } },
    { filename: "03.jpg", break: { xs: 12, sm: 6, xl: 5 } },
    { filename: "menuF.svg", break: { xs: 12, sm: 12, xl: 10 } },
    { filename: "s2.jpg", break: { xs: 12, sm: 12, xl: 10 } },
    { filename: "s0.jpg", break: { xs: 6, sm: 6, xl: 5 } },
    { filename: "p1.jpg", break: { xs: 6, sm: 6, xl: 5 } },
    { filename: "p3.jpg", break: { xs: 6, sm: 6, xl: 5 } },
    { filename: "p4.jpg", break: { xs: 6, sm: 6, xl: 5 } },
    { filename: "05.jpg", break: { xs: 6, sm: 6, xl: 5 } },
    { filename: "04.jpg", break: { xs: 6, sm: 6, xl: 5 } },
    { filename: "00.jpg", break: { xs: 12, sm: 12, xl: 10 } },
    { filename: "menuB.svg", break: { xs: 12, sm: 12, xl: 10 } },
    { filename: "07.jpg", break: { xs: 12, sm: 12, xl: 10 } },
    { filename: "08.jpg", break: { xs: 12, sm: 12, xl: 10 } },
  ],
};

let ProjectPops = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-4 col-xl-3">
        <div className="px-1 pr-3 mt-0">
          <h2>{project.title}</h2>
          <h4 className="mb-4">{project.text}</h4>
          <small>Event Planning, Reaserching, Booklets.</small>
          <p>
            Sharing Solutions about P.O.P.S (Private Owned Public Space) forum,
            Improving Urban Life quaility though citizen innovation.
          </p>
          <hr />
          <ul>
            <li>Completion Date - Dec, 2016</li>
            <li>Planning - AAAtelier, Urban Society, 00UNIV.</li>
            <li>Graphic Design - AAAtelier</li>
            <li>Venue - Gyeongui Railway Park, Seoul</li>
            <li>Business Planning - AAAtelier, Urban Society</li>
            <li>Client - Seoul Metropolitan Government</li>
          </ul>
          <hr />
          <h4>SUPPORTING</h4>
          <a href="http://oouniv.org" target="_blank" rel="noopener noreferrer">
            00UNIV
          </a>
        </div>
      </div>
      <div className="col-xs-12 col-md-8 col-xl-9">
        <div className="row">
          {project.photos.map((photo) => (
            <div
              className={`col-xs-${photo.break.xs} col-sm-${photo.break.sm} col-md-${photo.break.md} col-lg-${photo.break.lg} col-xl-${photo.break.xl} no-pm`}
            >
              <img alt="" src={`/images/pops/${photo.filename}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectPops;
