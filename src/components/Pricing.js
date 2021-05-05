import React from 'react';

import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <>
<div class="overflow-hidden">
<section id="pricing" class="package-section background-shape-right ptb-100">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="section-heading text-center mb-5">
                                <span class="text-uppercase color-secondary sub-title">Our Pricing Package</span>
                                <h2>Affordable Pricing and Packages Choose your Best One</h2>
                                <p>
                                    Distinctively brand cutting-edge imperatives through synergistic strategize orthogonal relationships whereas infrastructures customize low-risk high-yield processes rather than user friendly.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md">
                            <div class="card text-center single-pricing-pack p-5">
                                <h5 class="mb-2">Basic</h5>
                                <div class="pricing-img mt-3 mb-4">
                                    <img src="img/basic.svg" alt="pricing img" class="img-fluid"/>
                                </div>

                                <div class="card-body p-0">
                                    <ul class="list-unstyled text-sm pricing-feature-list">
                                        <li>5 Users access same time</li>
                                        <li>Integrated eCommerce</li>
                                        <li>Customization interface</li>
                                        <li>Weekly updated</li>
                                        <li>24/7 Phone Support</li>
                                        <li>Event Analytics</li>
                                    </ul>
                                    <div class="py-4 border-0 pricing-header">
                                        <div class="h1 text-center mb-0 color-secondary">$<span class="price font-weight-bolder">29</span></div>
                                    </div>
                                    {/* <a href="#" class="btn outline-btn" target="_blank">Purchase now</a> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md">
                            <div class="card text-center popular-price single-pricing-pack p-5">
                                <h5 class="mb-2">Standard</h5>
                                <div class="pricing-img mt-3 mb-4">
                                    <img src="img/standard.svg" alt="pricing img" class="img-fluid"/>
                                </div>

                                <div class="card-body p-0">
                                    <ul class="list-unstyled text-sm pricing-feature-list">
                                        <li>10 Users access same time</li>
                                        <li>Integrated eCommerce</li>
                                        <li>Customization interface</li>
                                        <li>Daily updated</li>
                                        <li>24/7 Phone Support</li>
                                        <li>Event Analytics</li>
                                    </ul>
                                    <div class="py-4 border-0 pricing-header">
                                        <div class="h1 text-center mb-0 color-secondary">$<span class="price font-weight-bolder">145</span></div>
                                    </div>
                                    {/* <a >cPurchase now</a> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md">
                            <div class="card text-center single-pricing-pack p-5">
                                <h5 class="mb-2">Unlimited</h5>
                                <div class="pricing-img mt-3 mb-4">
                                    <img src="img/unlimited.svg" alt="pricing img" class="img-fluid"/>
                                </div>

                                <div class="card-body p-0">
                                    <ul class="list-unstyled text-sm pricing-feature-list">
                                        <li>20 Users access same time</li>
                                        <li>Integrated eCommerce</li>
                                        <li>Fully Customization interface</li>
                                        <li>Free updated</li>
                                        <li>24/7 Phone Support</li>
                                        <li>Event Analytics</li>
                                    </ul>
                                    <div class="py-4 border-0 pricing-header">
                                        <div class="h1 text-center mb-0 color-secondary">$<span class="price font-weight-bolder">249</span></div>
                                    </div>
                                    {/* <a href="#" class="btn outline-btn" target="_blank">Purchase now</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <p class="mb-2">If you need custom services or Need more?
                        {/* <a href="#" class="color-secondary">
                          Contact us
                       </a> */}
                    </p>
                    </div>
                </div>
            </section>

<Footer />
</div>
    </>
  );
}
