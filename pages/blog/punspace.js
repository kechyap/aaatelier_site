import React from "react";
import Navigation from "../../components/navigation";
import Foot from "../../components/foot";

let project = {
  folder: "w03_punspace",
  title: "PUNSPACE",
  icon: "OFFICE, COMMUNITY",
  sub: "The best Co-working space in Chiangmai, Thailand",
  place: "Chiangmai, Thailand",
  date: "2018. February",
  charts: [
    {
      name: "Location",
      datas: [
        {
          category: "SPECIAL ATTRACTION",
          button: ["sc5", "BEST"],
          comment: "It is okay"
        },
        {
          category: "CLOSE TO METRO STAION",
          button: ["sc1", "BAD"],
          comment: " 1 "
        },
        { category: "WALKABILITY", button: ["sc3", "OKAY"], comment: " 3 " },
        { category: "PARKING LOT", button: ["sc5", "BEST"], comment: " 5 " },
        { category: "QUICK LUNCH", button: ["sc3", "OKAY"], comment: " 3 " },
        {
          category: "FUN ACTIVITY AFTER WORK",
          button: ["sc4", "GOOD"],
          comment: " 4"
        }
      ]
    },

    {
      name: "Productivity",
      datas: [
        { category: "INTERNET SPEED", button: "bar5", comment: "BEST" },
        { category: "CHAIR COMFORT", button: "bar5", comment: "BEST" },
        { category: "SPACIOUS TABLE", button: "bar5", comment: "BEST" },
        { category: "QUIET WORKING AREA", button: "bar5", comment: "BEST" },
        { category: "BUSINESS VIDEO CALL", button: "bar3", comment: "OKAY" },
        { category: "OUTLET ACCESSIBILITY", button: "bar4", comment: "GOOD" },
        { category: "24/7 ACCESSIBILITY", button: "bar4", comment: "GOOD" }
      ]
    },

    {
      name: "SPACE CONDITION and FACILITY",
      datas: [
        { category: "COMFORT MEETING ROOM", button: "bar4", comment: "." },
        { category: "RELAXED AREA", button: "bar3", comment: "." },
        { category: "FREE COFFEE/SNACK", button: "bar5", comment: "." },
        { category: "MONITOR RENTAL", button: "bar1", comment: "." },
        { category: "LOCKER RENTAL", button: "bar5", comment: "." },
        { category: "MAIL HANDLING", button: "bar4", comment: "." },
        { category: "PRINT/FAX", button: "bar5", comment: "." },
        { category: "SHOWER ROOM", button: "bar5", comment: "." },
        { category: "OFFICE CLEANING", button: "bar3", comment: "." },
        { category: "BATHROOM CLEANING", button: "bar4", comment: "." },
        { category: "BATHROOM PRIVACY", button: "bar5", comment: "." },
        { category: "WELL DESIGNED SPACE", button: "bar3", comment: "." }
      ]
    },
    {
      name: "LIVING COMMUNITY",
      datas: [
        { category: "COMMUNITY ORGANIZING", button: "bar2", comment: "." },
        { category: "LECTURES / PROGRAMS", button: "bar3", comment: "." },
        { category: "SUPPORTING START-UP", button: "bar4", comment: "." },
        { category: "HELPFUL STAFF", button: "bar4", comment: "." },
        { category: "CHAT-ABLE WORKING AREA", button: "bar4", comment: "." }
      ]
    }
  ]
};

let Punspace = () => (
  <div className="blog">
    <Navigation />
    <div className="container-fluid">
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
          <h2>{project.title}</h2>
          <hr />
          <h3 className="mb-2">{project.sub}</h3>
          <hr />
          <small>
            {project.date}
            <br />
            {project.place}
            <br />
            {project.icon}
          </small>
          <hr />
        </div>
        <div className="col-sm-1 col-md-1 col-lg-1" />
        <div className="col-xs-12 col-sm-7 col-md-8 col-lg-6">
          <div className="text-align-justify">
            <h4>The old Soda factory was changed into co-working space</h4>
            <p>
              수 많은 코워커들이 방문하는 치앙마이에서 가장 많은 회원을 보유하고
              있는 Punspace ! 현재까지 총 3개의 지점을 가지고 있는데 이 중에서
              최근에 오픈한 (2018년 2월) Wiang-keaw road 지점을 살펴보자. 필자는
              공사 시점에서부터 현 지점을 방문하기 시작하여서 공사 마무리 현장을
              지켜보았는데, 기존에 소다 유리병을 제조하는 공장이였기에 높은 박공
              천정이 인상적인데, 별도의 인공조명 없이도 환히 공간을 밝히는 천정
              구조와 심플하고 군더더기 없는 디자인이 공간을 경쾌하게 만든다.
            </p>
            <small>Photographer: EJay Kim / Writing: EJay Kim</small>
          </div>
        </div>
        <div className="row px-1">
          <div className="col-xs-12 col-lg-10">
            <br />
            <img alt="" src="/images/punspace/01.jpg" />
            <p>
              ▲ The Exterior of Punspace. Main Three volumes are dividied by
              function of the space.
            </p>
            <br />
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-5">
            <img alt="" src="/images/punspace/02.jpg" />
            <p className="pr-3">
              ▲ Most of coworker's favorite spot is this small garden. You can
              relax at the small nature after hard working.
            </p>
            <br />
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-5">
            <img alt="" src="/images/punspace/03.jpg" />
            <p className="pr-2">
              ▲ Various events can be happened in this small garden.
            </p>
            <br />
          </div>
          <div className="col-xs-12 col-lg-10">
            <img alt="" src="/images/punspace/04.jpg" />
            <p className="pr-2">
              ▲ The Exterior of Punspace. It is dividied by three building
              structures.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
    <Foot />
  </div>
);

export default Punspace;
