import React from "react";
//import { FcCheckmark } from "react-icons/fc";
import Footer from "../components/Footer";

export default function Screenshots() {
  return (
    <>
    <section id="screenshots" class="screenshots-section ptb-100 gray-light-bg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="section-heading text-center">
                            <span class="text-uppercase color-secondary sub-title">App Screenshots</span>
                            <h2>App Screenshots Looks Awesome</h2>
                            <p>Credibly synthesize multimedia based networks vis-a-vis re-engineer enterprise-wide imperatives whereas fully tested web-readiness. Continually leverage existing worldwide interfaces </p>
                        </div>
                    </div>
                </div>
                {/* <!--start app screen carousel--> */}
                <div class="screen-slider-content mt-5">
                    <div class="screenshot-frame"></div>
                    <div class="screen-carousel owl-carousel owl-theme dot-indicator">
                        <img src="../assets/img/g1.jpg" class="img-fluid" alt="screenshots"/>
                        <img src="../assets/img/g2.jpg" class="img-fluid" alt="screenshots"/>
                        <img src="../assets/img/g3.jpg" class="img-fluid" alt="screenshots"/>
                        <img src="../assets/img/g4.jpg" class="img-fluid" alt="screenshots"/>
                        <img src="../assets/img/g5.jpg" class="img-fluid" alt="screenshots"/>
                        <img src="../assets/img/g6.jpg" class="img-fluid" alt="screenshots"/>
                    </div>
                </div>
                {/* <!--end app screen carousel--> */}

            </div>
        </section>
    

      <Footer />
    </>
  );
}
