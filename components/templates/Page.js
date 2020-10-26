import React, { useState, useEffect } from 'react';

export default function Page(props) {

    // Destructured Prop Variables
    const pageData = props.pageData;

    // useState Variables & Functions
    const [featuredImage, setFeaturedImage] = useState(false);
    const [pageEmbedData, setPageEmbedData] = useState();

    useEffect(() => {
        pageData.map(page => {
            return (
                // Fetch PAGE embed data
                fetch(`http://localhost:8888/react-theme/wp-json/wp/v2/pages/${page.id}/?_embed`)
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        setPageEmbedData(responseJSON);
                        // console.log(responseJSON);

                        // If page has a Featured Image, show it... if not, do nothing.
                        if (responseJSON._embedded["wp:featuredmedia"]["0"].source_url) {
                            setFeaturedImage(true);
                        }
                    }).catch((error) => {
                        console.log(error);
                    })
            )
        });

    }, [pageData]);

    return (
        <div className="Page">
            <div className="container">
                {pageData.map((post, index) => {
                    return (
                        post.type === "page" &&
                        <div key={index} style={{ paddingTop: "15vh", minHeight: "75vh" }}>
                            <h2>{post.title.rendered}</h2>
                            <hr />
                            {featuredImage && <img src={pageEmbedData._embedded["wp:featuredmedia"]["0"].source_url} alt="unsplash placeholder" style={{ borderRadius: "25px" }} width="100%" height="auto" />}
                            <p>This is the Page component.</p>
                            <hr />
                            <p>Type: page</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}