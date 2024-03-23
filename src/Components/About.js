import React, { Component } from "react";
import Footer from "./Footer";
import Image from "./Images/email.png";
import ImageLight from "./Images/email-light.png";

export default class About extends Component {
  render() {
    const { theme } = this.props;
    console.log(theme);

    return (
      <section
        id="about"
        className={`about ${
          theme === "dark" && "about-dark-bg"
        }  d-flex justify-content-center align-items-center`}
      >
        <div className="d-flex col-11 col-xl-10   justify-content-between h-100">
          <div className=" d-flex align-items-end h-100">
            <Footer />
          </div>
          <div className="about-content   d-flex flex-column justify-content-around">
            <div className="d-flex justify-content-between ">
              <h2>
                <span>T</span>his is it. ;)
              </h2>
              <div className="col-6 col-md-9 d-flex justify-content-center">
                <hr className="col-10 align-self-end" />
              </div>
            </div>

            <p>
              Lalitendra Swamy Konna is an Indian{" "}
              <b>UI/UX Designer & Front End Developer</b> with a passion for
              designing beautiful and fuctional user experiences. Typically,
              he’s Driven & permanently Curious. He’s obsessed with designing
              things and even more obsessed with designing cool & clean stuff
              for the web and mobile. He has been in the business of creating
              since he hung his first painting on the wall when he was 11.{" "}
              <br />
              He holds a <b>bachelor degree in Computer Applications.</b> During
              his graduation, he has been actively involved in the web design
              community for the last 3 years. he has designed websites for small
              businesses, events, nonprofits and more. Currently he’s based in
              Bihar, India. Where he’s working as an independent creative.{" "}
            </p>
            <p>
              His interests, however, extend beyond the web and he loves helping
              people with branding and print design. He even loves designing{" "}
              <b>3D floor plan.</b>
            </p>
            <p>
              When he’s not designing, he’s probably hanging out with his
              girlfriend, watching series, sketching or messing around on
              something inspired by YouTube tutorials.
            </p>
            <div className="d-flex justify-content-center">
              <hr className="col-4 align-self-end" />
            </div>
          </div>

          <div className=" d-flex align-items-end h-100 pb-2">
            <img src={theme === "light" ? Image : ImageLight} alt="" />
          </div>
        </div>
      </section>
    );
  }
}
