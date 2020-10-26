import React from 'react';

export default function Footer(props) {
    return (
        <React.Fragment>
            {/* <!-- Four --> */}
            <section id="four" className="wrapper style2 special">
                <div className="inner">
                    <header className="major narrow">
                        <h2>Get in touch</h2>
                        <p>Ipsum dolor tempus commodo adipiscing</p>
                    </header>
                    <form action="https://www.google.com" method="POST">
                        <div className="container 75%">
                            <div className="row uniform 50%">
                                <div className="6u 12u$(xsmall)">
                                    <input name="name" placeholder="Name" type="text" />
                                </div>
                                <div className="6u$ 12u$(xsmall)">
                                    <input name="email" placeholder="Email" type="email" />
                                </div>
                                <div className="12u$">
                                    <textarea name="message" placeholder="Message" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" className="special" value="Submit" /></li>
                            <li><input type="reset" className="alt" value="Reset" /></li>
                        </ul>
                    </form>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <footer id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.google.com" className="icon fab fa-facebook-f">
                            <span className="label">Facebook</span>
                        </a></li>
                        <li><a href="https://www.google.com" className="icon fab fa-twitter">
                            <span className="label">Twitter</span>
                        </a></li>
                        <li><a href="https://www.google.com" className="icon fab fa-instagram">
                            <span className="label">Instagram</span>
                        </a></li>
                        <li><a href="https://www.google.com" className="icon fab fa-linkedin-in">
                            <span className="label">LinkedIn</span>
                        </a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Untitled.</li>
                        <li>Images: <a href="http://unsplash.com">Unsplash</a>.</li>
                        <li>Design: <a href="http://templated.co">TEMPLATED</a>.</li>
                    </ul>
                </div>
            </footer>
        </React.Fragment>
    );
}