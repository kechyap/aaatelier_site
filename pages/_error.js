import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

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
    <Footer />
  </div>
);

export default Error;
