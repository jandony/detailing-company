import React from "react";

// Main Components
import Header from "../partials/Header";
import Footer from "../partials/Footer";

// Template Components
import Hero from "../sections/Hero";
// import TableOfContents from "../sections/TOC";
import About from "../sections/About";
import Gallery from "../sections/Gallery";
import Services from "../sections/Services";
import CTA from "../sections/CTA";

export default function Home(props) {
  return (
    <React.Fragment>
      <Header />

      <div className="Home">
        <div id="page-wrapper">
          <Hero />
          <About />
          {/* <TableOfContents /> */}
          <Gallery />
          <Services />
          <CTA />
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}
