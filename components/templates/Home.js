import React from 'react';

// Main Components
import Navbar from "../partials/Navbar";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

export default function Home(props) {
    return (
        <React.Fragment>
            <div className="Home">

                <Navbar />
                <Header />

                {/* <!-- One --> */}
                <section id="one" className="wrapper style1">
                    <div className="inner">
                        <article className="feature left">
                            <span className="image"><img src="./wp-content/themes/first-react-theme/react-src/src/media/images/pic01.jpg" alt="something" /></span>
                            <div className="content">
                                <h2>Integer vitae libero acrisus egestas placerat  sollicitudin</h2>
                                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
                                <ul className="actions">
                                    <li>
                                        <a href="https://www.google.com" className="button alt">More</a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                        <article className="feature right">
                            <span className="image"><img src="./wp-content/themes/first-react-theme/react-src/src/media/images/pic02.jpg" alt="" /></span>
                            <div className="content">
                                <h2>Integer vitae libero acrisus egestas placerat  sollicitudin</h2>
                                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
                                <ul className="actions">
                                    <li>
                                        <a href="https://www.google.com" className="button alt">More</a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </section>

                {/* <!-- Two --> */}
                <section id="two" className="wrapper special">
                    <div className="inner">
                        <header className="major narrow">
                            <h2>Aliquam Blandit Mauris</h2>
                            <p>Ipsum dolor tempus commodo turpis adipiscing Tempor placerat sed amet accumsan</p>
                        </header>
                        <div className="image-grid">
                            <a href="https://www.google.com" className="image"><img src="./wp-content/themes/first-react-theme/react-src/src/media/images/pic03.jpg" alt="" /></a>
                            <a href="https://www.google.com" className="image"><img src="./wp-content/themes/first-react-theme/react-src/src/media/images/pic04.jpg" alt="" /></a>
                            <a href="https://www.google.com" className="image"><img src="./wp-content/themes/first-react-theme/react-src/src/media/images/pic05.jpg" alt="" /></a>
                            <a href="https://www.google.com" className="image"><img src="./wp-content/themes/first-react-theme/react-src/src/media/images/pic06.jpg" alt="" /></a>
                            <a href="https://www.google.com" className="image"><img src="./wp-content/themes/first-react-theme/react-src/src/media/images/pic07.jpg" alt="" /></a>
                            <a href="https://www.google.com" className="image"><img src="./wp-content/themes/first-react-theme/react-src/src/media/images/pic08.jpg" alt="" /></a>
                            <a href="https://www.google.com" className="image"><img src="./wp-content/themes/first-react-theme/react-src/src/media/images/pic09.jpg" alt="" /></a>
                            <a href="https://www.google.com" className="image"><img src="./wp-content/themes/first-react-theme/react-src/src/media/images/pic10.jpg" alt="" /></a>
                        </div>
                        <ul className="actions">
                            <li><a href="https://www.google.com" className="button big alt">Tempus Aliquam</a></li>
                        </ul>
                    </div>
                </section>

                {/* <!-- Three --> */}
                <section id="three" className="wrapper style3 special">
                    <div className="inner">
                        <header className="major narrow	">
                            <h2>Magna sed consequat tempus</h2>
                            <p>Ipsum dolor tempus commodo turpis adipiscing Tempor placerat sed amet accumsan</p>
                        </header>
                        <ul className="actions">
                            <li><a href="https://www.google.com" className="button big alt">Magna feugiat</a></li>
                        </ul>
                    </div>
                </section>

                <Footer />
            </div>
        </React.Fragment>
    );
}