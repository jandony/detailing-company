import React, { useEffect } from "react";

export default function Post(props) {
  // Destructured Prop Variables
  const postData = props.postData;

  // useState Variables & Functions
  //   const [featuredImage, setFeaturedImage] = useState(false);
  //   const [postEmbedData, setPostEmbedData] = useState();

  useEffect(() => {
    postData.map((post) => {
      return (
        // Fetch POST embed data
        fetch(
          `http://localhost:8888/DetailingCompany/wp-json/wp/v2/posts/${post.id}/?_embed`
        )
          .then((response) => response.json())
          .then((responseJSON) => {
            // setPostEmbedData(responseJSON);
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
  }, [postData]);

  return (
    <React.Fragment>
      {postData.map((post, index) => {
        return (
          post.type === "post" && (
            <div id="Post">
              <div className="wrapper">
                <div className="pageHero">
                  <div className="postHeroImg" />
                  <h2>{post.title.rendered}</h2>
                </div>
                <div className="inner">
                  <div key={index} style={{ minHeight: "50vh" }}>
                    <div className="postMeta">
                      <p>
                        Date: <em> Wednesday, November 11th 2020</em>
                      </p>
                      <p>
                        Author: <em>James Maxwell</em>
                      </p>
                    </div>
                    <hr />
                    {/* {featuredImage && (
                      <img
                      src={
                          postEmbedData._embedded["wp:featuredmedia"]["0"]
                          .source_url
                        }
                        alt="unsplash placeholder"
                        style={{ borderRadius: "25px" }}
                        width="100%"
                        height="auto"
                        />
                    )} */}
                    <h2>Gallery Title</h2>
                    <div className="grid-container">
                      <div
                        className="grid-item"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
                        }}
                      ></div>
                      <div
                        className="grid-item"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1573939843624-b22996c1a31c')",
                        }}
                      ></div>
                      <div
                        className="grid-item"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1471174617910-3e9c04f58ff5')",
                        }}
                      ></div>
                      <div
                        className="grid-item"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1530467216178-3bcd746fa511')",
                        }}
                      ></div>
                      <div
                        className="grid-item"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1526518604528-b927bd350668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
                        }}
                      ></div>
                      <div
                        className="grid-item"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1571348500628-1e9b6aa00dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
                        }}
                      ></div>
                      <div
                        className="grid-item"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1598858064915-54985f821c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
                        }}
                      ></div>
                      <div
                        className="grid-item"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1485460330900-66e800c9379f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
                        }}
                      ></div>
                      <div
                        className="grid-item"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1586041828035-d6f6b41df358?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
                        }}
                      ></div>
                    </div>
                    <hr />
                    <div className="postCategories">
                      <p>
                        Categories: <em>Category1 | Category2 | Category3</em>
                      </p>
                    </div>
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
