"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header sticky top-0 header-style-1">
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
                  <i className="pbmit-base-icon-marker" /> Los Angeles Gournadi,
                  1230 Bariasl
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
                  <Link href="/">
                    <img
                      className="logo-img"
                      src="images/homepage-1/logo.png"
                      alt="ITinc"
                    />
                  </Link>
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
                          <a>Home</a>
                          <ul>
                            <li className="active">
                              <Link href={"/index-2"}>Homepage 1</Link>
                            </li>
                            <li>
                              <Link href={"/homepage-2"}>Homepage 2</Link>
                            </li>
                            <li>
                              <Link href={"/homepage-3"}>Homepage 3</Link>
                            </li>
                            <li>
                              <Link href={"/homepage-4"}>Homepage 4</Link>
                            </li>
                            <li>
                              <Link href={"/homepage-5"}>Homepage 5</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a>Pages</a>
                          <ul>
                            <li>
                              <Link href={"/aboutus"}>About us</Link>
                            </li>
                            <li>
                              <Link href={"/aboutus2"}>About us 2</Link>
                            </li>
                            <li>
                              <Link href={"/our-history"}>Our History</Link>
                            </li>
                            <li>
                              <Link href={"/our-plan"}>Our Plans</Link>
                            </li>
                            <li>
                              <Link href={"/our-team-member"}>
                                Our Team Member
                              </Link>
                            </li>
                            <li>
                              <Link href={"/team-member-details"}>
                                Team Member Details
                              </Link>
                            </li>
                            <li>
                              <Link href={"/faq"}>FAQ</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a>Services</a>
                          <ul>
                            <li>
                              <Link href={"/services-details"}>
                                Services Details
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a>Projects</a>
                          <ul>
                            <li>
                              <Link href={"/project-style-1"}>
                                Project Style 1
                              </Link>
                            </li>
                            <li>
                              <Link href={"/project-style-2"}>
                                Project Style 2
                              </Link>
                            </li>
                            <li>
                              <Link href={"/project-single-details"}>
                                Project Style Details
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a>Blog</a>
                          <ul>
                            <li>
                              <Link href={"/blog-classic"}>Blog Classic</Link>
                            </li>
                            <li>
                              <Link href={"/blog-grid-view"}>
                                Blog Grid View
                              </Link>
                            </li>
                            <li>
                              <Link href={"/blog-single-details"}>
                                Blog Single Details
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href={"/contact-us"}>Contact Us</Link>
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
                <a className="pbmit-btn" href="?contact-us">
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
                  SOLUTIONS{" "}
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
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    fontFamily: '"Rajdhani"',
                    textTransform: "uppercase",
                    boxShadow: "0px 9px 35px 0px rgba(26, 47, 106, 0.07)",
                  }}
                >
                  HOW IT WORKS{" "}
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
                  <i className="fa-play" />{" "}
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
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    fontFamily: '"Rajdhani"',
                    textTransform: "uppercase",
                    boxShadow: "0px 9px 35px 0px rgba(26, 47, 106, 0.07)",
                  }}
                >
                  For Millions of Users{" "}
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
                  Readmore <i className="pbmit-base-icon-right-arrow" />{" "}
                </a>
                {/*
                 */}
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
                  SOLUTIONS{" "}
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
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    fontFamily: '"Rajdhani"',
                    textTransform: "uppercase",
                    boxShadow: "0px 9px 35px 0px rgba(26, 47, 106, 0.07)",
                  }}
                >
                  HOW IT WORKS{" "}
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
                  <i className="fa-play" />{" "}
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
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    fontFamily: '"Rajdhani"',
                    textTransform: "uppercase",
                    boxShadow: "0px 9px 35px 0px rgba(26, 47, 106, 0.07)",
                  }}
                >
                  For Millions of Users{" "}
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
                  Readmore <i className="pbmit-base-icon-right-arrow" />{" "}
                </a>
                {/*
                 */}
              </rs-slide>
            </rs-slides>
          </rs-module>
        </rs-module-wrap>
        {/* END REVOLUTION SLIDER */}
      </div>
    </header>
  );
}
