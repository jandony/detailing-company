import React from 'react';

export default function Header(props) {
    return (
        <React.Fragment>
            <div className="header">
                {/* <!-- Banner --> */}
                <section id="banner">
                    <i className="icon far fa-gem"></i>
                    <h2>React Theme</h2>
                    <p>Page Title Here</p>
                    <ul className="actions">
                        <li><a href="https://www.google.com" className="button big special">Learn More</a></li>
                    </ul>
                </section>
            </div>
        </React.Fragment>
    );
}