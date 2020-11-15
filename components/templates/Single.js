import React, { useState, useEffect } from "react";

// Main Components
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Page from "../templates/Page";
import Post from "../templates/Post";

export default function Single(props) {
  // Destructured Prop Variables
  const slug = props.match.params.slug;

  // useState Variables & Functions
  const [pageData, setPageData] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    // Fetch PAGE data
    fetch(
      `http://localhost:8888/DetailingCompany/wp-json/wp/v2/pages/?slug=${slug}`
    )
      .then((response) => response.json())
      .then((responseJSON) => {
        setPageData(responseJSON);
      })
      .catch((error) => {
        console.log(error);
      });

    // Fetch POST data
    fetch(
      `http://localhost:8888/DetailingCompany/wp-json/wp/v2/posts/?slug=${slug}`
    )
      .then((response) => response.json())
      .then((responseJSON) => {
        setPostData(responseJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  return (
    <div className="Single">
      <Header />
      <Page pageData={pageData} />
      <Post postData={postData} />
      <Footer />
    </div>
  );
}
