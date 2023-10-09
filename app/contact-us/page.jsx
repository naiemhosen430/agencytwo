import React from "react";

export default function page() {
  return (
    <>
      {/* Title Bar */}
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content pbmit-contact-title-bar">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title"> Contact Us</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span>
                    <a title="" href="#" className="home">
                      <span>Itinc</span>
                    </a>
                  </span>
                  <span className="sep">-</span>
                  <span>
                    <span className="post-root post post-post current-item">
                      {" "}
                      Contact Us
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Title Bar End*/}
      {/* Page Content */}
      <div className="page-content">
        {/* Contact */}
        <section className="contact-us_section">
          <div className="container p-0 pbmit-col-stretched-yes pbmit-col-right">
            <div className="row g-0">
              <div className="col-md-4 contact-left_col">
                <div className="contact-left_box">
                  <h2 className="pbmit-title">Get Our Contacts From Here</h2>
                  <div className="pbmit-ihbox-style-4">
                    <div className="d-flex align-items-center">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper">
                          <i className="pbmit-itinc-icon pbmit-itinc-icon-pin" />
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <h2 className="pbmit-element-title">OUR LOCATION​​</h2>
                        <div className="pbmit-heading-desc">
                          456, Loandon Street, <br /> New York, 33454, NY
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-style-4">
                    <div className="d-flex align-items-center">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper">
                          <i className="pbmit-itinc-icon pbmit-itinc-icon-phone-call" />
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <h2 className="pbmit-element-title">PHONE NUMBER</h2>
                        <div className="pbmit-heading-desc">
                          +1 888-654-4329 <br /> +1 888-543-8765
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-style-4">
                    <div className="d-flex align-items-center">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper">
                          <i className="pbmit-itinc-icon pbmit-itinc-icon-email" />
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <h2 className="pbmit-element-title">EMAIL ADDRESS</h2>
                        <div className="pbmit-heading-desc">
                          <a
                            href="https://itinc-demo.pbminfotech.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="167579786277756256736e777b667a733875797b"
                          >
                            [email&nbsp;protected]
                          </a>{" "}
                          <br />{" "}
                          <a
                            href="https://itinc-demo.pbminfotech.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="92f3f6fffbfcd2f7eaf3ffe2fef7bcf1fdff"
                          >
                            [email&nbsp;protected]
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="pbmit-social-links">
                    <li className="pbmit-social-li pbmit-social-facebook">
                      <a href="#" target="_blank">
                        <span>
                          <i className="fa fa-facebook" />
                        </span>
                      </a>
                    </li>
                    <li className="pbmit-social-li pbmit-social-twitter">
                      <a href="#" target="_blank">
                        <span>
                          <i className="fa fa-twitter" />
                        </span>
                      </a>
                    </li>
                    <li className="pbmit-social-li pbmit-social-pinterest">
                      <a href="#" target="_blank">
                        <span>
                          <i className="fa fa-pinterest" />
                        </span>
                      </a>
                    </li>
                    <li className="pbmit-social-li pbmit-social-linkedin">
                      <a href="#" target="_blank">
                        <span>
                          <i className="fa fa-linkedin" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8 contact-right_col">
                <div className="pbmit-col-stretched-right contact-form_bg" />
                <div className="contact-form_box">
                  <div className="pbmit-heading-subheading">
                    <h4 className="pbmit-subtitle">Contact Us</h4>
                    <h2 className="pbmit-title">Get In Touch With Us</h2>
                  </div>
                  <form
                    className="contact-form"
                    method="post"
                    id="contact-form"
                    action="https://itinc-demo.pbminfotech.com/html-demo/send.php"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required=""
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="number"
                          className="form-control"
                          placeholder="Phone"
                          required=""
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          required=""
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          name="message"
                          cols={40}
                          rows={4}
                          className="form-control"
                          placeholder="Message"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-12 col-xl-6">
                        <button
                          type="submit"
                          className="pbmit-btn pbmit-btn-blackish"
                        >
                          <i className="form-btn-loader fa fa-circle-o-notch fa-spin fa-fw margin-bottom d-none" />
                          Send Message
                        </button>
                      </div>
                      <div className="col-md-12 col-lg-12 message-status" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="iframe-section">
          <iframe
            src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
            title="London Eye, London, United Kingdom"
            aria-label="London Eye, London, United Kingdom"
          />
        </section>
        {/* Contact End */}
      </div>
      {/* Page Content End */}
    </>
  );
}
