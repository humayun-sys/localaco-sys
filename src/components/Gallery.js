import React from "react";
//import { FcCheckmark } from "react-icons/fc";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <>
    <section class="gallery py-5" id="gallery">
        <div class="container py-md-5">
	<h3 class="heading text-center mb-3 mb-sm-5">Our Gallery</h3>
            <div class="gallery-content">
                <div class="row">
                    <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal1"><img src="../assets/img/g1.jpg" alt="gal1" class="img-fluid mt-4"/></a>
                    </div>
                    <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal2"><img src="../assets/img/g2.jpg" alt="gal2" class="img-fluid mt-4"/></a>
                    </div>
                    <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal3"><img src="../assets/img/g3.jpg" alt="gal3" class="img-fluid mt-4"/></a>
                    </div>
                    <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal4"><img src="../assets/img/g4.jpg" alt="gal4" class="img-fluid mt-4"/></a>
                    </div>
                    <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal5"><img src="../assets/img/g5.jpg" alt="gal5" class="img-fluid mt-4"/></a>
                    </div>
                    <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal6"><img src="../assets/img/g6.jpg" alt="gal6" class="img-fluid mt-4"/></a>
                    </div>

                </div>
                {/* <!-- gallery popups -->
                <!-- popup--> */}
                <div id="gal1" class="popup-effect">
                    <div class="popup">
                        <img src="assets/img/g1.jpg" alt="Popup img" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                {/* <!-- //popup -->
                <!-- popup--> */}
                <div id="gal2" class="popup-effect">
                    <div class="popup">
                        <img src="assets/img/g2.jpg" alt="Popup img" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                {/* <!-- //popup -->
                <!-- popup--> */}
                <div id="gal3" class="popup-effect">
                    <div class="popup">
                        <img src="assets/img/g3.jpg" alt="Popup img" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                {/* <!-- //popup -->
                <!-- popup--> */}
                <div id="gal4" class="popup-effect">
                    <div class="popup">
                        <img src="assets/img/g4.jpg" alt="Popup img" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                {/* <!-- //popup -->
                <!-- popup--> */}
                <div id="gal5" class="popup-effect">
                    <div class="popup">
                        <img src="assets/img/g5.jpg" alt="Popup img" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                {/* <!-- //popup -->
                <!-- popup--> */}
                <div id="gal6" class="popup-effect">
                    <div class="popup">
                        <img src="assets/img/g6.jpg" alt="Popup img" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                {/* <!-- //popup -->
                <!-- //gallery popups --> */}

            </div>
        </div>


    </section>

      <Footer />
    </>
  );
}
