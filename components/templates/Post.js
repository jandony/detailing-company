import React, { useState, useEffect } from 'react';

import Navbar from "../partials/Navbar";

export default function Post(props) {

    // Destructured Prop Variables
    const postData = props.postData;

    // useState Variables & Functions
    const [featuredImage, setFeaturedImage] = useState(false);
    const [postEmbedData, setPostEmbedData] = useState();

    useEffect(() => {
        postData.map(post => {
            return (
                // Fetch POST embed data
                fetch(`http://localhost:8888/react-theme/wp-json/wp/v2/posts/${post.id}/?_embed`)
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        setPostEmbedData(responseJSON);
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

    }, [postData]);

    return (
        postData.map((post, index) => {
            return (
                post.type === "post" &&
                <div className="Post" key={index}>

                    <Navbar color={"#fff"} />

                    <div className="header">
                        {/* <!-- Banner --> */}
                        <section id="banner" style={{ backgroundImage: featuredImage ? `url(/react-theme/wp-content/themes/first-react-theme/react-src/src/media/images/overlay.png), url(${postEmbedData._embedded["wp:featuredmedia"]["0"].source_url})` : null }}>
                            <i className="icon far fa-gem"></i>
                            <h2>{post.title.rendered}</h2>
                            <p>Post</p>
                            <ul className="actions">
                                <li><a href="https://www.google.com" className="button big special">Learn More</a></li>
                            </ul>
                        </section>
                    </div>

                    <div className="container">
                        <div style={{ paddingTop: "15vh", minHeight: "75vh" }}>
                            <h2>{post.title.rendered}</h2>
                            <hr />
                            {featuredImage && <img src={postEmbedData._embedded["wp:featuredmedia"]["0"].source_url} alt="unsplash placeholder" width="100%" height="auto" />}
                            <p>This is the Post component.</p>
                            <hr />
                            <p>Type: post</p>
                        </div>
                    </div>
                </div >
            )
        })
    );
}