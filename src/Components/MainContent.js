import React, { Component } from "react";
import Footer from "./Footer";
import Lalitendra from "./Images/lalitendra.png";
import LalitendraDark from "./Images/lalitendra-dark.png";
import Image from "./Images/email.png";
import ImageLight from "./Images/email-light.png";

export default class MainContent extends Component {
  render() {
    const { theme } = this.props;

    return (
      <section id="home" className="banner d-flex justify-content-center">
        <div className="d-flex col-11 col-xl-10  justify-content-between h-100">
          <div className=" d-flex align-items-end h-100">
            <Footer theme={theme} />
          </div>

          <div className="col-10 d-md-flex justify-content-between align-items-center pt-5">
            <img
              className="anish-logo order-0 order-md-1"
              src={theme === "light" ? Lalitendra : LalitendraDark}
              alt="anish logo"
            />

            <div className="order-1 order-md-0 banner-content pb-5">
              <div>
                <span className="hello">Hello!</span>
                <h1>
                  I'm <span>Lalitendra</span>
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.75924 12.6606C8.06632 11.747 10.0367 11.9222 11.2103 12.8914L9.86425 10.935C8.78105 9.39013 9.169 7.71873 10.7152 6.63413C12.2615 5.55371 16.643 8.45848 16.643 8.45848C15.5501 6.89833 15.7545 4.92102 17.3146 3.82669C18.8748 2.73653 21.0273 3.11336 22.1202 4.67629L36.6093 25.1446L34.7627 43.0474L19.3517 37.427L5.90964 17.4968C4.80696 15.9269 5.18796 13.7619 6.75924 12.6606Z"
                      fill="#EF9645"
                    />
                    <path
                      d="M3.74734 24.0475C3.74734 24.0475 2.17328 21.7532 4.46902 20.1805C6.76197 18.6078 8.33464 20.9008 8.33464 20.9008L15.6362 31.5493C15.8879 31.1294 16.1632 30.715 16.4705 30.3062L6.33647 15.5292C6.33647 15.5292 4.7638 13.2363 7.05815 11.6636C9.3511 10.0909 10.9238 12.3839 10.9238 12.3839L20.4557 26.2848C20.8103 25.9956 21.1732 25.705 21.5473 25.4199L10.4969 9.30252C10.4969 9.30252 8.92421 7.00957 11.2186 5.4369C13.5115 3.86423 15.0842 6.15719 15.0842 6.15719L26.1346 22.2718C26.5406 22.0229 26.9425 21.8074 27.3457 21.5793L17.017 6.51733C17.017 6.51733 15.4443 4.22438 17.7373 2.65171C20.0302 1.07904 21.6029 3.37199 21.6029 3.37199L32.524 19.2989L34.1842 21.7212C27.304 26.4406 26.6491 35.319 30.58 41.0521C31.3657 42.1992 32.5128 41.4136 32.5128 41.4136C27.7948 34.532 29.2354 26.7993 36.1171 22.0813L34.0883 11.9278C34.0883 11.9278 33.3305 9.25247 36.0044 8.49325C38.6798 7.73542 39.439 10.4108 39.439 10.4108L41.782 17.3689C42.7109 20.1277 43.6995 22.8767 45.008 25.4769C48.7026 32.8188 46.4958 41.9434 39.5294 46.7226C31.9302 51.9328 21.5417 49.9958 16.3301 42.3981L3.74734 24.0475Z"
                      fill="#E8EC3E"
                    />
                    <path
                      d="M16.6862 44.4963C11.1241 44.4963 5.50368 38.8759 5.50368 33.3139C5.50368 32.5449 4.94052 31.9233 4.17157 31.9233C3.40262 31.9233 2.72266 32.5449 2.72266 33.3139C2.72266 41.6569 8.3431 47.2774 16.6862 47.2774C17.4551 47.2774 18.0767 46.5974 18.0767 45.8285C18.0767 45.0595 17.4551 44.4963 16.6862 44.4963Z"
                      fill="#5DADEC"
                    />
                    <path
                      d="M9.73358 47.219C5.56204 47.219 2.78102 44.438 2.78102 40.2665C2.78102 39.4975 2.15946 38.8759 1.39051 38.8759C0.621559 38.8759 0 39.4975 0 40.2665C0 45.8285 4.17153 50 9.73358 50C10.5025 50 11.1241 49.3785 11.1241 48.6095C11.1241 47.8406 10.5025 47.219 9.73358 47.219ZM33.3723 2.72266C32.6047 2.72266 31.9818 3.34561 31.9818 4.11317C31.9818 4.88073 32.6047 5.50368 33.3723 5.50368C38.9343 5.50368 44.4964 10.4942 44.4964 16.6278C44.4964 17.3953 45.1193 18.0183 45.8869 18.0183C46.6544 18.0183 47.2774 17.3953 47.2774 16.6278C47.2774 8.96049 41.7153 2.72266 33.3723 2.72266Z"
                      fill="#5DADEC"
                    />
                    <path
                      d="M40.3248 0C39.5573 0 38.9343 0.564548 38.9343 1.33211C38.9343 2.09967 39.5573 2.78102 40.3248 2.78102C44.4964 2.78102 47.219 5.87491 47.219 9.67518C47.219 10.4427 47.899 11.0657 48.6679 11.0657C49.4369 11.0657 50 10.4427 50 9.67518C50 4.33979 45.8869 0 40.3248 0Z"
                      fill="#5DADEC"
                    />
                  </svg>
                </h1>

                <p>
                  UI/UX Designer, Front-End Developer & Thinker. Based in India.
                </p>
              </div>

              <div className="mt-5">
                <a href="https://flowcv.com/resume/hg0u0ruv0j">
                  <button className="shadow cv-btn">Download CV</button>
                </a>
                <a href="https://www.linkedin.com/in/lalitendra-swamy/">
                  <button className="shadow touch-btn">Get In Touch!</button>
                </a>
              </div>
            </div>
          </div>

          <div className="email d-flex align-items-end h-100 pb-2">
            <div className=" d-flex align-items-end h-100 pb-2">
              <img src={theme === "light" ? Image : ImageLight} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
