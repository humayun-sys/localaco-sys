import React from "react";
import Footer from "../components/Footer";

export default function Careers() {
  return (
    <>
      <div className="jobs__banner__wrapper">
        <div className="jobs__banner__overlay"></div>
        <h1>Join Our Team</h1>
      </div>

      <div className="jobsInfo__wrapper">
        <div className="section__heading">
          <h1>About Us</h1>
        </div>
        <div className="jobsInfo__container">
          <div className="jobsInfo__image">
            <img src={require("../assets/img/jobs-info.jpg")} alt="Jobs" />
          </div>
          <div className="jobsInfo__text">
            <p>
              We "Connecting Creativity" Of the people Locolaco is the leading
              destination for Short from mobile video, photos , memorable &amp;
              fun moments of life &amp; Our mission is to inspire creativity
              &amp; bring out Inner superstar .our focus is to give what our
              users want and deserve because they are the only ones who we built
              this for. Our Future Vision is to take india to the world and we
              as an Indian company would be doing that Create ecosystem for
              creators and influencers .uses can watch and share fun moments and
              short from videos as much as they want anytime,any where on any
              internet connected smart screenJoin us and help inspire creativity
              around the worldTo make our vision a reality, we need your talent.
              Are you in?
            </p>
          </div>
        </div>
      </div>

      <div className="jobsInfo__wrapper">
        <div className="section__heading">
          <h1>Why Explore a Career at Locolaco</h1>
        </div>
        <div className="jobsInfo__container">
          <div className="jobsInfo__text textLeft">
            <p>
              Chance to be a part of a really competitive team to work with
              Working on Latest technologies and challenges of Short From Video
              App industry. We create new opportunities, solve challenging
              problems and deliver high-quality software solutions. We believe
              in growing together, and scaling new heights! The dynamic,
              vibrant, and super-energetic vibe at Locolaco is sure to be
              infectious! To keep making a difference, we’re going to need
              passionate and driven individuals.
            </p>
          </div>
          <div className="jobsInfo__image imgRight">
            <img src={require("../assets/img/jobs-info.jpg")} alt="Jobs" />
          </div>
        </div>
      </div>

      <div className="jobsApply__wrapper">
        <div className="section__heading">
          <h1>Apply for Jobs</h1>
        </div>
        <div className="form__wrapper">
          <form>
            <div className="form__field">
              <label>Full Name</label>
              <input type="text" required />
            </div>
            <div className="form__field">
              <label>Email Address</label>
              <input type="email" required />
            </div>
            <div className="form__field">
              <label>Experience</label>
              <input type="number" required min="0" />
            </div>
            <div className="form__field">
              <label>Education</label>
              <input type="text" required />
            </div>
            <div className="form__field">
              <label>Role</label>
              <input type="text" required />
            </div>
            <div className="form__field">
              <label>Location</label>
              <input type="text" required />
            </div>
            <button>Apply Now</button>
          </form>
          <div className="form__image">
            <img src="../assets/img/form-img.jpg" alt="Form Bg" />
          </div>
        </div>
      </div>

      <Footer isBgWhite={true} />
    </>
  );
}
