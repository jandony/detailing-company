import React from "react";

// Main Components
import Header from "../partials/Header";
import Footer from "../partials/Footer";

// Template Components
import Hero from "../home/Hero";
import TableOfContents from "../home/TOC";
import Gallery from "../home/Gallery";
import Services from "../home/Services";
import CTA from "../home/CTA";

export default function Home(props) {
  return (
    <React.Fragment>
      <Header />

      <div className="Home">
        <div id="page-wrapper">
          <Hero />
          <TableOfContents />
          <Gallery />
          <Services />
          <CTA />
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}
