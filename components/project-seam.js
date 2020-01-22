import React from "react";

let project = {
  folder: "Seam",
  title: "SEAM CENTER",
  text: "co-working & co-living place",
  photos: [
    {
      filename: "menuU.svg",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 }
    },
    {
      filename: "notAnImage",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 }
    },
    {
      filename: "menuA.svg",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 }
    },
    { filename: "01.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "02.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "03.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "001.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "04.jpg", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: "05.jpg", break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: "06.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    {
      filename: "menuI.svg",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 }
    },
    { filename: "07.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "08.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "09.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "10.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "11.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "12.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    {
      filename: "menuD.svg",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 }
    },
    { filename: "1F.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "2F.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "3F.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "4F.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "14.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "13.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    {
      filename: "menuS.svg",
      break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 }
    },
    { filename: "15.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "17.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: "16.jpg", break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } }
  ]
};

let ProjectSeam = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-4 col-xl-3">
        <div className="px-1 pr-3 mt-0">
          <h2>{project.title}</h2>
          <h4 className="mb-4">{project.text}</h4>
          <p>
            SEAM(Social Entrepreneurship And mission) CENTER is the HUB to
            promote and support Social Enterprisers in pursuit of Christian
            faith. We plan to minimize alterations to the exterior but entirely
            convert inside of building into community hub – basement and 1st
            floor are designed for co-working space and 2nd & 3rd floor are
            planned for share house. The theme of this building is “Platform of
            spare sharing”
          </p>
          <p>
            This building was built in 1990 as a typical multifamily housing. It
            borders high-rise apartment neighboring Seoul Forest. We extend
            existing outer-stairway and newly make main entrance of co-working
            space in order to have closer relationship with the dead end road
            (outside of building). Instead of hiding old and poor condition of
            the outer wall, we choose facade design using paint finishing and
            wooden louver to bring memories and traces of the past in natural
            way.
          </p>
          <hr />
          <ul>
            <li>Completion Date - Feb, 2017</li>
            <li>Design Planning - AAAtelier, Urban society</li>
            <li>Supervising - AAAtelier, Urban society</li>
            <li>Construction - ILwoo Design</li>
            <li>Signage - GramGram</li>
            <li>Photograph - Namsun Lee</li>
            <li>Venue - Seoungu, Seoul</li>
            <li>Client - The small foundation</li>
            <li>Building Management - Impact Square</li>
          </ul>
          <hr />
          <h4>SUPPORTING</h4>
          <a
            href="http://www.seam.center"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEAM CENTER
          </a>
          <br />
          <a
            href="http://www.impactsquare.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Impact Square
          </a>
        </div>
      </div>
      <div className="col-xs-12 col-md-8 col-xl-9">
        <div className="row">
          {project.photos.map(photo => (
            <div
              className={`col-xs-${photo.break.xs} col-sm-${photo.break.sm} col-md-${photo.break.md} col-lg-${photo.break.lg} col-xl-${photo.break.xl}`}
            >
              {photo.filename === "notAnImage" ? (
                <svg viewBox="0 0 1500 1385" xmlns="http://www.w3.org/2000/svg">
                  <image
                    xlinkHref="/images/seam/00.jpg"
                    width="1500"
                    height="1385"
                  />

                  <g transform="translate(1095 735)">
                    <circle
                      className="st2"
                      r="1"
                      style={{ color: "rgba(255,255,255,0.1)" }}
                    >
                      <animateTransform
                        attributeType="xml"
                        attributeName="transform"
                        type="scale"
                        from="0"
                        to="40"
                        begin="0s"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                </svg>
              ) : (
                <img alt="" src={`/images/seam/${photo.filename}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectSeam;
