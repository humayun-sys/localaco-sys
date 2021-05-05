import React from "react";
import { FcCheckmark } from "react-icons/fc";
import Footer from "../components/Footer";

export default function Advertise() {
  return (
    <>

      <div className="advertise__banner__wrapper">
        <div className="advertise__banner__overlay"></div>
        <h1>Reach The People</h1>
        <p>Make your ads reach the exact audience you want.</p>
      </div>

      <div className="advertise__wrapper">
        <h1>Build Your Business With Us</h1>
        <p>
          LocoLaco ads appear in a bold, linear format at the centre of visual
          inspiration.
        </p>
      </div>

      <div className="pricing__wrapper">
        <div className="pricing__container p1">
          <h1>Basic</h1>
          <div className="benefits__wrapper">
            <div>
              <FcCheckmark />
              <p>Better Ads Visbily</p>
            </div>
            <div>
              <FcCheckmark />
              <p>Exact Target Audience</p>
            </div>
            <div>
              <FcCheckmark />
              <p>Low Cost Price</p>
            </div>
            <div>
              <FcCheckmark />
              <p>Ease to work with</p>
            </div>
          </div>
          <h2>
            $99 <span>only</span>
          </h2>
          <button>Buy Now</button>
        </div>

        <div className="pricing__container p2">
          <h1>Standard</h1>
          <span className="limited">Most Popular</span>
          <div className="benefits__wrapper">
            <div>
              <FcCheckmark />
              <p>Better Ads Visbily</p>
            </div>
            <div>
              <FcCheckmark />
              <p>Exact Target Audience</p>
            </div>
            <div>
              <FcCheckmark />
              <p>Low Cost Price</p>
            </div>
            <div>
              <FcCheckmark />
              <p>Ease to work with</p>
            </div>
          </div>
          <h2>
            $199 <span>only</span>
          </h2>
          <button>Buy Now</button>
        </div>

        <div className="pricing__container p3">
          <h1>Premium</h1>
          <div className="benefits__wrapper">
            <div>
              <FcCheckmark />
              <p>Better Ads Visbily</p>
            </div>
            <div>
              <FcCheckmark />
              <p>Exact Target Audience</p>
            </div>
            <div>
              <FcCheckmark />
              <p>Low Cost Price</p>
            </div>
            <div>
              <FcCheckmark />
              <p>Ease to work with</p>
            </div>
          </div>
          <h2>
            $299 <span>only</span>
          </h2>
          <button>Buy Now</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
