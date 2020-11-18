import React from "react";

export default function Gallery(props) {
  return (
    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1573939843624-b22996c1a31c"
            alt=""
          />
        </div>
        <div className="content">
          <h2>Gallery 1</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1471174617910-3e9c04f58ff5"
            alt=""
          />
        </div>
        <div className="content">
          <h2>Gallery 2</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1530467216178-3bcd746fa511"
            alt=""
          />
        </div>
        <div className="content">
          <h2>Gallery 3</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>
  );
}
