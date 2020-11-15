import React, { useEffect } from "react";

export default function Page(props) {
  // Destructured Prop Variables
  const pageData = props.pageData;

  // useState Variables & Functions
  //   const [featuredImage, setFeaturedImage] = useState(false);
//   const [pageEmbedData, setPageEmbedData] = useState();

  useEffect(() => {
    pageData.map((page) => {
      return (
        // Fetch PAGE embed data
        fetch(
          `http://localhost:8888/DetailingCompany/wp-json/wp/v2/pages/${page.id}/?_embed`
        )
          .then((response) => response.json())
          .then((responseJSON) => {
            // setPageEmbedData(responseJSON);
            // console.log(responseJSON);

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
            <div className="Page">
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
                    <h2>Section Title</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Cras sed felis eget velit. Semper auctor neque
                      vitae tempus quam pellentesque. Non odio euismod lacinia
                      at quis. At volutpat diam ut venenatis. Egestas sed tempus
                      urna et pharetra pharetra massa. Tristique magna sit amet
                      purus. Varius morbi enim nunc faucibus.
                    </p>

                    <p>
                      Turpis nunc eget lorem dolor sed viverra ipsum. Bibendum
                      neque egestas congue quisque. Condimentum mattis
                      pellentesque id nibh tortor id. Pharetra diam sit amet
                      nisl suscipit adipiscing bibendum est ultricies. Laoreet
                      non curabitur gravida arcu. Nisl purus in mollis nunc sed
                      id semper risus in. Nulla aliquet porttitor lacus luctus
                      accumsan. Urna nunc id cursus metus. Interdum varius sit
                      amet mattis vulputate enim. Curabitur vitae nunc sed velit
                      dignissim sodales ut.
                    </p>
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
