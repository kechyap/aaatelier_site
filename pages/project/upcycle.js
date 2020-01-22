import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

let project = {
  folder: "Upcycle",
  title: "Upcycle Network",
  text: "Exhibition",
  photos: [
    {
      filename: "menuC.svg",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 }
    },
    { filename: "00.png", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: "10.png", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    {
      filename: "menuD.svg",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 }
    },
    { filename: "01.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "02.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "03.png", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    {
      filename: "menuS.svg",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 }
    },
    { filename: "06.png", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "07.png", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "08.png", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } }
  ]
};

let Upcycle = () => (
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
              <li>Completion Date - Dec, 2017</li>
              <li>Design Planning - AAAtelier</li>
              <li>Installation - AAAtelier</li>
              <li>Signage - AAAtelier</li>
              <li>Venue - SETEC, Seoul</li>
              <li>Client - Touch4good</li>
            </ul>
            <hr />
            <h4>SUPPORTING</h4>
            <a
              href="http://www.touch4good.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Touch4good
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-md-8 col-xl-9">
          <div className="row">
            {project.photos.map(photo => (
              <div
                className={`col-xs-${photo.break.xs} col-sm-${photo.break.sm} col-md-${photo.break.md} col-lg-${photo.break.lg} col-xl-${photo.break.xl}`}
              >
                <img alt="" src={`/images/upcycle/${photo.filename}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Upcycle;
