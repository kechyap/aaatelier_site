import React from "react";
import Navigation from "../components/navigation";
import Foot from "../components/foot";

let Error = () => (
  <div>
    <Navigation />
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12">
          <h1>Error</h1>
        </div>
      </div>
    </div>
    <Foot />
  </div>
);

export default Error;
