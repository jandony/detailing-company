import React from 'react';

export default function Navbar(props) {
    return (
        <React.Fragment>
            <div className="header">
                {/* <!-- Header --> */}
                <header id="header" className="alt">
                    <h1><a href="index.html" style={{ color: props.color }}>Retrospect</a></h1>
                    <a href="#nav" style={{ color: props.color }}>Menu</a>
                </header>
            </div>
        </React.Fragment>
    );
}