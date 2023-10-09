import React from "react";

export default function page() {
  return (
    <>
      {/* Header Main Area */}
      <header className="site-header header-style-1">
        <div className="pre-header">
          <div className="container-fluid">
            <div className="d-flex justify-content-between">
              <div className="pbmit-pre-header-left">
                <a href="#">Now Hiring:</a> Are you a driven and motivated 1st
                Line IT Support Engineer?
              </div>
              <div className="pbmit-pre-header-right">
                <ul className="pbmit-contact-info">
                  <li>
                    <i className="pbmit-base-icon-contact" /> Make a call : +1
                    (212) 255-5511
                  </li>
                  <li>
                    <i className="pbmit-base-icon-marker" /> Los Angeles
                    Gournadi, 1230 Bariasl
                  </li>
                </ul>
                <ul className="pbmit-social-links">
                  <li className="pbmit-social-li pbmit-social-facebook">
                    <a href="#" target="_blank">
                      <span>
                        <i className="pbmit-base-icon-facebook-squared" />
                      </span>
                    </a>
                  </li>
                  <li className="pbmit-social-li pbmit-social-twitter">
                    <a href="#" target="_blank">
                      <span>
                        <i className="pbmit-base-icon-twitter" />
                      </span>
                    </a>
                  </li>
                  <li className="pbmit-social-li pbmit-social-linkedin">
                    <a href="#" target="_blank">
                      <span>
                        <i className="pbmit-base-icon-linkedin-squared" />
                      </span>
                    </a>
                  </li>
                  <li className="pbmit-social-li pbmit-social-youtube">
                    <a href="#" target="_blank">
                      <span>
                        <i className="pbmit-base-icon-youtube-play" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="site-header-menu">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
              <div className="pbmit-logo-menuarea">
                <div className="site-branding">
                  <span className="site-title">
                    <a href="index-2.html">
                      <img
                        className="logo-img"
                        src="images/homepage-1/logo.png"
                        alt="ITinc"
                      />
                    </a>
                  </span>
                </div>
                <div className="site-navigation">
                  <nav className="main-menu navbar-expand-xl navbar-light">
                    <div className="navbar-header">
                      {/* Toggle Button */}
                      <button className="navbar-toggler" type="button">
                        <i className="pbmit-base-icon-menu-1" />
                      </button>
                    </div>
                    <div className="pbmit-mobile-menu-bg" />
                    <div
                      className="collapse navbar-collapse clearfix show"
                      id="pbmit-menu"
                    >
                      <div className="pbmit-menu-wrap">
                        <span className="closepanel">
                          <i className="pbmit-base-icon-cancel" />
                        </span>
                        <ul className="navigation clearfix">
                          <li className="dropdown active">
                            <a href="index-2.html">Home</a>
                            <ul>
                              <li className="active">
                                <a href="index-2.html">Homepage 1</a>
                              </li>
                              <li>
                                <a href="homepage-2.html">Homepage 2</a>
                              </li>
                              <li>
                                <a href="homepage-3.html">Homepage 3</a>
                              </li>
                              <li>
                                <a href="homepage-4.html">Homepage 4</a>
                              </li>
                              <li>
                                <a href="homepage-5.html">Homepage 5</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Pages</a>
                            <ul>
                              <li>
                                <a href="about-us.html">About us</a>
                              </li>
                              <li>
                                <a href="about-us-2.html">About us 2</a>
                              </li>
                              <li>
                                <a href="our-history.html">Our History</a>
                              </li>
                              <li>
                                <a href="our-plans.html">Our Plans</a>
                              </li>
                              <li>
                                <a href="our-team-member.html">
                                  Our Team Member
                                </a>
                              </li>
                              <li>
                                <a href="team-member-details.html">
                                  Team Member Details
                                </a>
                              </li>
                              <li>
                                <a href="faq.html">FAQ</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="services.html">Services</a>
                            <ul>
                              <li>
                                <a href="services-details.html">
                                  Services Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Projects</a>
                            <ul>
                              <li>
                                <a href="project-style-1.html">
                                  Project Style 1
                                </a>
                              </li>
                              <li>
                                <a href="project-style-2.html">
                                  Project Style 2
                                </a>
                              </li>
                              <li>
                                <a href="project-single-details.html">
                                  Project Single Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Blog</a>
                            <ul>
                              <li>
                                <a href="blog-classic.html">Blog Classic</a>
                              </li>
                              <li>
                                <a href="blog-grid-view.html">Blog Grid View</a>
                              </li>
                              <li>
                                <a href="blog-single-details.html">
                                  Blog Single Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact-us.html">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="pbmit-right-box">
                <div className="pbmit-header-contactinfo">
                  <a href="#">
                    <span className="pbmit-header-button-text-1">
                      +0 123 456 78000
                    </span>
                    <span className="pbmit-header-button-text-2">
                      Mon - Fri: 09:00 am to 6:00 pm
                    </span>
                  </a>
                </div>
                <div className="pbmit-header-search-btn">
                  <a href="#">
                    <i className="pbmit-base-icon-search-1" />
                  </a>
                </div>
                <div className="pbmit-header-button">
                  <a className="pbmit-btn" href="contact-us.html">
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pbmit-slider-area">
          {/* START Slider Demo 1 REVOLUTION SLIDER 6.5.24 */}
          <p className="rs-p-wp-fix" />
          <rs-module-wrap
            id="rev_slider_1_1_wrapper"
            data-alias="slider-demo-1"
            data-source="gallery"
            style={{
              visibility: "hidden",
              background: "transparent",
              padding: 0,
              margin: "0px auto",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            <rs-module id="rev_slider_1_1" data-version="6.5.24">
              <rs-slides>
                <rs-slide
                  style={{ position: "absolute" }}
                  data-key="rs-1"
                  data-title="Slide"
                  data-thumb="revolution/images/slider-01-new-a-100x50.jpg"
                  data-anim="ms:600;r:0;"
                  data-in="o:0;"
                  data-out="a:false;"
                >
                  <img
                    src="revolution/images/slider-01-new-a.jpg"
                    alt=""
                    title="slider-01-new-a"
                    width={1920}
                    height={800}
                    className="rev-slidebg tp-rs-img rs-lazyload"
                    data-lazyload="revolution/images/slider-01-new-a.jpg"
                    data-bg="p:center top;"
                    data-no-retina=""
                  />
                  {/*
                   */}
                  <rs-layer
                    id="slider-1-slide-1-layer-0"
                    data-type="text"
                    data-rsp_ch="on"
                    data-xy="xo:30px,30px,30px,15px;yo:256px,256px,123px,87px;"
                    data-text="s:90,90,60,40;l:90,90,60,42;ls:-2px,-2px,-1px,0px;fw:700;"
                    data-frame_0="x:-50,-50,-31,-19;"
                    data-frame_1="st:1190;sp:1000;sR:1190;"
                    data-frame_999="o:0;st:w;sR:6810;"
                    style={{ zIndex: 8, fontFamily: '"Rajdhani"' }}
                  >
                    <span className="rev-stroke"> POWERFUL</span> DIGITAL <br />
                    SOLUTIONS
                  </rs-layer>
                  {/*

								*/}
                  <a
                    id="slider-1-slide-1-layer-8"
                    className="rs-layer pbmin-lightbox-video"
                    href="https://www.youtube.com/watch?v=RvQwLE6x5-E"
                    target="_self"
                    rel="nofollow"
                    data-type="text"
                    data-bsh="c:rgba(0,0,0,0.5);"
                    data-rsp_ch="on"
                    data-xy="xo:295px,295px,279px,18px;yo:473px,473px,280px,60px;"
                    data-text="w:normal;s:13,13,13,11;l:24,24,20,24;ls:1px,1px,2px,1px;fw:700;td:underline;"
                    data-vbility="t,t,t,f"
                    data-border="bor:6px,6px,6px,6px;"
                    data-frame_0="y:50,50,31,19;"
                    data-frame_1="st:2160;sp:1000;sR:2160;"
                    data-frame_999="o:0;st:w;sR:5840;"
                    style={{
                      zIndex: 13,
                      backgroundColor: "rgba(255,255,255,0)",
                      fontFamily: '"Rajdhani"',
                      textTransform: "uppercase",
                      boxShadow: "0px 9px 35px 0px rgba(26, 47, 106, 0.07)",
                    }}
                  >
                    HOW IT WORKS
                  </a>
                  {/*

								*/}
                  <rs-layer
                    id="slider-1-slide-1-layer-12"
                    data-type="text"
                    data-rsp_ch="on"
                    data-xy="xo:50px,50px,31px,19px;yo:50px,50px,31px,19px;"
                    data-text="w:normal;s:20,20,12,7;l:25,25,15,9;"
                    data-frame_999="o:0;st:w;sR:8700;"
                    style={{ zIndex: 10, fontFamily: '"Roboto"' }}
                  ></rs-layer>
                  {/*

								*/}
                  <a
                    id="slider-1-slide-1-layer-14"
                    className="rs-layer pbmin-lightbox-video"
                    href="https://www.youtube.com/watch?v=RvQwLE6x5-E"
                    target="_self"
                    rel="nofollow"
                    data-type="button"
                    data-rsp_ch="on"
                    data-xy="xo:223px,223px,212px,140px;yo:458px,458px,266px,191px;"
                    data-text="w:normal;s:20,20,18,14;l:60,60,55,43;a:center;"
                    data-dim="w:60px,60px,55px,43px;h:60px,60px,55px,43px;minw:60px,60px,none,none;minh:60px,60px,none,none;"
                    data-border="bor:50%,50%,50%,50%;"
                    data-frame_0="x:0,0,0px,0px;y:50,50,46px,36px;"
                    data-frame_1="x:0,0,0px,0px;y:0,0,0px,0px;st:1980;sp:1000;sR:1980;"
                    data-frame_999="o:0;st:w;sR:6020;"
                    style={{
                      zIndex: 12,
                      backgroundColor: "#8cbc43",
                      fontFamily: '"Roboto"',
                      textTransform: "uppercase",
                    }}
                  >
                    <i className="fa-play" />
                  </a>
                  {/*

								*/}
                  <rs-layer
                    id="slider-1-slide-1-layer-15"
                    data-type="text"
                    data-color="#8cbc43"
                    data-bsh="c:rgba(0,0,0,0.5);"
                    data-rsp_ch="on"
                    data-xy="xo:30px,30px,30px,18px;yo:225px,225px,96px,60px;"
                    data-text="w:normal;s:18,18,15,11;l:24,24,20,24;ls:4px,4px,2px,1px;fw:700;"
                    data-vbility="t,t,t,f"
                    data-border="bor:6px,6px,6px,6px;"
                    data-frame_0="y:-50,-50,-31,-19;"
                    data-frame_1="st:630;sp:1000;sR:630;"
                    data-frame_999="o:0;st:w;sR:7370;"
                    style={{
                      zIndex: 9,
                      backgroundColor: "rgba(255,255,255,0)",
                      fontFamily: '"Rajdhani"',
                      textTransform: "uppercase",
                      boxShadow: "0px 9px 35px 0px rgba(26, 47, 106, 0.07)",
                    }}
                  >
                    For Millions of Users
                  </rs-layer>
                  {/*

								*/}
                  <a
                    id="slider-1-slide-1-layer-16"
                    className="rs-layer rev-btn"
                    href="contact-us.html"
                    target="_self"
                    data-type="button"
                    data-color="#202426"
                    data-rsp_ch="on"
                    data-xy="xo:30px,30px,30px,15px;yo:461px,461px,270px,190px;"
                    data-text="w:normal;s:14,14,13,13;l:55,55,50,45;ls:0px,0px,1px,1px;fw:700;"
                    data-dim="minh:0px,0px,none,none;"
                    data-padding="r:40,40,30,19;l:40,40,30,19;"
                    data-border="bor:5px,5px,5px,5px;"
                    data-frame_0="y:50,50,31,19;"
                    data-frame_1="st:1640;sp:1000;sR:1640;"
                    data-frame_999="o:0;st:w;sR:6360;"
                    data-frame_hover="c:#fff;bgc:#8cbc43;bor:5px,5px,5px,5px;bri:100%;"
                    style={{
                      zIndex: 11,
                      backgroundColor: "#ffffff",
                      fontFamily: '"Rajdhani"',
                      textTransform: "uppercase",
                      textDecoration: "none",
                    }}
                  >
                    Readmore <i className="pbmit-base-icon-right-arrow" />
                  </a>
                  {/*
                   */}{" "}
                </rs-slide>
                <rs-slide
                  style={{ position: "absolute" }}
                  data-key="rs-6"
                  data-title="Slide"
                  data-thumb="revolution/images/slider-01-new-b-100x50.jpg"
                  data-anim="ms:600;r:0;"
                  data-in="o:0;"
                  data-out="a:false;"
                >
                  <img
                    src="revolution/images/slider-01-new-b.jpg"
                    alt=""
                    title="slider-01-new-b"
                    width={1920}
                    height={800}
                    className="rev-slidebg tp-rs-img rs-lazyload"
                    data-lazyload="revolution/images/slider-01-new-b.jpg"
                    data-bg="p:center top;"
                    data-no-retina=""
                  />
                  {/*
                   */}
                  <rs-layer
                    id="slider-1-slide-6-layer-0"
                    data-type="text"
                    data-rsp_ch="on"
                    data-xy="xo:30px,30px,30px,15px;yo:256px,256px,123px,87px;"
                    data-text="s:90,90,60,40;l:90,90,60,37;ls:-2px,-2px,-1px,0px;fw:700;"
                    data-frame_0="x:-50,-50,-31,-19;"
                    data-frame_1="st:1190;sp:1000;sR:1190;"
                    data-frame_999="o:0;st:w;sR:6810;"
                    style={{ zIndex: 8, fontFamily: '"Rajdhani"' }}
                  >
                    <span className="rev-stroke"> POWERFUL</span> DIGITAL <br />
                    SOLUTIONS
                  </rs-layer>
                  {/*

								*/}
                  <a
                    id="slider-1-slide-6-layer-8"
                    className="rs-layer pbmin-lightbox-video"
                    href="https://www.youtube.com/watch?v=RvQwLE6x5-E"
                    target="_self"
                    rel="nofollow"
                    data-type="text"
                    data-bsh="c:rgba(0,0,0,0.5);"
                    data-rsp_ch="on"
                    data-xy="xo:295px,295px,279px,18px;yo:473px,473px,280px,60px;"
                    data-text="w:normal;s:13,13,13,11;l:24,24,20,24;ls:1px,1px,2px,1px;fw:700;td:underline;"
                    data-vbility="t,t,t,f"
                    data-border="bor:6px,6px,6px,6px;"
                    data-frame_0="y:50,50,31,19;"
                    data-frame_1="st:2160;sp:1000;sR:2160;"
                    data-frame_999="o:0;st:w;sR:5840;"
                    style={{
                      zIndex: 13,
                      backgroundColor: "rgba(255,255,255,0)",
                      fontFamily: '"Rajdhani"',
                      textTransform: "uppercase",
                      boxShadow: "0px 9px 35px 0px rgba(26, 47, 106, 0.07)",
                    }}
                  >
                    HOW IT WORKS
                  </a>
                  {/*

								*/}
                  <rs-layer
                    id="slider-1-slide-6-layer-12"
                    data-type="text"
                    data-rsp_ch="on"
                    data-xy="xo:50px,50px,31px,19px;yo:50px,50px,31px,19px;"
                    data-text="w:normal;s:20,20,12,7;l:25,25,15,9;"
                    data-frame_999="o:0;st:w;sR:8700;"
                    style={{ zIndex: 10, fontFamily: '"Roboto"' }}
                  ></rs-layer>
                  {/*

								*/}
                  <a
                    id="slider-1-slide-6-layer-14"
                    className="rs-layer pbmin-lightbox-video"
                    href="https://www.youtube.com/watch?v=RvQwLE6x5-E"
                    target="_self"
                    rel="nofollow"
                    data-type="button"
                    data-rsp_ch="on"
                    data-xy="xo:223px,223px,212px,141px;yo:458px,458px,266px,191px;"
                    data-text="w:normal;s:20,20,18,14;l:60,60,55,43;a:center;"
                    data-dim="w:60px,60px,55px,43px;h:60px,60px,55px,43px;minw:60px,60px,none,none;minh:60px,60px,none,none;"
                    data-border="bor:50%,50%,50%,50%;"
                    data-frame_0="x:0,0,0px,0px;y:50,50,46px,36px;"
                    data-frame_1="x:0,0,0px,0px;y:0,0,0px,0px;st:1980;sp:1000;sR:1980;"
                    data-frame_999="o:0;st:w;sR:6020;"
                    style={{
                      zIndex: 12,
                      backgroundColor: "#8cbc43",
                      fontFamily: '"Roboto"',
                      textTransform: "uppercase",
                    }}
                  >
                    <i className="fa-play" />
                  </a>
                  {/*

								*/}
                  <rs-layer
                    id="slider-1-slide-6-layer-15"
                    data-type="text"
                    data-color="#8cbc43"
                    data-bsh="c:rgba(0,0,0,0.5);"
                    data-rsp_ch="on"
                    data-xy="xo:30px,30px,30px,18px;yo:225px,225px,96px,60px;"
                    data-text="w:normal;s:18,18,15,11;l:24,24,20,24;ls:4px,4px,2px,1px;fw:700;"
                    data-vbility="t,t,t,f"
                    data-border="bor:6px,6px,6px,6px;"
                    data-frame_0="y:-50,-50,-31,-19;"
                    data-frame_1="st:630;sp:1000;sR:630;"
                    data-frame_999="o:0;st:w;sR:7370;"
                    style={{
                      zIndex: 9,
                      backgroundColor: "rgba(255,255,255,0)",
                      fontFamily: '"Rajdhani"',
                      textTransform: "uppercase",
                      boxShadow: "0px 9px 35px 0px rgba(26, 47, 106, 0.07)",
                    }}
                  >
                    For Millions of Users
                  </rs-layer>
                  {/*

								*/}
                  <a
                    id="slider-1-slide-1-layer-16"
                    className="rs-layer rev-btn"
                    href="contact-us.html"
                    target="_self"
                    data-type="button"
                    data-color="#202426"
                    data-rsp_ch="on"
                    data-xy="xo:30px,30px,30px,15px;yo:461px,461px,270px,190px;"
                    data-text="w:normal;s:14,14,13,13;l:55,55,50,45;ls:0px,0px,1px,1px;fw:700;"
                    data-dim="minh:0px,0px,none,none;"
                    data-padding="r:40,40,30,19;l:40,40,30,19;"
                    data-border="bor:5px,5px,5px,5px;"
                    data-frame_0="y:50,50,31,19;"
                    data-frame_1="st:1640;sp:1000;sR:1640;"
                    data-frame_999="o:0;st:w;sR:6360;"
                    data-frame_hover="c:#fff;bgc:#8cbc43;bor:5px,5px,5px,5px;bri:100%;"
                    style={{
                      zIndex: 11,
                      backgroundColor: "#ffffff",
                      fontFamily: '"Rajdhani"',
                      textTransform: "uppercase",
                      textDecoration: "none",
                    }}
                  >
                    Readmore <i className="pbmit-base-icon-right-arrow" />
                  </a>
                  {/*
                   */}{" "}
                </rs-slide>
              </rs-slides>
            </rs-module>
          </rs-module-wrap>
          {/* END REVOLUTION SLIDER */}
        </div>
      </header>
      {/* Header Main Area End Here */}
      {/* Page Content */}
      <div className="page-content">
        {/* Ihbox Start */}
        <section className="ihbox-section-one">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <article className="pbmit-miconheading-style-3">
                  <div className="pbmit-ihbox pbmit-ihbox-style-3">
                    <div className="d-flex">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                          <img
                            src="images/homepage-1/icon/icon-01.png"
                            alt="Product Engineering"
                          />
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <h2 className="pbmit-element-title">
                          Product Engineering
                        </h2>
                        <div className="pbmit-heading-desc">
                          Duis eleifend molestie leo at mollis sanctus intro.
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-4">
                <article className="pbmit-miconheading-style-3">
                  <div className="pbmit-ihbox pbmit-ihbox-style-3">
                    <div className="d-flex">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                          <img
                            src="images/homepage-1/icon/icon-02.png"
                            alt="Business Security"
                          />
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <h2 className="pbmit-element-title">
                          Business Security
                        </h2>
                        <div className="pbmit-heading-desc">
                          Duis eleifend molestie leo at mollis sanctus intro.
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-4">
                <article className="pbmit-miconheading-style-3">
                  <div className="pbmit-ihbox pbmit-ihbox-style-3">
                    <div className="d-flex">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                          <img
                            src="images/homepage-1/icon/icon-03.png"
                            alt="Managed IT services"
                          />
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <h2 className="pbmit-element-title">
                          Managed IT services
                        </h2>
                        <div className="pbmit-heading-desc">
                          Duis eleifend molestie leo at mollis sanctus intro.
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="ihbox-one-bottom-text">
              <p>
                Join our team – We are looking for talented &amp; driven people
                to come work with us
                <strong>
                  <span>
                    <a href="#">Available Positions</a>
                  </span>
                </strong>
              </p>
            </div>
          </div>
        </section>
        {/* Ihbox End */}
        {/* About Start */}
        <section className="section-lg about-section_one">
          <div className="container">
            <div className="row g-0">
              <div className="col-md-12 col-xl-6">
                <div className="about-one_leftbox">
                  <div className="about-one_ihbox">
                    <div className="pbmit-ihbox pbmit-ihbox-style-10">
                      <div className="pbmit-ihbox-box d-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                            <img
                              src="images/homepage-1/author-01.jpg"
                              alt="3.5k"
                            />
                          </div>
                        </div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">3.5k</h2>
                          <div className="pbmit-heading-desc">
                            Satisfied Client
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-xl-6">
                <div className="about-one_content">
                  <div className="pbmit-heading-subheading">
                    <h4 className="pbmit-subtitle">30 Years of Experience</h4>
                    <h2 className="pbmit-title">
                      We Execute Our Ideas From <br />
                      the Start to Finish
                    </h2>
                    <div className="pbmit-heading-desc">
                      On the other hand we denounce with righteous indignation
                      hill and dislike men who are so beguiled and demoralized.
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-group list-group-borderless">
                        <li className="list-group-item">
                          <span className="pbmit-icon-list-icon">
                            <i className="fa fa-check-circle" />
                          </span>
                          <span className="pbmit-icon-list-text">
                            Cost of supplies and equipment
                          </span>
                        </li>
                        <li className="list-group-item">
                          <span className="pbmit-icon-list-icon">
                            <i className="fa fa-check-circle" />
                          </span>
                          <span className="pbmit-icon-list-text">
                            Change the volume of expected
                          </span>
                        </li>
                        <li className="list-group-item">
                          <span className="pbmit-icon-list-icon">
                            <i className="fa fa-check-circle" />
                          </span>
                          <span className="pbmit-icon-list-text">
                            Bibend auctor nisi elit volume{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-group list-group-borderless">
                        <li className="list-group-item">
                          <span className="pbmit-icon-list-icon">
                            <i className="fa fa-check-circle" />
                          </span>
                          <span className="pbmit-icon-list-text">
                            Bibend auctor nisi elit volume
                          </span>
                        </li>
                        <li className="list-group-item">
                          <span className="pbmit-icon-list-icon">
                            <i className="fa fa-check-circle" />
                          </span>
                          <span className="pbmit-icon-list-text">
                            Change the volume of expected
                          </span>
                        </li>
                        <li className="list-group-item">
                          <span className="pbmit-icon-list-icon">
                            <i className="fa fa-check-circle" />
                          </span>
                          <span className="pbmit-icon-list-text">
                            Cost of supplies and equipment
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet aenean
                    sollicitudin lorem quis bibend um auctor nisi elit consequat
                    ipsum.On the other hand we denounce with righteous
                    indignation hill and dislike men who are so beguiled.
                  </p>
                  <div className="about-one-right_bottom">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="mb-0">
                          Join our team – come work with us.
                        </p>
                      </div>
                      <div className="col-md-6">
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
            </div>
          </div>
        </section>
        {/* About End */}
        {/* Work Process Start */}
        <section className="section-lgb">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="pbmit-heading-subheading">
                  <h4 className="pbmit-subtitle">Our Work Process</h4>
                  <h2 className="pbmit-title">
                    How ITinc help of your business grow and successful
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="work-process-one-desc">
                  <p>
                    We help digital companies to volume their self-interest and
                    get a space Eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.Nemo enim
                    ipsam voluptatem quia voluptas.
                  </p>
                </div>
              </div>
            </div>
            <div className="work-process-one-ihbox">
              <div className="row g-0">
                <div className="col-md-6 col-xl-3 pbmit-inbox-col-wrapper">
                  <div className="pbmit-ihbox-style-15">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-ihbox-headingicon">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <i className="pbmit-itinc-icon pbmit-itinc-icon-opportunity" />
                          </div>
                        </div>
                        <div className="pbmit-ihbox-box-number">01</div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">
                            IT Design Project
                          </h2>
                          <div className="pbmit-heading-desc">
                            Design and propose products improvements through
                            periodical and accurate testing.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 pbmit-inbox-col-wrapper">
                  <div className="pbmit-ihbox-style-15">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-ihbox-headingicon">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <i className="pbmit-itinc-icon pbmit-itinc-icon-marketing" />
                          </div>
                        </div>
                        <div className="pbmit-ihbox-box-number">02</div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">
                            Product Engineer
                          </h2>
                          <div className="pbmit-heading-desc">
                            Develop and propose product improvements through
                            periodical and accurate testing.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 pbmit-inbox-col-wrapper">
                  <div className="pbmit-ihbox-style-15">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-ihbox-headingicon">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <i className="pbmit-itinc-icon pbmit-itinc-icon-call-center" />
                          </div>
                        </div>
                        <div className="pbmit-ihbox-box-number">03</div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">
                            Cloud Integration
                          </h2>
                          <div className="pbmit-heading-desc">
                            Cloud Integrate for product improvements through
                            periodical and accurate testing.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 pbmit-inbox-col-wrapper">
                  <div className="pbmit-ihbox-style-15">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-ihbox-headingicon">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <i className="pbmit-itinc-icon pbmit-itinc-icon-speaker" />
                          </div>
                        </div>
                        <div className="pbmit-ihbox-box-number">04</div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">
                            IT Consultancy
                          </h2>
                          <div className="pbmit-heading-desc">
                            IT Consultancy for products improvements through
                            periodical and accurate testing.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Work Process End */}
        {/* Service Start */}
        <section className="service-section_one">
          <div className="container-fluid p-0 pbmit-col-stretched-yes pbmit-col-right">
            <div className="row">
              <div className="col-md-12 col-xl-3">
                <div className="service-one_leftbox">
                  <div className="service-one-arrow swiper-btn-custom d-flex flex-row-reverse">
                    <div className="pbmit-heading-subheading text-white">
                      <h4 className="pbmit-subtitle">Our Service</h4>
                      <h2 className="pbmit-title">
                        We provide best solutions for Preparing your success
                      </h2>
                      <div className="pbmit-heading-desc">
                        We help digital companies to volume their self-interest
                        and get a space. Eaque ipsa quae ab illo inventore
                        veritatis et quasi.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-xl-9 service-one-right_col">
                <div className="pbmit-col-stretched-right service-one-bg" />
                <div className="service-one_rightbox">
                  <div
                    className="swiper-slider"
                    data-arrows-class="service-one-arrow"
                    data-autoplay="true"
                    data-loop="true"
                    data-dots="false"
                    data-arrows="true"
                    data-columns={4}
                    data-margin={15}
                    data-effect="slide"
                  >
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        {/* Slide1 */}
                        <article className="pbmit-ele-service pbmit-service-style-3">
                          <div className="pbminfotech-post-item pbminfotech-overlay-box">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-1/service/service-01.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-smartphone-1" />
                            </div>
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-box-content-inner">
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
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        {/* Slide2 */}
                        <article className="pbmit-ele-service pbmit-service-style-3">
                          <div className="pbminfotech-post-item pbminfotech-overlay-box">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-1/service/service-02.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-marketing" />
                            </div>
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-box-content-inner">
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
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        {/* Slide3 */}
                        <article className="pbmit-ele-service pbmit-service-style-3">
                          <div className="pbminfotech-post-item pbminfotech-overlay-box">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-1/service/service-03.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-presentation" />
                            </div>
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-box-content-inner">
                                <div className="pbmit-service-cat">
                                  <a href="services.html" rel="tag">
                                    IT Security
                                  </a>
                                </div>
                                <h3 className="pbmit-service-title">
                                  <a href="services-details.html">
                                    IT Consultancy
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        {/* Slide4 */}
                        <article className="pbmit-ele-service pbmit-service-style-3">
                          <div className="pbminfotech-post-item pbminfotech-overlay-box">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-1/service/service-04.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-development" />
                            </div>
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-box-content-inner">
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
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        {/* Slide5 */}
                        <article className="pbmit-ele-service pbmit-service-style-3">
                          <div className="pbminfotech-post-item pbminfotech-overlay-box">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-1/service/service-05.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-laptop" />
                            </div>
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-box-content-inner">
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
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        {/* Slide6 */}
                        <article className="pbmit-ele-service pbmit-service-style-3">
                          <div className="pbminfotech-post-item pbminfotech-overlay-box">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-1/service/service-06.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-research" />
                            </div>
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-box-content-inner">
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
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        {/* Slide7 */}
                        <article className="pbmit-ele-service pbmit-service-style-3">
                          <div className="pbminfotech-post-item pbminfotech-overlay-box">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-1/service/service-07.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-marketing" />
                            </div>
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-box-content-inner">
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
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        {/* Slide8 */}
                        <article className="pbmit-ele-service pbmit-service-style-3">
                          <div className="pbminfotech-post-item pbminfotech-overlay-box">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-1/service/service-08.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-website" />
                            </div>
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-box-content-inner">
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
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        {/* Slide9 */}
                        <article className="pbmit-ele-service pbmit-service-style-3">
                          <div className="pbminfotech-post-item pbminfotech-overlay-box">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-1/service/service-09.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="pbmit-service-icon-wrapper">
                              <i className="pbmit-itinc-icon pbmit-itinc-icon-programing" />
                            </div>
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-box-content-inner">
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
        {/* Service End */}
        {/* Counter Start */}
        <section className="counter-section_one">
          <div className="container">
            <div className="pbmit-heading-subheading text-center pb-4">
              <h4 className="pbmit-subtitle">Numbers Are Talking</h4>
              <h2 className="pbmit-title">
                Let’s talk about our business growth in <br />
                IT consulting solution
              </h2>
            </div>
            <div className="row align-items-center g-0">
              <div className="col-md-12 col-xl-6">
                <div className="pbminfotech-ele-fid-style-1 counter-one-first_box">
                  <div className="pbmit-fld-contents">
                    <div className="pbmit-fld-wrap">
                      <h4 className="pbmit-fid-inner">
                        <span
                          className="pbmit-number-rotate numinate"
                          data-appear-animation="animateDigits"
                          data-from={0}
                          data-to={35}
                          data-interval={5}
                          data-before=""
                          data-before-style=""
                          data-after=""
                          data-after-style=""
                        >
                          35
                        </span>
                        <span className="pbmit-fid-sub">
                          <sup>+</sup>
                        </span>
                      </h4>
                      <span className="pbmit-fid-title">
                        <span>
                          Learn more about our Success Stories
                          <br />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="pbminfotech-ele-fid-style-3 pb-3">
                  <div className="d-flex align-items-center">
                    <div className="pbmit-sbox-icon-wrapper">
                      <i className="pbmit-itinc-icon pbmit-itinc-icon-laptop" />
                    </div>
                    <div className="pbmit-fld-contents">
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
                      <span className="pbmit-fid-title">Delivered Goods</span>
                    </div>
                  </div>
                </div>
                <div className="pbminfotech-ele-fid-style-3 mt-5">
                  <div className="d-flex align-items-center">
                    <div className="pbmit-sbox-icon-wrapper">
                      <i className="pbmit-itinc-icon pbmit-itinc-icon-target" />
                    </div>
                    <div className="pbmit-fld-contents">
                      <h4 className="pbmit-fid-inner">
                        <span
                          className="pbmit-number-rotate numinate"
                          data-appear-animation="animateDigits"
                          data-from={0}
                          data-to={6535}
                          data-interval={5}
                          data-before=""
                          data-before-style=""
                          data-after=""
                          data-after-style=""
                        >
                          6535
                        </span>
                        <span className="pbmit-fid-sub">
                          <sup>+</sup>
                        </span>
                      </h4>
                      <span className="pbmit-fid-title">Project Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="counter-one_lastbox">
                  <div className="pbminfotech-ele-fid-style-3 pb-3">
                    <div className="d-flex align-items-center">
                      <div className="pbmit-sbox-icon-wrapper">
                        <i className="pbmit-itinc-icon pbmit-itinc-icon-call-center" />
                      </div>
                      <div className="pbmit-fld-contents">
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
                        <span className="pbmit-fid-title">IT Consultant</span>
                      </div>
                    </div>
                  </div>
                  <div className="pbminfotech-ele-fid-style-3 mt-5">
                    <div className="d-flex align-items-center">
                      <div className="pbmit-sbox-icon-wrapper">
                        <i className="pbmit-itinc-icon pbmit-itinc-icon-consultation" />
                      </div>
                      <div className="pbmit-fld-contents">
                        <h4 className="pbmit-fid-inner">
                          <span
                            className="pbmit-number-rotate numinate"
                            data-appear-animation="animateDigits"
                            data-from={0}
                            data-to={7346}
                            data-interval={5}
                            data-before=""
                            data-before-style=""
                            data-after=""
                            data-after-style=""
                          >
                            7346
                          </span>
                          <span className="pbmit-fid-sub">
                            <sup>+</sup>
                          </span>
                        </h4>
                        <span className="pbmit-fid-title">Fully Launched</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Counter End */}
        {/* Video Start */}
        <section className="video-section_one">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="position-relative">
                  <div className="video-one_ihbox">
                    <div className="pbmit-ihbox-style-8">
                      <div className="d-flex">
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">
                            AGENCY EXCITED WITH OUR SOLUTIONS
                          </h2>
                          <div className="pbmit-ihbox-btn">
                            <a href="#">
                              <span>Read More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="video-one_playbox">
                    <span>
                      <i className="fa fa-play" />
                    </span>
                    <a
                      href="https://www.youtube.com/watch?v=RvQwLE6x5-E"
                      className="pbmin-lightbox-video"
                    />
                  </div>
                  <img
                    src="images/homepage-1/img-01.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Video End */}
        {/* Client Start */}
        <section className="client-section_one">
          <div className="container">
            <div className="row">
              <div className="col-md-20percent">
                <article className="pbmit-client-style-1">
                  <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                    <h4 className="pbmit-hide">client 1</h4>
                    <div className="pbmit-client-hover-img">
                      <img
                        src="images/homepage-1/client/client-hover-01.png"
                        alt=""
                      />
                    </div>
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-1/client/client-01.png"
                        className=""
                        alt=""
                      />
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-20percent">
                <article className="pbmit-client-style-1">
                  <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                    <h4 className="pbmit-hide">client 1</h4>
                    <div className="pbmit-client-hover-img">
                      <img
                        src="images/homepage-1/client/client-hover-02.png"
                        alt=""
                      />
                    </div>
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-1/client/client-02.png"
                        className=""
                        alt=""
                      />
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-20percent">
                <article className="pbmit-client-style-1">
                  <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                    <h4 className="pbmit-hide">client 1</h4>
                    <div className="pbmit-client-hover-img">
                      <img
                        src="images/homepage-1/client/client-hover-03.png"
                        alt=""
                      />
                    </div>
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-1/client/client-03.png"
                        className=""
                        alt=""
                      />
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-20percent">
                <article className="pbmit-client-style-1">
                  <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                    <h4 className="pbmit-hide">client 1</h4>
                    <div className="pbmit-client-hover-img">
                      <img
                        src="images/homepage-1/client/client-hover-04.png"
                        alt=""
                      />
                    </div>
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-1/client/client-04.png"
                        className=""
                        alt=""
                      />
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-20percent">
                <article className="pbmit-client-style-1">
                  <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                    <h4 className="pbmit-hide">client 1</h4>
                    <div className="pbmit-client-hover-img">
                      <img
                        src="images/homepage-1/client/client-hover-05.png"
                        alt=""
                      />
                    </div>
                    <div className="pbmit-featured-wrapper">
                      <img
                        src="images/homepage-1/client/client-05.png"
                        className=""
                        alt=""
                      />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* Client End */}
        {/* Testimonial Start */}
        <section className="testimonial_one">
          <div className="container">
            <div className="row g-0">
              <div className="col-md-12 pbmit-col-stretched-yes pbmit-col-right testimonial-one_col">
                <div className="pbmit-col-stretched-right testimonial-one_bg" />
                <div className="testimonial-one_box">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="pbmit-heading-subheading">
                        <h4 className="pbmit-subtitle">Our Client's Review</h4>
                        <h2 className="pbmit-title">
                          What Client's say about us
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="testimonial-one-arrow swiper-btn-custom d-flex flex-row-reverse" />
                    </div>
                  </div>
                  <div
                    className="swiper-slider"
                    data-arrows-class="testimonial-one-arrow"
                    data-autoplay="true"
                    data-loop="false"
                    data-dots="false"
                    data-arrows="true"
                    data-columns={2}
                    data-margin={30}
                    data-effect="slide"
                  >
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        {/* Slide1 */}
                        <article className="pbmit-testimonial-style-2">
                          <div className="pbminfotech-post-item">
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-testimonial-wrapper d-lg-flex">
                                <div className="pbminfotech-box-img">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-1/testimonial/testimonial-01.png"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="pbminfotech-box-desc">
                                  <blockquote className="pbminfotech-testimonial-text">
                                    <div>
                                      <div>
                                        I found ITinc Solutions Private Ltd to
                                        be professional, efficient, and very
                                        responsive as we went through the
                                        process of modifying my website. I plan
                                        on using them again and would recommend
                                        them.
                                      </div>
                                    </div>
                                  </blockquote>
                                  <div className="pbminfotech-author-wrapper d-flex justify-content-between">
                                    <div className="pbminfotech-box-author">
                                      <h3 className="pbminfotech-box-title">
                                        Amanda Pryor
                                      </h3>
                                      <div className="pbminfotech-testimonial-detail">
                                        Manager
                                      </div>
                                    </div>
                                    <div className="pbminfotech-box-star-ratings">
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        {/* Slide2 */}
                        <article className="pbmit-testimonial-style-2">
                          <div className="pbminfotech-post-item">
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-testimonial-wrapper d-lg-flex">
                                <div className="pbminfotech-box-img">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-1/testimonial/testimonial-02.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="pbminfotech-box-desc">
                                  <blockquote className="pbminfotech-testimonial-text">
                                    <div>
                                      <div>
                                        I found ITinc Solutions Private Ltd to
                                        be professional, efficient, and very
                                        responsive as we went through the
                                        process of modifying my website. I plan
                                        on using them again and would recommend
                                        them.
                                      </div>
                                    </div>
                                  </blockquote>
                                  <div className="pbminfotech-author-wrapper d-flex justify-content-between">
                                    <div className="pbminfotech-box-author">
                                      <h3 className="pbminfotech-box-title">
                                        Rick Jason
                                      </h3>
                                      <div className="pbminfotech-testimonial-detail">
                                        Manager
                                      </div>
                                    </div>
                                    <div className="pbminfotech-box-star-ratings">
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        {/* Slide3 */}
                        <article className="pbmit-testimonial-style-2">
                          <div className="pbminfotech-post-item">
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-testimonial-wrapper d-lg-flex">
                                <div className="pbminfotech-box-img">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-1/testimonial/testimonial-03.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="pbminfotech-box-desc">
                                  <blockquote className="pbminfotech-testimonial-text">
                                    <div>
                                      <div>
                                        I found ITinc Solutions Private Ltd to
                                        be professional, efficient, and very
                                        responsive as we went through the
                                        process of modifying my website. I plan
                                        on using them again and would recommend
                                        them.
                                      </div>
                                    </div>
                                  </blockquote>
                                  <div className="pbminfotech-author-wrapper d-flex justify-content-between">
                                    <div className="pbminfotech-box-author">
                                      <h3 className="pbminfotech-box-title">
                                        Cheryl Dunye
                                      </h3>
                                      <div className="pbminfotech-testimonial-detail">
                                        Managing Director
                                      </div>
                                    </div>
                                    <div className="pbminfotech-box-star-ratings">
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        {/* Slide4 */}
                        <article className="pbmit-testimonial-style-2">
                          <div className="pbminfotech-post-item">
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-testimonial-wrapper d-lg-flex">
                                <div className="pbminfotech-box-img">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-1/testimonial/testimonial-04.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="pbminfotech-box-desc">
                                  <blockquote className="pbminfotech-testimonial-text">
                                    <div>
                                      <div>
                                        I found ITinc Solutions Private Ltd to
                                        be professional, efficient, and very
                                        responsive as we went through the
                                        process of modifying my website. I plan
                                        on using them again and would recommend
                                        them.
                                      </div>
                                    </div>
                                  </blockquote>
                                  <div className="pbminfotech-author-wrapper d-flex justify-content-between">
                                    <div className="pbminfotech-box-author">
                                      <h3 className="pbminfotech-box-title">
                                        Striven Smith
                                      </h3>
                                      <div className="pbminfotech-testimonial-detail">
                                        CEO of ITinc
                                      </div>
                                    </div>
                                    <div className="pbminfotech-box-star-ratings">
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        {/* Slide5 */}
                        <article className="pbmit-testimonial-style-2">
                          <div className="pbminfotech-post-item">
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-testimonial-wrapper d-lg-flex">
                                <div className="pbminfotech-box-img">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-1/testimonial/testimonial-05.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="pbminfotech-box-desc">
                                  <blockquote className="pbminfotech-testimonial-text">
                                    <div>
                                      <div>
                                        I found ITinc Solutions Private Ltd to
                                        be professional, efficient, and very
                                        responsive as we went through the
                                        process of modifying my website. I plan
                                        on using them again and would recommend
                                        them.
                                      </div>
                                    </div>
                                  </blockquote>
                                  <div className="pbminfotech-author-wrapper d-flex justify-content-between">
                                    <div className="pbminfotech-box-author">
                                      <h3 className="pbminfotech-box-title">
                                        Elena Rusconi
                                      </h3>
                                      <div className="pbminfotech-testimonial-detail">
                                        Adviser
                                      </div>
                                    </div>
                                    <div className="pbminfotech-box-star-ratings">
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        {/* Slide6 */}
                        <article className="pbmit-testimonial-style-2">
                          <div className="pbminfotech-post-item">
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-testimonial-wrapper d-lg-flex">
                                <div className="pbminfotech-box-img">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-1/testimonial/testimonial-06.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="pbminfotech-box-desc">
                                  <blockquote className="pbminfotech-testimonial-text">
                                    <div>
                                      <div>
                                        I found ITinc Solutions Private Ltd to
                                        be professional, efficient, and very
                                        responsive as we went through the
                                        process of modifying my website. I plan
                                        on using them again and would recommend
                                        them.
                                      </div>
                                    </div>
                                  </blockquote>
                                  <div className="pbminfotech-author-wrapper d-flex justify-content-between">
                                    <div className="pbminfotech-box-author">
                                      <h3 className="pbminfotech-box-title">
                                        Austin Powers
                                      </h3>
                                      <div className="pbminfotech-testimonial-detail">
                                        Manager
                                      </div>
                                    </div>
                                    <div className="pbminfotech-box-star-ratings">
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                      <i className="pbmit-base-icon-star pbmit-active" />
                                    </div>
                                  </div>
                                </div>
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
          </div>
        </section>
        {/* Testimonial End */}
        {/* Technology Index Start */}
        <section className="technology-index_one">
          <div className="container">
            <div className="pbmit-heading-subheading text-center text-white">
              <h4 className="pbmit-subtitle">Technology Index</h4>
              <h2 className="pbmit-title">Improved and Innovative</h2>
              <div className="pbmit-heading-desc">
                We have the specialist to help you define in stages a business
                plan, design the products customers want. Its helped to customer
                define their vision for success of business
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <article className="pbmit-miconheading-style-9">
                  <div className="pbmit-ihbox pbmit-ihbox-style-9">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-icon">
                          <i className="pbmit-itinc-icon pbmit-itinc-icon-bar-chart" />
                        </div>
                      </div>
                      <h2 className="pbmit-element-title">
                        Marketing Strategy
                      </h2>
                      <div className="pbmit-ihbox-contents" />
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-2">
                <article className="pbmit-miconheading-style-9">
                  <div className="pbmit-ihbox pbmit-ihbox-style-9">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-icon">
                          <i className="pbmit-itinc-icon pbmit-itinc-icon-presentation" />
                        </div>
                      </div>
                      <h2 className="pbmit-element-title">Cyber Security</h2>
                      <div className="pbmit-ihbox-contents" />
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-2">
                <article className="pbmit-miconheading-style-9">
                  <div className="pbmit-ihbox pbmit-ihbox-style-9">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-icon">
                          <i className="pbmit-itinc-icon pbmit-itinc-icon-meeting" />
                        </div>
                      </div>
                      <h2 className="pbmit-element-title">Business services</h2>
                      <div className="pbmit-ihbox-contents" />
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-2">
                <article className="pbmit-miconheading-style-9">
                  <div className="pbmit-ihbox pbmit-ihbox-style-9">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-icon">
                          <i className="pbmit-itinc-icon pbmit-itinc-icon-laptop-1" />
                        </div>
                      </div>
                      <h2 className="pbmit-element-title">Digital Marketing</h2>
                      <div className="pbmit-ihbox-contents" />
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-2">
                <article className="pbmit-miconheading-style-9">
                  <div className="pbmit-ihbox pbmit-ihbox-style-9">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-icon">
                          <i className="pbmit-itinc-icon pbmit-itinc-icon-customer-service-3" />
                        </div>
                      </div>
                      <h2 className="pbmit-element-title">industry Service</h2>
                      <div className="pbmit-ihbox-contents" />
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-2">
                <article className="pbmit-miconheading-style-9">
                  <div className="pbmit-ihbox pbmit-ihbox-style-9">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-icon">
                          <i className="pbmit-itinc-icon pbmit-itinc-icon-graph" />
                        </div>
                      </div>
                      <h2 className="pbmit-element-title">Insider Survey</h2>
                      <div className="pbmit-ihbox-contents" />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* Technology Index End */}
        {/* Blog Start */}
        <section className="section-lgx">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="pbmit-heading-subheading">
                  <h4 className="pbmit-subtitle">Recent News</h4>
                  <h2 className="pbmit-title">What's Going on our Blog?</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="blog-one_btn">
                  <a href="blog-grid-view.html" className="pbmit-btn">
                    View all
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <article className="pbmit-blog-style-1">
                  <div className="post-item">
                    <div className="pbmit-featured-container">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/homepage-1/blog/blog-01.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                        <i className="pbmit-base-icon-calendar-2" /> Jun 03,
                        2020
                        <span />
                      </div>
                      <div className="pbmit-meta-container">
                        <div className="pbmit-meta-author-wrapper pbmit-meta-line">
                          <a
                            href="blog-classic.html"
                            title="Posted by admin"
                            rel="author"
                          >
                            <i className="pbmit-base-icon-user-1" /> by admin
                          </a>
                        </div>
                        <div className="pbmit-meta-category-wrapper pbmit-meta-line">
                          <div className="pbmit-meta-category">
                            <i className="pbmit-base-icon-folder-open-empty" />
                            <a href="blog-classic.html" rel="category tag">
                              Business
                            </a>
                          </div>
                        </div>
                      </div>
                      <h3 className="pbmit-post-title">
                        <a href="blog-single-details.html">
                          How to become a successful businessman
                        </a>
                      </h3>
                      <div className="pbminfotech-box-desc">
                        <div className="pbminfotech-box-desc-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et…
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-4">
                <article className="pbmit-blog-style-1">
                  <div className="post-item">
                    <div className="pbmit-featured-container">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/homepage-1/blog/blog-02.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                        <i className="pbmit-base-icon-calendar-2" /> Jun 03,
                        2020
                        <span />
                      </div>
                      <div className="pbmit-meta-container">
                        <div className="pbmit-meta-author-wrapper pbmit-meta-line">
                          <a
                            href="blog-classic.html"
                            title="Posted by admin"
                            rel="author"
                          >
                            <i className="pbmit-base-icon-user-1" /> by admin
                          </a>
                        </div>
                        <div className="pbmit-meta-category-wrapper pbmit-meta-line">
                          <div className="pbmit-meta-category">
                            <i className="pbmit-base-icon-folder-open-empty" />
                            <a href="blog-classic.html" rel="category tag">
                              Creative Invention
                            </a>
                          </div>
                        </div>
                      </div>
                      <h3 className="pbmit-post-title">
                        <a href="blog-single-details.html">
                          10 Efficient &amp; Measurable Benefits of Software
                        </a>
                      </h3>
                      <div className="pbminfotech-box-desc">
                        <div className="pbminfotech-box-desc-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et…
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-4">
                <article className="pbmit-blog-style-1">
                  <div className="post-item">
                    <div className="pbmit-featured-container">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/homepage-1/blog/blog-03.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                        <i className="pbmit-base-icon-calendar-2" /> Jun 03,
                        2020
                        <span />
                      </div>
                      <div className="pbmit-meta-container">
                        <div className="pbmit-meta-author-wrapper pbmit-meta-line">
                          <a
                            href="blog-classic.html"
                            title="Posted by admin"
                            rel="author"
                          >
                            <i className="pbmit-base-icon-user-1" /> by admin
                          </a>
                        </div>
                        <div className="pbmit-meta-category-wrapper pbmit-meta-line">
                          <div className="pbmit-meta-category">
                            <i className="pbmit-base-icon-folder-open-empty" />
                            <a href="blog-classic.html" rel="category tag">
                              Professionals
                            </a>
                          </div>
                        </div>
                      </div>
                      <h3 className="pbmit-post-title">
                        <a href="blog-single-details.html">
                          Exploring Latest Web Design Together With Theme
                        </a>
                      </h3>
                      <div className="pbminfotech-box-desc">
                        <div className="pbminfotech-box-desc-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et…
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
      {/* Page Content End */}
      {/* footer */}
      <footer className="footer site-footer">
        <div className="pbmit-footer-big-area-wrapper">
          <div className="container">
            <div className="pbmit-footer-big-area">
              <div className="row align-items-center">
                <div className="col-md-12 col-xl-8">
                  <div className="pbmit-footer-boxes pbmit-footer-boxes-1">
                    <span className="pbmit-footer-contact-info">
                      <span className="pbmit-footer-contact-info-inner">
                        <i className="pbmit-itinc-icon pbmit-itinc-icon-email" />
                        <span className="pbmit-label pbmit-label-1">
                          <a
                            href="https://itinc-demo.pbminfotech.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="b4d9d5ddd8f4ddc0dddad79ad7dbd9"
                          >
                            [email&nbsp;protected]
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div className="pbmit-footer-boxes pbmit-footer-boxes-2">
                    <span className="pbmit-footer-contact-info">
                      <span className="pbmit-footer-contact-info-inner">
                        <i className="pbmit-itinc-icon pbmit-itinc-icon-phone-call" />
                        <span className="pbmit-label pbmit-label-2">
                          (+00)888.666.88
                        </span>
                      </span>
                    </span>
                  </div>
                  <div className="pbmit-footer-boxes pbmit-footer-boxes-3">
                    <span className="pbmit-footer-contact-info">
                      <span className="pbmit-footer-contact-info-inner">
                        <i className="pbmit-itinc-icon pbmit-itinc-icon-pin" />
                        <span className="pbmit-label pbmit-label-3">
                          456, New York 33454, NY.
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-md-12 col-xl-4">
                  <div className="pbmit-footer-social-area">
                    <ul className="pbmit-social-links">
                      <li className="pbmit-social-li pbmit-social-facebook">
                        <a href="#" target="_blank">
                          <span>
                            <i className="pbmit-base-icon-facebook-squared" />
                          </span>
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-twitter">
                        <a href="#" target="_blank">
                          <span>
                            <i className="pbmit-base-icon-twitter" />
                          </span>
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-linkedin">
                        <a href="#" target="_blank">
                          <span>
                            <i className="pbmit-base-icon-linkedin-squared" />
                          </span>
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-youtube">
                        <a href="#" target="_blank">
                          <span>
                            <i className="pbmit-base-icon-youtube-play" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pbmit-footer-widget-area">
          <div className="container">
            <div className="row">
              <div className="footer-widget-col-1">
                <div className="widget">
                  <h2 className="widget-title">About Us</h2>
                  <div className="textwidget widget-text">
                    <p>
                      We provide caring and knowledgeable technicians for making
                      people.
                    </p>
                  </div>
                </div>
                <div className="itinc-contact-widget">
                  <div className="pbmit-contact-widget-lines">
                    <div className="pbmit-contact-widget-line pbmit-contact-widget-phone">
                      <span>Talk To Our Support </span> +1 002-123-4567
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-widget-col-2">
                <div className="widget">
                  <h2 className="widget-title">Information</h2>
                  <div className="textwidget">
                    <ul>
                      <li>
                        <a href="services-details.html">Managed It Services</a>
                      </li>
                      <li>
                        <a href="services-details.html">IT Consultancy</a>
                      </li>
                      <li>
                        <a href="services-details.html">Business Solutions</a>
                      </li>
                      <li>
                        <a href="services-details.html">Digital Services</a>
                      </li>
                      <li>
                        <a href="services-details.html">Best Seller</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-widget-col-3">
                <div className="widget">
                  <h2 className="widget-title">Latest News</h2>
                  <div className="textwidget">
                    <ul className="pbmit-rpw-list">
                      <li>
                        <a href="blog-single-details.html">
                          <span className="pbmit-rpw-img">
                            <img
                              src="images/footer/blog-01.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </span>
                        </a>
                        <span className="pbmit-rpw-content">
                          <span className="pbmit-rpw-title">
                            <a href="blog-single-details.html">
                              How to become a successful businessman
                            </a>
                          </span>
                          <span className="pbmit-rpw-date">
                            <a href="blog-single-details.html">June 3, 2020</a>
                          </span>
                        </span>
                      </li>
                      <li>
                        <a href="blog-single-details.html">
                          <span className="pbmit-rpw-img">
                            <img
                              src="images/footer/blog-02.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </span>
                        </a>
                        <span className="pbmit-rpw-content">
                          <span className="pbmit-rpw-title">
                            <a href="blog-single-details.html">
                              10 Efficient &amp; Measurable Benefits of Software
                            </a>
                          </span>
                          <span className="pbmit-rpw-date">
                            <a href="blog-single-details.html">June 3, 2020</a>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-widget-col-4">
                <div className="widget">
                  <h2 className="widget-title">Newsletter</h2>
                  <div className="textwidget">
                    <form>
                      <div className="pbmit-form-fields">
                        Sign up today for hints, tips and the latest product
                        news
                        <input
                          type="email"
                          name="EMAIL"
                          placeholder="Your email address"
                          required=""
                        />
                        <button type="submit">
                          <i className="pbmit-base-icon-paper-plane" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pbmit-footer-bottom">
          <div className="container">
            <div className="pbmit-footer-text-inner">
              <div className="row">
                <div className="col-md-6">
                  <div className="pbmit-footer-copyright-text-area">
                    {" "}
                    Copyright © 2023
                    <a href="#">ITinc Demo 1</a>, All Rights Reserved.
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pbmit-footer-menu-area">
                    <div className="menu-footer-menu-container">
                      <ul className="pbmit-footer-menu">
                        <li className="menu-item">
                          <a href="faq.html">FAQ</a>
                        </li>
                        <li className="menu-item">
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li className="menu-item">
                          <a href="contact-us.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer End */}
    </>
  );
}
