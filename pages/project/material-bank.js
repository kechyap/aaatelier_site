import React from "react";
import Navigation from "../../components/navigation";
import Foot from "../../components/foot";

let project = {
  folder: "MaterialBank",
  title: "Material Bank",
  text: "Brand Identity design",
  photos: [
    { filename: "01.png", break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 5 } },
    { filename: "03.png", break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 5 } },
    { filename: "02.png", break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 5 } },
    { filename: "04.png", break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 5 } },
    { filename: "05.jpg", break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: "06.jpg", break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: "07.jpg", break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: "09.png", break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: "10.png", break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: "12.jpg", break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: "13.png", break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: "14.png", break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: "15.png", break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } }
  ]
};

let MaterialBank = () => (
  <div>
    <Navigation />
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-md-4 col-xl-3">
          <div className="px-1 pr-3 mt-0">
            <h2>{project.title}</h2>
            <h4 className="mb-4">{project.text}</h4>
            <small>Promoting enterpreneurs in upcycle industry.</small>
            <hr />
            <ul>
              <li>Completion Date - Dec, 2018</li>
              <li>Design Planning - AAAtelier</li>
              <li>Client - Seoul Upcycle Plaza</li>
            </ul>
            <hr />
            <h4>SUPPORTING</h4>
            <a
              href="http://http://www.seoulup.or.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seoul Upcycle Plaza
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-md-8 col-xl-9 no-pm">
          <div className="row">
            {project.photos.map(photo => (
              <div
                className={`col-xs-${photo.break.xs} col-sm-${photo.break.sm} col-md-${photo.break.md} col-lg-${photo.break.lg} col-xl-${photo.break.xl} no-pm`}
              >
                <img alt="" src={`/images/material-bank/${photo.filename}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Foot />
  </div>
);

export default MaterialBank;
