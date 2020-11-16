import React from "react";

// Main Components
import Navbar from "../partials/Navbar/Navbar";
import Footer from "../partials/Footer";

export default function NotFound(props) {
  console.log(props);
  return (
    <React.Fragment>
      <div className="Archive">
        <Navbar color={"#51baa4"} />

        <div className="container">
          <h1>404 - This is the 404 page.</h1>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
