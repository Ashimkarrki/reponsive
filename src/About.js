import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="sub_about">
        <img
          src="https://ableton-production.imgix.net/about/header.jpg?fit=crop&auto=format&fm=jpg"
          alt=""
        />
        <img
          src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-wordmark.c025e3df71b3.svg"
          alt=""
        />
      </div>

      <p className="intro">
        <h1>
          We make <span>Live, Push</span> and <span>Link</span> — unique
          software and hardware for music creation and performance. With these
          products, our community of users creates amazing things.
        </h1>
        <p>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </p>
      <div className="janky">
        <img
          src="https://ableton-production.imgix.net/about/photo-1.jpg?fit=crop&h=569&ixjsv=1.1.3&w=569"
          alt=""
        />
        <div className="white"></div>

        <div className="yellow">
          <img
            src="https://ableton-production.imgix.net/about/photo-2.jpg?fit=crop&h=341&ixjsv=1.1.3&w=455"
            alt=""
          />
        </div>
      </div>
      <div className="intro">
        <h1>
          Making music isn’t easy. It takes time, effort, and learning. But when
          you’re in the flow, it’s incredibly rewarding.
        </h1>
        <p>
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for.
        </p>
      </div>
      <div className="video">
        <iframe
          src="//www.youtube-nocookie.com/embed/9SbnhgjeyXA?wmode=transparent&controls=1&vq=hd1080&rel=0&showinfo=0&autohide=1&color=white&modestbranding=1&enablejsapi=1&autoplay=1"
          frameborder="0"
        ></iframe>
      </div>
      <div className="intro">
        <h1>
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </h1>

        <p>
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </p>
      </div>
    </div>
  );
};

export default About;
