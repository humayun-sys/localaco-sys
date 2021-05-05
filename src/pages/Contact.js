import React from "react";
import { MdAccessTime } from "react-icons/md";
import { GoLocation } from "react-icons/go";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <div className="contact__banner_wrapper">
        <h1>How to Find Us</h1>
        <p>
          Thanks for visiting Locolaco App Download site. If you have any query
          or tip for us, please use the contact form below to contact us.
          Usually, We will reply within 24 hours.Advertisers, Please use this
          Form Below to Contact Us. Thank You
        </p>
      </div>

      <div className="contact__info__wrapper">
        <div className="contact__tab">
          <MdAccessTime className="icon" />
          <h3>24/7 Support</h3>
          <p className="info">
            If you have any Query or Suggestion, just feel free to drop a email
            to us.
          </p>
          <p className="email">service.locolaco@gmail.com</p>
        </div>

        <div className="contact__tab">
          <GoLocation className="icon" />
          <h3>Get Connected</h3>
          <p className="info">
            Follow us on social media platforms and get connect with us.
          </p>
          <div className="contact__link__wrapper">
            <div className="social__link__icon">
              <a href="https://facebook.com/">
                <FaFacebookF />
              </a>
            </div>
            <div className="social__link__icon">
              <a href="https//twitter.com/">
                <FaTwitter />
              </a>
            </div>
            <div className="social__link__icon">
              <a href="https://instagram.com/">
                <FaInstagram />
              </a>
            </div>
            <div className="social__link__icon">
              <a href="https//linkedin.com/">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact__request__wrapper">
        <div className="contact__request__conatiner">
          <h1>Don't be a stranger, just say hello.</h1>

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
              <label>Subject</label>
              <input type="text" required />
            </div>
            <div className="form__field">
              <label>Message</label>
              <textarea></textarea>
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
