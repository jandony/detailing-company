import React, { useEffect, useState } from "react";

export default function Page(props) {
  // Destructured Prop Variables
  const pageData = props.pageData;

  // useState Variables & Functions
  //   const [featuredImage, setFeaturedImage] = useState(false);
  //   const [pageEmbedData, setPageEmbedData] = useState();

  const [section1Data, setSection1Data] = useState();
  const [section2Data, setSection2Data] = useState();
  const [showSection2, setShowSection2] = useState();

  useEffect(() => {
    pageData.map((page) => {
      return (
        // Fetch PAGE embed data
        fetch(
          `http://localhost:8888/DetailingCompany/wp-json/wp/v2/pages/${page.id}/?_embed`
        )
          .then((response) => response.json())
          .then((responseJSON) => {
            console.log(responseJSON.acf.section_1);

            // Assign & Display Section 1 Text Area in DOM
            setSection1Data(responseJSON.acf.section_1);
            document.getElementById("section1TextArea").innerHTML =
              responseJSON.acf.section_1.text_area_1;

            // Show Section 2?
            setShowSection2(responseJSON.acf.show_section_2);

            // Assing & Display Section 2 Text Area in DOM
            setSection2Data(responseJSON.acf.section_2);
            document.getElementById("section2TextArea").innerHTML =
              responseJSON.acf.section_2.text_area_1;

            // setPageEmbedData(responseJSON);
            // If page has a Featured Image, show it... if not, do nothing.
            // if (responseJSON._embedded["wp:featuredmedia"]["0"].source_url) {
            //   setFeaturedImage(true);
            // }
          })
          .catch((error) => {
            console.log(error);
          })
      );
    });
  }, [pageData]);

  return (
    <React.Fragment>
      {pageData.map((post, index) => {
        return (
          post.type === "page" && (
            <div className="Page" key={post.id}>
              <div className="wrapper">
                <div className="pageHero">
                  <div className="pageHeroImg" />
                  <h2>{post.title.rendered}</h2>
                </div>

                <div className="inner">
                  <div key={index} style={{ minHeight: "50vh" }}>
                    <hr />
                    <div
                      className="pageFeaturedImg"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
                      }}
                    ></div>
                    {/* {featuredImage && (
                      <img
                      src={
                          pageEmbedData._embedded["wp:featuredmedia"]["0"]
                          .source_url
                        }
                        alt="unsplash placeholder"
                        style={{ borderRadius: "25px" }}
                        width="100%"
                        height="auto"
                        />
                    )} */}

                    {/* Section 1 */}
                    {section1Data && (
                      <React.Fragment>
                        <h2>{section1Data.title_1}</h2>
                        <div id="section1TextArea" />
                      </React.Fragment>
                    )}

                    {/* Section 2 */}
                    {section2Data && showSection2 && (
                      <React.Fragment>
                        <h2>{section2Data.title_1}</h2>
                        <div id="section2TextArea" />
                      </React.Fragment>
                    )}
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          )
        );
      })}
    </React.Fragment>
  );
}
