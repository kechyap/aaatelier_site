import React from "react";

let project = {
  folder: "Tego",
  title: "TEGO SCIENCE OFFICE",
  text: "office, laboratory",

  photos: [
    {
      filename: "menuE.svg",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 },
    },
    { filename: "00.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "01.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "02.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    {
      filename: "menu1.svg",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 },
    },
    { filename: "03.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "04.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    {
      filename: "menu3.svg",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 },
    },
    { filename: "302.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "303.jpg", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: "401.jpg", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: "402.jpg", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: "403.jpg", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    {
      filename: "menu5.svg",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 },
    },
    { filename: "502.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "501.jpg", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: "503.jpg", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: "504.jpg", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: "505.jpg", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    {
      filename: "menu6.svg",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 },
    },
    { filename: "602.jpg", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: "603.jpg", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: "604.jpg", break: { xs: 12, sm: 12, md: 6, lg: 6, xl: 10 } },
    { filename: "605.jpg", break: { xs: 12, sm: 12, md: 6, lg: 6, xl: 10 } },
  ],
};

let ProjectTego = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 col-md-4 col-xl-3">
        <div className="px-1 pr-3 mt-0">
          <h2>{project.title}</h2>
          <h4 className="mb-4">{project.text}</h4>
          <small>
            Interior design, Planning, Specifications, Furniture design
          </small>
          <hr />
          <ul>
            <li>Schematic Design - OCT, 2016</li>
            <li>Design Development - MAR, 2017</li>
            <li>Construction Documents - JUNE, 2017</li>
            <li>Design Planning - AAAtelier, Urban society </li>
            <li>Venue - Makok R&D Innovative district, Seoul</li>
            <li>Client - Tego Science</li>
          </ul>
          <hr />
          <h4>SUPPORTING</h4>
          <a
            href="www.tegoscience.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tego science
          </a>
        </div>
      </div>
      <div className="col-xs-12 col-md-8 col-xl-9">
        <div className="row">
          {project.photos.map((photo) => (
            <div
              className={`col-xs-${photo.break.xs} col-sm-${photo.break.sm} col-md-${photo.break.md} col-lg-${photo.break.lg} col-xl-${photo.break.xl} no-pm`}
            >
              <img alt="" src={`/images/tego/${photo.filename}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectTego;
