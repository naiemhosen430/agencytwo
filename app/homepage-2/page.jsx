import React from "react";

export default function page() {
  return (
    <div className="page-content">
      {/* About Us Start */}
      <section className="section-lgt pbmit-bg-color-global">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xl-6">
              <div className="about-two_leftbox">
                <div className="pbmit-heading-subheading text-black">
                  <h4 className="pbmit-subtitle">Deliver Latest Services</h4>
                  <h2 className="pbmit-title">
                    We Execute IT Related Case <br />
                    the Studies &amp; Work
                  </h2>
                </div>
                <div className="progressbar">
                  <span className="progress-label">Business Development</span>
                  <div className="progress progress-lg progress-percent-bg">
                    <div
                      className="progress-bar aos aos-init aos-animate"
                      data-aos="slide-right"
                      data-aos-delay={200}
                      data-aos-duration={1000}
                      data-aos-easing="ease-in-out"
                      role="progressbar"
                      aria-valuenow={78}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "78%" }}
                    ></div>
                    <span className="progress-percent">78%</span>
                  </div>
                </div>
                <div
                  className="about-two_img"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <img
                    src="images/homepage-2/img-01.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-6">
              <div className="about-two_rightbox">
                <div className="about-two_text">
                  <p>
                    On the other hand we denounce with righteous indignation
                    hilland dislike men who are so beguiled and demoralized by
                    and charms of pleasure of the moment so blinded. On the
                    other hand we denounce with righteous indignation
                  </p>
                </div>
                <div className="about-two_inbox">
                  <div className="row g-0">
                    <div className="col-md-6">
                      <div className="pbmit-ihbox-style-1">
                        <div className="pbmit-ihbox-box d-flex">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-target" />
                            </div>
                          </div>
                          <div className="pbmit-ihbox-contents">
                            <h2 className="pbmit-element-title">
                              Website Development
                            </h2>
                            <div className="pbmit-heading-desc">
                              Duis eleifend molestie leo at mollis sanctus
                              intro.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="pbmit-ihbox-style-1">
                        <div className="pbmit-ihbox-box d-flex">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-speaker" />
                            </div>
                          </div>
                          <div className="pbmit-ihbox-contents">
                            <h2 className="pbmit-element-title">
                              Internal Networking
                            </h2>
                            <div className="pbmit-heading-desc">
                              Duis eleifend molestie leo at mollis sanctus
                              intro.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <ul className="list-group list-group-borderless">
                      <li className="list-group-item">
                        <span className="pbmit-icon-list-icon">
                          <i className="fa fa-check-circle" />
                        </span>
                        <span className="pbmit-icon-list-text">
                          Exploring version oflorem veritatis Proin{" "}
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span className="pbmit-icon-list-icon">
                          <i className="fa fa-check-circle" />
                        </span>
                        <span className="pbmit-icon-list-text">
                          Auctor aliquet aenean veritatis quis
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span className="pbmit-icon-list-icon">
                          <i className="fa fa-check-circle" />
                        </span>
                        <span className="pbmit-icon-list-text">
                          Consequat ipsum nec sagittis sem nibh.{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-5">
                    <div className="pbmit-ihbox-style-13">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper">
                          <i className="pbmit-itinc-icon pbmit-itinc-icon-bar-chart" />
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <h2 className="pbmit-element-title">2008</h2>
                        <h4 className="pbmit-element-heading">Since working</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-two_signbox">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <img src="images/homepage-2/signature.png" alt="" />
                    </div>
                    <div className="col-md-8">
                      <div className="about-two_signtext">
                        <strong>Mahmoud Adel</strong> – Founder of Company
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us End */}
      {/* Tab Start */}
      <section className="tab-section_two">
        <div className="container">
          <div className="pbmit-heading-subheading text-center">
            <h4 className="pbmit-subtitle">Our Work Process</h4>
            <h2 className="pbmit-title">Our Project Work Flow</h2>
            <div className="pbmit-heading-desc">
              We help digital companies to volume their self-interest and get a
              space. Eaque ipsa quae ab illo inventore. veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </div>
          </div>
          <div className="pbmit-tab">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#tab-2-1"
                  aria-selected="true"
                  role="tab"
                >
                  <i className="pbmit-itinc-icon pbmit-itinc-icon-bar-chart" />
                  <span>Business Consultancy</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-2-2"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  <i className="pbmit-itinc-icon pbmit-itinc-icon-code" />
                  <span>Market Strategy</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-2-3"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  <i className="pbmit-itinc-icon pbmit-itinc-icon-programing" />
                  <span>Advanced Analytic</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-2-4"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  <i className="pbmit-itinc-icon pbmit-itinc-icon-development" />
                  <span>Enterprise Technology</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-2-5"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  <i className="pbmit-itinc-icon pbmit-itinc-icon-customer-service-2" />
                  <span>Partnership System</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-2-6"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  <i className="pbmit-itinc-icon pbmit-itinc-icon-world" />
                  <span>Business Innovation</span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane show active"
                id="tab-2-1"
                role="tabpanel"
              >
                <div className="pbmit-column-inner">
                  <div className="row">
                    <div className="col-md-6">
                      <img src="images/homepage-2/tab-img.png" alt="" />
                    </div>
                    <div className="col-md-6">
                      <div className="inner-content">
                        <h4>
                          WE ARE AN INNOVATIVE AGENCY DEVELOP AROUND THE WORLD.
                        </h4>
                        Our results solution combines implementation support,
                        capability building and state-of-the-art diagnostic and
                        analytic tools so you can continually change. Our
                        results solution combines implementation support,
                        capability building.Change is opportunity. The
                        challenges it presents may seem daunting, but we help
                        you approach change with confidence, adapt with purpose
                        and embrace.
                        <ul className="list-group list-group-borderless">
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Projects &amp; Residentials Completed in 2020
                              Workers With Us
                            </span>
                          </li>
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Building Relationships With Clients All Over The
                              World!
                            </span>
                          </li>
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Offering high quality construction solutions Build
                              Your.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2-2" role="tabpanel">
                <div className="pbmit-column-inner">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="inner-content">
                        <h5>
                          We are an innovative agency. We develop and design
                          customers around the world.
                        </h5>
                        We’ve designed a culture that allows our stewards to
                        assimilate with our clients and bring the best of who we
                        are to your business. Our culture drives our – and more
                        importantly – your success. Our results solution
                        combines implementation support, capability building.
                        <ul className="list-group list-group-borderless">
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Projects &amp; Residentials Completed in 2020
                              Workers With Us
                            </span>
                          </li>
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Building Relationships With Clients All Over The
                              World!
                            </span>
                          </li>
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Offering high quality construction solutions Build
                              Your.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img src="images/homepage-2/tab-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2-3" role="tabpanel">
                <div className="pbmit-column-inner">
                  <div className="row">
                    <div className="col-md-6">
                      <img src="images/homepage-2/tab-img.png" alt="" />
                    </div>
                    <div className="col-md-6">
                      <div className="inner-content">
                        <h5>
                          We are an innovative agency. We develop and design
                          customers around the world.
                        </h5>
                        We’ve designed a culture that allows our stewards to
                        assimilate with our clients and bring the best of who we
                        are to your business. Our culture drives our – and more
                        importantly – your success. Our results solution
                        combines implementation support, capability building.
                        <ul className="list-group list-group-borderless">
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Projects &amp; Residentials Completed in 2020
                              Workers With Us
                            </span>
                          </li>
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Building Relationships With Clients All Over The
                              World!
                            </span>
                          </li>
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Offering high quality construction solutions Build
                              Your.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2-4" role="tabpanel">
                <div className="pbmit-column-inner">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="inner-content">
                        <h5>
                          We are an innovative agency. We develop and design
                          customers around the world.
                        </h5>
                        We’ve designed a culture that allows our stewards to
                        assimilate with our clients and bring the best of who we
                        are to your business. Our culture drives our – and more
                        importantly – your success. Our results solution
                        combines implementation support, capability building.
                        <ul className="list-group list-group-borderless">
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Projects &amp; Residentials Completed in 2020
                              Workers With Us
                            </span>
                          </li>
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Building Relationships With Clients All Over The
                              World!
                            </span>
                          </li>
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Offering high quality construction solutions Build
                              Your.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img src="images/homepage-2/tab-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2-5" role="tabpanel">
                <div className="pbmit-column-inner">
                  <div className="row">
                    <div className="col-md-6">
                      <img src="images/homepage-2/tab-img.png" alt="" />
                    </div>
                    <div className="col-md-6">
                      <div className="inner-content">
                        <h5>
                          We are an innovative agency. We develop and design
                          customers around the world.
                        </h5>
                        We’ve designed a culture that allows our stewards to
                        assimilate with our clients and bring the best of who we
                        are to your business. Our culture drives our – and more
                        importantly – your success. Our results solution
                        combines implementation support, capability building.
                        <ul className="list-group list-group-borderless">
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Projects &amp; Residentials Completed in 2020
                              Workers With Us
                            </span>
                          </li>
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Building Relationships With Clients All Over The
                              World!
                            </span>
                          </li>
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Offering high quality construction solutions Build
                              Your.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2-6" role="tabpanel">
                <div className="pbmit-column-inner">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="inner-content">
                        <h5>
                          We are an innovative agency. We develop and design
                          customers around the world.
                        </h5>
                        We’ve designed a culture that allows our stewards to
                        assimilate with our clients and bring the best of who we
                        are to your business. Our culture drives our – and more
                        importantly – your success. Our results solution
                        combines implementation support, capability building.
                        <ul className="list-group list-group-borderless">
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Projects &amp; Residentials Completed in 2020
                              Workers With Us
                            </span>
                          </li>
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Building Relationships With Clients All Over The
                              World!
                            </span>
                          </li>
                          <li className="list-group-item">
                            <span className="pbmit-icon-list-icon">
                              <i className="fa fa-check-circle" />
                            </span>
                            <span className="pbmit-icon-list-text">
                              Offering high quality construction solutions Build
                              Your.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img src="images/homepage-2/tab-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tab End */}
      {/* Counter Start */}
      <section className="counter-two_bg">
        <div className="container pbmit-col-stretched-yes pbmit-col-right">
          <div className="row">
            <div className="col-md-12 col-xl-6">
              <div className="counter-two_leftbox">
                <div className="pbmit-heading-subheading">
                  <h4 className="pbmit-subtitle">30 Years of Experience</h4>
                  <h2 className="pbmit-title">We always ready for Proven</h2>
                </div>
                <div className="pbmit-heading-title">
                  <p>
                    Our specialist focus on importantly your business success.
                    We provide solutions combines implementation
                    support,capability building Our culture drives our – and
                    more importantly – your success.{" "}
                  </p>
                </div>
                <div className="pbmit-ihbox-style-14 pb-3">
                  <div className="d-flex align-items-center">
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper">
                        <i className="pbmit-itinc-icon pbmit-itinc-icon-presentation" />
                      </div>
                    </div>
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">
                        Best Practices from Industry Experts
                      </h2>
                      <div className="pbmit-heading-desc">
                        We’ve designed a culture that allows our stewards to
                        assimilate with our clients and bring.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="counter-two-btn_box">
                  <div className="row align-items-center g-0">
                    <div className="col-md-4">
                      <a href="contact-us.html" className="pbmit-btn mb-0">
                        Contact us
                      </a>
                    </div>
                    <div className="col-md-8">
                      <div className="pbmit-ihbox-style-12">
                        <div className="d-flex align-items-center">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-phone-call" />
                            </div>
                          </div>
                          <div className="pbmit-ihbox-contents">
                            <h2 className="pbmit-element-title">
                              (+00)888.666.88
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="counter-two_fidbox">
                <div
                  className="pbminfotech-ele-fid-style-5"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                >
                  <div className="pbmit-fld-contents">
                    <div
                      className="pbmit-circle-outer"
                      data-id={100}
                      data-digit={90}
                      data-fill="#8cbc43"
                      data-emptyfill="rgba(140,188,67,0.10)"
                      data-before=""
                      data-after="<sup>%</sup>"
                      data-thickness={4}
                    >
                      <div className="d-flex align-items-center">
                        <div className="pbmit-circle">
                          <h4 className="pbmit-fid-inner">
                            <span
                              className="pbmit-number-rotate numinate"
                              data-appear-animation="animateDigits"
                              data-from={0}
                              data-to={90}
                              data-interval={5}
                              data-before=""
                              data-before-style=""
                              data-after=""
                              data-after-style=""
                            >
                              90
                            </span>
                            <span className="pbmit-fid-sub">
                              <sup>%</sup>
                            </span>
                          </h4>
                        </div>
                        <div className="pbmit-circle-inner">
                          <span className="pbmit-fid-title">
                            Skilled Experts
                          </span>
                          <div className="pbmit-heading-desc">
                            We have a solution of each client Project
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="pbminfotech-ele-fid-style-5-black"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                >
                  <div className="pbminfotech-ele-fid-style-5">
                    <div className="pbmit-fld-contents">
                      <div
                        className="pbmit-circle-outer"
                        data-id={100}
                        data-digit={75}
                        data-fill="#8cbc43"
                        data-emptyfill="rgba(140,188,67,0.10)"
                        data-before=""
                        data-after="<sup>%</sup>"
                        data-thickness={4}
                      >
                        <div className="d-flex align-items-center">
                          <div className="pbmit-circle">
                            <h4 className="pbmit-fid-inner">
                              <span
                                className="pbmit-number-rotate numinate"
                                data-appear-animation="animateDigits"
                                data-from={0}
                                data-to={75}
                                data-interval={5}
                                data-before=""
                                data-before-style=""
                                data-after=""
                                data-after-style=""
                              >
                                75
                              </span>
                              <span className="pbmit-fid-sub">
                                <sup>%</sup>
                              </span>
                            </h4>
                          </div>
                          <div className="pbmit-circle-inner">
                            <span className="pbmit-fid-title">
                              Business Guide
                            </span>
                            <div className="pbmit-heading-desc">
                              We have a solution of each client Project
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="pbminfotech-ele-fid-style-5"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                >
                  <div className="pbmit-fld-contents">
                    <div
                      className="pbmit-circle-outer"
                      data-id={100}
                      data-digit={80}
                      data-fill="#8cbc43"
                      data-emptyfill="rgba(140,188,67,0.10)"
                      data-before=""
                      data-after="<sup>%</sup>"
                      data-thickness={4}
                    >
                      <div className="d-flex align-items-center">
                        <div className="pbmit-circle">
                          <h4 className="pbmit-fid-inner">
                            <span
                              className="pbmit-number-rotate numinate"
                              data-appear-animation="animateDigits"
                              data-from={0}
                              data-to={80}
                              data-interval={5}
                              data-before=""
                              data-before-style=""
                              data-after=""
                              data-after-style=""
                            >
                              80
                            </span>
                            <span className="pbmit-fid-sub">
                              <sup>%</sup>
                            </span>
                          </h4>
                        </div>
                        <div className="pbmit-circle-inner">
                          <span className="pbmit-fid-title">Projects Work</span>
                          <div className="pbmit-heading-desc">
                            We have a solution of each client Project
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-2 counter-two-right_col">
              <div className="pbmit-col-stretched-right counter-two_rightbox" />
            </div>
          </div>
        </div>
      </section>
      {/* Counter End */}
      {/* Service Start */}
      <section className="section-mdxl">
        <div className="container">
          <div className="pbmit-heading-subheading text-center">
            <h4 className="pbmit-subtitle">Our Services</h4>
            <h2 className="pbmit-title">Get Our Innovative Services</h2>
          </div>
          <div
            className="swiper-slider"
            data-autoplay="false"
            data-loop="false"
            data-dots="false"
            data-arrows="false"
            data-columns={3}
            data-margin={15}
            data-effect="slide"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                {/* Slide1 */}
                <article className="pbmit-ele-service pbmit-service-style-4">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-2/service/service-01.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-box-content-inner">
                        <div className="d-flex align-items-center ">
                          <div className="pbmit-service-title-box">
                            <div className="pbmit-service-cat">
                              <a href="services.html" rel="tag">
                                Strategies
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="services-details.html">
                                Infrastructure Plan
                              </a>
                            </h3>
                          </div>
                          <div className="pbmit-service-icon">
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-smartphone-1" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-service-btn">
                          <a className="btn-arrow" href="services-details.html">
                            <span className="pbmit-btn-text">More Details</span>
                            <i className="pbmit-base-icon-right-arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                {/* Slide2 */}
                <article className="pbmit-ele-service pbmit-service-style-4">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-2/service/service-02.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-box-content-inner">
                        <div className="d-flex align-items-center ">
                          <div className="pbmit-service-title-box">
                            <div className="pbmit-service-cat">
                              <a href="services.html" rel="tag">
                                Web Design
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="services-details.html">
                                Data Structuring
                              </a>
                            </h3>
                          </div>
                          <div className="pbmit-service-icon">
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-marketing" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-service-btn">
                          <a className="btn-arrow" href="services-details.html">
                            <span className="pbmit-btn-text">More Details</span>
                            <i className="pbmit-base-icon-right-arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                {/* Slide3 */}
                <article className="pbmit-ele-service pbmit-service-style-4">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-2/service/service-03.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-box-content-inner">
                        <div className="d-flex align-items-center ">
                          <div className="pbmit-service-title-box">
                            <div className="pbmit-service-cat">
                              <a href="services.html" rel="tag">
                                IT Security
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="services-details.html">IT Consultancy</a>
                            </h3>
                          </div>
                          <div className="pbmit-service-icon">
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-presentation" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-service-btn">
                          <a className="btn-arrow" href="services-details.html">
                            <span className="pbmit-btn-text">More Details</span>
                            <i className="pbmit-base-icon-right-arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                {/* Slide4 */}
                <article className="pbmit-ele-service pbmit-service-style-4">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-2/service/service-04.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-box-content-inner">
                        <div className="d-flex align-items-center ">
                          <div className="pbmit-service-title-box">
                            <div className="pbmit-service-cat">
                              <a href="services.html" rel="tag">
                                Software
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="services-details.html">
                                Marketing Strategy
                              </a>
                            </h3>
                          </div>
                          <div className="pbmit-service-icon">
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-development" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-service-btn">
                          <a className="btn-arrow" href="services-details.html">
                            <span className="pbmit-btn-text">More Details</span>
                            <i className="pbmit-base-icon-right-arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                {/* Slide5 */}
                <article className="pbmit-ele-service pbmit-service-style-4">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-2/service/service-05.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-box-content-inner">
                        <div className="d-flex align-items-center ">
                          <div className="pbmit-service-title-box">
                            <div className="pbmit-service-cat">
                              <a href="services.html" rel="tag">
                                Development
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="services-details.html">
                                Cloud computing
                              </a>
                            </h3>
                          </div>
                          <div className="pbmit-service-icon">
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-laptop" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-service-btn">
                          <a className="btn-arrow" href="services-details.html">
                            <span className="pbmit-btn-text">More Details</span>
                            <i className="pbmit-base-icon-right-arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                {/* Slide6 */}
                <article className="pbmit-ele-service pbmit-service-style-4">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-2/service/service-06.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-box-content-inner">
                        <div className="d-flex align-items-center ">
                          <div className="pbmit-service-title-box">
                            <div className="pbmit-service-cat">
                              <a href="services.html" rel="tag">
                                IT Security
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="services-details.html">
                                Product Development
                              </a>
                            </h3>
                          </div>
                          <div className="pbmit-service-icon">
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-research" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-service-btn">
                          <a className="btn-arrow" href="services-details.html">
                            <span className="pbmit-btn-text">More Details</span>
                            <i className="pbmit-base-icon-right-arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                {/* Slide7 */}
                <article className="pbmit-ele-service pbmit-service-style-4">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-2/service/service-07.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-box-content-inner">
                        <div className="d-flex align-items-center ">
                          <div className="pbmit-service-title-box">
                            <div className="pbmit-service-cat">
                              <a href="services.html" rel="tag">
                                IT Networking
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="services-details.html">
                                IT Cloud Integration
                              </a>
                            </h3>
                          </div>
                          <div className="pbmit-service-icon">
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-marketing" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-service-btn">
                          <a className="btn-arrow" href="services-details.html">
                            <span className="pbmit-btn-text">More Details</span>
                            <i className="pbmit-base-icon-right-arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                {/* Slide8 */}
                <article className="pbmit-ele-service pbmit-service-style-4">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-2/service/service-08.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-box-content-inner">
                        <div className="d-flex align-items-center ">
                          <div className="pbmit-service-title-box">
                            <div className="pbmit-service-cat">
                              <a href="services.html" rel="tag">
                                Web Design
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="services-details.html">
                                Business Reform
                              </a>
                            </h3>
                          </div>
                          <div className="pbmit-service-icon">
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-website" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-service-btn">
                          <a className="btn-arrow" href="services-details.html">
                            <span className="pbmit-btn-text">More Details</span>
                            <i className="pbmit-base-icon-right-arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                {/* Slide9 */}
                <article className="pbmit-ele-service pbmit-service-style-4">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-2/service/service-09.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-box-content-inner">
                        <div className="d-flex align-items-center ">
                          <div className="pbmit-service-title-box">
                            <div className="pbmit-service-cat">
                              <a href="services.html" rel="tag">
                                IT Networking
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="services-details.html">
                                Firewall Advancement
                              </a>
                            </h3>
                          </div>
                          <div className="pbmit-service-icon">
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-programing" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-service-btn">
                          <a className="btn-arrow" href="services-details.html">
                            <span className="pbmit-btn-text">More Details</span>
                            <i className="pbmit-base-icon-right-arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="service-two-bottom_text">
            <p>
              Enabling global enterprises to better manage information the power
              of innovation
              <strong>
                <span>
                  <a href="services.html">Business Service</a>
                </span>
              </strong>
            </p>
          </div>
        </div>
      </section>
      {/* Service End */}
      {/* Testimonial Start */}
      <section className="testimonial_two">
        <div className="container p-0 pbmit-col-stretched-yes pbmit-col-left">
          <div className="row">
            <div className="col-md-12 col-xl-5 testimonial-two-left_col">
              <div className="pbmit-col-stretched-left testimonial-two-left_bg">
                <div
                  className="testimonial-two_fidbox"
                  data-aos="fade-down"
                  data-aos-duration={1000}
                >
                  <div className="pbminfotech-ele-fid-style-6">
                    <div className="d-flex align-items-center">
                      <div className="pbmit-sbox-icon-wrapper">
                        <i className="pbmit-itinc-icon pbmit-itinc-icon-bar-chart" />
                      </div>
                      <div className="pbmit-fld-contents">
                        <h4 className="pbmit-fid-inner">
                          <span
                            className="pbmit-number-rotate numinate"
                            data-appear-animation="animateDigits"
                            data-from={0}
                            data-to={425}
                            data-interval={5}
                            data-before=""
                            data-before-style=""
                            data-after=""
                            data-after-style=""
                          >
                            425
                          </span>
                          <span className="pbmit-fid-sub">
                            <sup>+</sup>
                          </span>
                        </h4>
                        <span className="pbmit-fid-title">Success Stories</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-7 pbmit-col-stretched-yes pbmit-col-right position-relative">
              <div className="pbmit-col-stretched-right testimonial-two-right_bg" />
              <div className="testimonial-two_box">
                <div className="pbmit-heading-subheading text-black">
                  <h4 className="pbmit-subtitle">Our Customer's Review</h4>
                  <h2 className="pbmit-title">
                    What Customer's Talking about us
                  </h2>
                </div>
                <div
                  className="swiper-slider"
                  data-autoplay="false"
                  data-loop="false"
                  data-dots="true"
                  data-arrows="false"
                  data-columns={1}
                  data-margin={15}
                  data-effect="slide"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      {/* Slide1 */}
                      <article className="pbmit-testimonial-style-3">
                        <div className="pbminfotech-post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbminfotech-box-star-ratings">
                              <i className="pbmit-base-icon-star pbmit-active" />
                              <i className="pbmit-base-icon-star pbmit-active" />
                              <i className="pbmit-base-icon-star pbmit-active" />
                              <i className="pbmit-base-icon-star pbmit-active" />
                              <i className="pbmit-base-icon-star pbmit-active" />
                            </div>
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <div>
                                  <div>
                                    I found ITinc Solutions Private Ltd to be
                                    professional, efficient, and very responsive
                                    as we went through the process of modifying
                                    my website. I plan on using them again and
                                    would recommend them.
                                  </div>
                                </div>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-box-img d-flex align-items-center">
                              <div className="pbmit-featured-wrapper">
                                <img
                                  src="images/homepage-2/testimonial/testimonial-01.png"
                                  className="imf-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="pbminfotech-box-author d-flex align-items-center">
                                <h3 className="pbminfotech-box-title">
                                  Amanda Pryor
                                </h3>
                                <div className="pbminfotech-testimonial-detail">
                                  Manager
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="swiper-slide">
                      {/* Slide2 */}
                      <article className="pbmit-testimonial-style-3">
                        <div className="pbminfotech-post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbminfotech-box-star-ratings">
                              <i className="pbmit-base-icon-star pbmit-active" />
                              <i className="pbmit-base-icon-star pbmit-active" />
                              <i className="pbmit-base-icon-star pbmit-active" />
                              <i className="pbmit-base-icon-star pbmit-active" />
                              <i className="pbmit-base-icon-star pbmit-active" />
                            </div>
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <div>
                                  <div>
                                    I found ITinc Solutions Private Ltd to be
                                    professional, efficient, and very responsive
                                    as we went through the process of modifying
                                    my website. I plan on using them again and
                                    would recommend them.
                                  </div>
                                </div>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-box-img d-flex align-items-center">
                              <div className="pbmit-featured-wrapper">
                                <img
                                  src="images/homepage-2/testimonial/testimonial-02.jpg"
                                  className="imf-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="pbminfotech-box-author d-flex align-items-center">
                                <h3 className="pbminfotech-box-title">
                                  Rick Jason
                                </h3>
                                <div className="pbminfotech-testimonial-detail">
                                  Manager
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="swiper-slide">
                      {/* Slide3 */}
                      <article className="pbmit-testimonial-style-3">
                        <div className="pbminfotech-post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbminfotech-box-star-ratings">
                              <i className="pbmit-base-icon-star pbmit-active" />
                              <i className="pbmit-base-icon-star pbmit-active" />
                              <i className="pbmit-base-icon-star pbmit-active" />
                              <i className="pbmit-base-icon-star pbmit-active" />
                              <i className="pbmit-base-icon-star pbmit-active" />
                            </div>
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <div>
                                  <div>
                                    I found ITinc Solutions Private Ltd to be
                                    professional, efficient, and very responsive
                                    as we went through the process of modifying
                                    my website. I plan on using them again and
                                    would recommend them.
                                  </div>
                                </div>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-box-img d-flex align-items-center">
                              <div className="pbmit-featured-wrapper">
                                <img
                                  src="images/homepage-2/testimonial/testimonial-03.jpg"
                                  className="imf-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="pbminfotech-box-author d-flex align-items-center">
                                <h3 className="pbminfotech-box-title">
                                  Cheryl Dunye
                                </h3>
                                <div className="pbminfotech-testimonial-detail">
                                  Managing Director
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="testimonial-two-client_box">
                  <h2 className="client-title">
                    Trusted By The World’s Best Organizations:
                  </h2>
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <article className="pbmit-client-style-1">
                        <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                          <h4 className="pbmit-hide">client 1</h4>
                          <div className="pbmit-client-hover-img">
                            <img
                              src="images/homepage-2/client/client-hover-01.png"
                              alt=""
                            />
                          </div>
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-2/client/clien-whitet-01.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <article className="pbmit-client-style-1">
                        <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                          <h4 className="pbmit-hide">client 1</h4>
                          <div className="pbmit-client-hover-img">
                            <img
                              src="images/homepage-2/client/client-hover-02.png"
                              alt=""
                            />
                          </div>
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-2/client/clien-whitet-02.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <article className="pbmit-client-style-1">
                        <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                          <h4 className="pbmit-hide">client 1</h4>
                          <div className="pbmit-client-hover-img">
                            <img
                              src="images/homepage-2/client/client-hover-03.png"
                              alt=""
                            />
                          </div>
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-2/client/clien-whitet-03.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <article className="pbmit-client-style-1">
                        <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                          <h4 className="pbmit-hide">client 1</h4>
                          <div className="pbmit-client-hover-img">
                            <img
                              src="images/homepage-2/client/client-hover-04.png"
                              alt=""
                            />
                          </div>
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-2/client/clien-whitet-04.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial End */}
      {/* Fid Start */}
      <section className="fid-two_bg pbmit-bg-color-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="pbminfotech-ele-fid-style-4">
                <div className="pbmit-fld-contents">
                  <div className="pbmit-sbox-icon-wrapper">
                    <i className="pbmit-itinc-icon pbmit-itinc-icon-programing" />
                  </div>
                  <div className="pbmit-fid-wrap">
                    <h4 className="pbmit-fid-inner">
                      <span
                        className="pbmit-number-rotate numinate"
                        data-appear-animation="animateDigits"
                        data-from={0}
                        data-to={8792}
                        data-interval={5}
                        data-before=""
                        data-before-style=""
                        data-after=""
                        data-after-style=""
                      >
                        8792
                      </span>
                      <span className="pbmit-fid-sub">
                        <sup>+</sup>
                      </span>
                    </h4>
                    <span className="pbmit-fid-title">Skilled Experts</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="pbminfotech-ele-fid-style-4">
                <div className="pbmit-fld-contents">
                  <div className="pbmit-sbox-icon-wrapper">
                    <i className="pbmit-itinc-icon pbmit-itinc-icon-meeting" />
                  </div>
                  <div className="pbmit-fid-wrap">
                    <h4 className="pbmit-fid-inner">
                      <span
                        className="pbmit-number-rotate numinate"
                        data-appear-animation="animateDigits"
                        data-from={0}
                        data-to={5463}
                        data-interval={5}
                        data-before=""
                        data-before-style=""
                        data-after=""
                        data-after-style=""
                      >
                        5463
                      </span>
                      <span className="pbmit-fid-sub">
                        <sup>+</sup>
                      </span>
                    </h4>
                    <span className="pbmit-fid-title">Business Partners</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="pbminfotech-ele-fid-style-4">
                <div className="pbmit-fld-contents">
                  <div className="pbmit-sbox-icon-wrapper">
                    <i className="pbmit-itinc-icon pbmit-itinc-icon-laptop" />
                  </div>
                  <div className="pbmit-fid-wrap">
                    <h4 className="pbmit-fid-inner">
                      <span
                        className="pbmit-number-rotate numinate"
                        data-appear-animation="animateDigits"
                        data-from={0}
                        data-to={6235}
                        data-interval={5}
                        data-before=""
                        data-before-style=""
                        data-after=""
                        data-after-style=""
                      >
                        6235
                      </span>
                      <span className="pbmit-fid-sub">
                        <sup>+</sup>
                      </span>
                    </h4>
                    <span className="pbmit-fid-title">Launched Products</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="pbminfotech-ele-fid-style-4">
                <div className="pbmit-fld-contents">
                  <div className="pbmit-sbox-icon-wrapper">
                    <i className="pbmit-itinc-icon pbmit-itinc-icon-presentation" />
                  </div>
                  <div className="pbmit-fid-wrap">
                    <h4 className="pbmit-fid-inner">
                      <span
                        className="pbmit-number-rotate numinate"
                        data-appear-animation="animateDigits"
                        data-from={0}
                        data-to={8940}
                        data-interval={5}
                        data-before=""
                        data-before-style=""
                        data-after=""
                        data-after-style=""
                      >
                        8940
                      </span>
                      <span className="pbmit-fid-sub">
                        <sup>+</sup>
                      </span>
                    </h4>
                    <span className="pbmit-fid-title">Finished Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fid End */}
      {/* Team Start */}
      <section className="pbmit-bg-color-light team_two">
        <div className="container p-0 pbmit-col-stretched-yes pbmit-col-right">
          <div className="pbmit-col-stretched-right team-two_bg">
            <div className="row">
              <div className="col-xl-8 col-lg-10">
                <div className="pbmit-heading-subheading">
                  <h4 className="pbmit-subtitle">Our Specialists</h4>
                  <h2 className="pbmit-title">
                    Meet Our Highly Skilled Experts{" "}
                  </h2>
                </div>
              </div>
              <div className="col-xl-4 col-lg-2">
                <div className="team-two-arrow swiper-btn-custom d-flex flex-row-reverse" />
              </div>
              <div
                className="swiper-slider"
                data-autoplay="true"
                data-arrows-class="team-two-arrow"
                data-loop="true"
                data-dots="false"
                data-arrows="true"
                data-columns={5}
                data-margin={30}
                data-effect="slide"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    {/* Slide1 */}
                    <article className="pbmit-ele-team pbmit-team-style-1">
                      <div className="pbminfotech-post-item">
                        <div className="pbminfotech-team-image-box">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-2/team/team-01.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="pbminfotech-box-social-links">
                            <i className="pbmit-base-icon-share" />
                            <ul className="pbmit-social-links pbmit-team-social-links">
                              <li className="pbmit-social-li pbmit-social-facebook">
                                <a href="#" title="Facebook" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-facebook-squared" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-twitter">
                                <a href="#" title="Twitter" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-twitter" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-linkedin">
                                <a href="#" title="LinkedIn" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-linkedin-squared" />
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="pbminfotech-box-content">
                          <div className="pbminfotech-box-content-inner">
                            <div className="pbminfotech-box-team-position">
                              <div className="pbminfotech-box-team-position">
                                CEO/Founder
                              </div>
                            </div>
                            <h3 className="pbmit-team-title">
                              <a href="team-member-details.html">
                                Justin Novak
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    {/* Slide2 */}
                    <article className="pbmit-ele-team pbmit-team-style-1">
                      <div className="pbminfotech-post-item">
                        <div className="pbminfotech-team-image-box">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-2/team/team-02.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="pbminfotech-box-social-links">
                            <i className="pbmit-base-icon-share" />
                            <ul className="pbmit-social-links pbmit-team-social-links">
                              <li className="pbmit-social-li pbmit-social-facebook">
                                <a href="#" title="Facebook" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-facebook-squared" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-twitter">
                                <a href="#" title="Twitter" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-twitter" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-linkedin">
                                <a href="#" title="LinkedIn" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-linkedin-squared" />
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="pbminfotech-box-content">
                          <div className="pbminfotech-box-content-inner">
                            <div className="pbminfotech-box-team-position">
                              <div className="pbminfotech-box-team-position">
                                Managing Director
                              </div>
                            </div>
                            <h3 className="pbmit-team-title">
                              <a href="team-member-details.html">
                                Norton Berry
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    {/* Slide3 */}
                    <article className="pbmit-ele-team pbmit-team-style-1">
                      <div className="pbminfotech-post-item">
                        <div className="pbminfotech-team-image-box">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-2/team/team-03.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="pbminfotech-box-social-links">
                            <i className="pbmit-base-icon-share" />
                            <ul className="pbmit-social-links pbmit-team-social-links">
                              <li className="pbmit-social-li pbmit-social-facebook">
                                <a href="#" title="Facebook" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-facebook-squared" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-twitter">
                                <a href="#" title="Twitter" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-twitter" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-linkedin">
                                <a href="#" title="LinkedIn" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-linkedin-squared" />
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="pbminfotech-box-content">
                          <div className="pbminfotech-box-content-inner">
                            <div className="pbminfotech-box-team-position">
                              <div className="pbminfotech-box-team-position">
                                Investment Expert
                              </div>
                            </div>
                            <h3 className="pbmit-team-title">
                              <a href="team-member-details.html">
                                Edward Smith
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    {/* Slide4 */}
                    <article className="pbmit-ele-team pbmit-team-style-1">
                      <div className="pbminfotech-post-item">
                        <div className="pbminfotech-team-image-box">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-2/team/team-04.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="pbminfotech-box-social-links">
                            <i className="pbmit-base-icon-share" />
                            <ul className="pbmit-social-links pbmit-team-social-links">
                              <li className="pbmit-social-li pbmit-social-facebook">
                                <a href="#" title="Facebook" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-facebook-squared" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-twitter">
                                <a href="#" title="Twitter" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-twitter" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-linkedin">
                                <a href="#" title="LinkedIn" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-linkedin-squared" />
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="pbminfotech-box-content">
                          <div className="pbminfotech-box-content-inner">
                            <div className="pbminfotech-box-team-position">
                              <div className="pbminfotech-box-team-position">
                                Stock Expert
                              </div>
                            </div>
                            <h3 className="pbmit-team-title">
                              <a href="team-member-details.html">
                                David Beckham
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    {/* Slide5 */}
                    <article className="pbmit-ele-team pbmit-team-style-1">
                      <div className="pbminfotech-post-item">
                        <div className="pbminfotech-team-image-box">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-2/team/team-05.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="pbminfotech-box-social-links">
                            <i className="pbmit-base-icon-share" />
                            <ul className="pbmit-social-links pbmit-team-social-links">
                              <li className="pbmit-social-li pbmit-social-facebook">
                                <a href="#" title="Facebook" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-facebook-squared" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-twitter">
                                <a href="#" title="Twitter" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-twitter" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-linkedin">
                                <a href="#" title="LinkedIn" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-linkedin-squared" />
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="pbminfotech-box-content">
                          <div className="pbminfotech-box-content-inner">
                            <div className="pbminfotech-box-team-position">
                              <div className="pbminfotech-box-team-position">
                                Accountancy Expert
                              </div>
                            </div>
                            <h3 className="pbmit-team-title">
                              <a href="team-member-details.html">
                                Edward Willey
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    {/* Slide6 */}
                    <article className="pbmit-ele-team pbmit-team-style-1">
                      <div className="pbminfotech-post-item">
                        <div className="pbminfotech-team-image-box">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-2/team/team-06.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="pbminfotech-box-social-links">
                            <i className="pbmit-base-icon-share" />
                            <ul className="pbmit-social-links pbmit-team-social-links">
                              <li className="pbmit-social-li pbmit-social-facebook">
                                <a href="#" title="Facebook" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-facebook-squared" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-twitter">
                                <a href="#" title="Twitter" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-twitter" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-linkedin">
                                <a href="#" title="LinkedIn" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-linkedin-squared" />
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="pbminfotech-box-content">
                          <div className="pbminfotech-box-content-inner">
                            <div className="pbminfotech-box-team-position">
                              <div className="pbminfotech-box-team-position">
                                Client Manager
                              </div>
                            </div>
                            <h3 className="pbmit-team-title">
                              <a href="team-member-details.html">Henry David</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team End */}
      {/* Video Start */}
      <section className="video-two_bg">
        <div className="container">
          <h2 className="video-title">
            We Solve Problems Related to IT <br /> <span>Infrastructure.</span>
          </h2>
          <div className="video-two_text">
            <p>We’ve designed a project that allows our stewards.</p>
          </div>
          <div className="row align-items-center g-3">
            <div className="col-md-12 col-xl-6">
              <div className="video-two_playbtn">
                <div className="video-two_playbox">
                  <span>
                    <i className="fa fa-play" />
                  </span>
                  <a
                    href="https://www.youtube.com/watch?v=RvQwLE6x5-E"
                    className="pbmin-lightbox-video"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-6">
              <div className="video-text_editor">
                <p>
                  <span>HOW IT WORKS</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video End */}
      {/* Appoinment Start */}
      <section className="appoinment_two">
        <div className="container">
          <div className="appoinment-two_bg">
            <div className="row g-0">
              <div className="col-md-12 col-xl-4">
                <h2 className="appoinment-title">
                  Subscribe to our newsletter
                </h2>
                <div
                  className="appoinment-two_ihbox"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                >
                  <div className="appoinment-two_icon">
                    <i className="pbmit-itinc-icon pbmit-itinc-icon-open" />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-xl-8">
                <div className="appoinment-two_box">
                  <form>
                    <input
                      type="email"
                      name="EMAIL"
                      placeholder="Your email address"
                      required=""
                    />
                    <button type="submit" value="Sign up">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Appoinment End */}
      {/* Blog Start */}
      <section className="section-md">
        <div className="container">
          <div className="pbmit-heading-subheading text-center">
            <h4 className="pbmit-subtitle">Recent News</h4>
            <h2 className="pbmit-title">What's Going on our Blog?</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <article className="pbmit-blog-style-2">
                <div className="post-item">
                  <div className="pbmit-featured-container">
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-2/blog/blog-01.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbmit-meta-container">
                      <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                        <i className="pbmit-base-icon-calendar-2" /> Jun 03,
                        2020
                        <span />
                      </div>
                      <div className="pbmit-meta-author-wrapper pbmit-meta-line">
                        <a
                          href="blog-classic.html"
                          title="Posted by admin"
                          rel="author"
                        >
                          <i className="pbmit-base-icon-user-1" /> by admin
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pbminfotech-box-content">
                    <h3 className="pbmit-post-title">
                      <a href="blog-single-details.html">
                        How to become a successful businessman
                      </a>
                    </h3>
                    <div className="pbminfotech-box-desc">
                      <div className="pbmit-read-more-link">
                        <a href="blog-single-details.html">
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="pbmit-blog-style-2">
                <div className="post-item">
                  <div className="pbmit-featured-container">
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-2/blog/blog-02.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbmit-meta-container">
                      <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                        <i className="pbmit-base-icon-calendar-2" /> Jun 03,
                        2020
                        <span />
                      </div>
                      <div className="pbmit-meta-author-wrapper pbmit-meta-line">
                        <a
                          href="blog-classic.html"
                          title="Posted by admin"
                          rel="author"
                        >
                          <i className="pbmit-base-icon-user-1" /> by admin
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pbminfotech-box-content">
                    <h3 className="pbmit-post-title">
                      <a href="blog-single-details.html">
                        10 Efficient &amp; Measurable Benefits of Software
                      </a>
                    </h3>
                    <div className="pbminfotech-box-desc">
                      <div className="pbmit-read-more-link">
                        <a href="blog-single-details.html">
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="pbmit-blog-style-2">
                <div className="post-item">
                  <div className="pbmit-featured-container">
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-2/blog/blog-03.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbmit-meta-container">
                      <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                        <i className="pbmit-base-icon-calendar-2" /> Jun 03,
                        2020
                        <span />
                      </div>
                      <div className="pbmit-meta-author-wrapper pbmit-meta-line">
                        <a
                          href="blog-classic.html"
                          title="Posted by admin"
                          rel="author"
                        >
                          <i className="pbmit-base-icon-user-1" /> by admin
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pbminfotech-box-content">
                    <h3 className="pbmit-post-title">
                      <a href="blog-single-details.html">
                        Exploring Latest Web Design Together With Theme
                      </a>
                    </h3>
                    <div className="pbminfotech-box-desc">
                      <div className="pbmit-read-more-link">
                        <a href="blog-single-details.html">
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* Blog End */}
    </div>
  );
}
