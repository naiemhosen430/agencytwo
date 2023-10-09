import React from "react";

export default function page() {
  return (
    <>
      {/* Title Bar */}
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">FAQ</h1>
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
                      Faq
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
        {/* FAQ */}
        <section className="section-md">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="pbmit-heading-subheading text-center pb-3">
                  <h4 className="pbmit-subtitle">Common Queries</h4>
                  <h2 className="pbmit-title">Frequently Asked Questions</h2>
                  <div className="pbmit-heading-desc">
                    You will find answers to about our security technologies and
                    security specialists service and more. Please feel free to
                    contact us if you don't get your question's answer in below.
                  </div>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item active">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <span className="pbmit-accordion-icon-left">
                          <span className="pbmit-accordion-icon-closed">
                            <i className="fa fa-plus" />
                          </span>
                          <span className="pbmit-accordion-icon-opened">
                            <i className="fa fa-minus" />
                          </span>
                        </span>
                        <span className="pbmit-accordion-title">
                          <span>01.</span>
                          How long does it take to repair my computer?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Solution Analysts welcomes you to try our services. We
                        invest the same time and energy in Pilot Projects as
                        real projects. We have always succeeded in continuing
                        the relationship after demonstration of ability in a
                        pilot project different from prototypes.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <span className="pbmit-accordion-icon-left">
                          <span className="pbmit-accordion-icon-closed">
                            <i className="fa fa-plus" />
                          </span>
                          <span className="pbmit-accordion-icon-opened">
                            <i className="fa fa-minus" />
                          </span>
                        </span>
                        <span className="pbmit-accordion-title">
                          <span>02.</span>
                          How do we keep ourselves informed about progress?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Solution Analysts welcomes you to try our services. We
                        invest the same time and energy in Pilot Projects as
                        real projects. We have always succeeded in continuing
                        the relationship after demonstration of ability in a
                        pilot project different from prototypes.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <span className="pbmit-accordion-icon-left">
                          <span className="pbmit-accordion-icon-closed">
                            <i className="fa fa-plus" />
                          </span>
                          <span className="pbmit-accordion-icon-opened">
                            <i className="fa fa-minus" />
                          </span>
                        </span>
                        <span className="pbmit-accordion-title">
                          <span>03.</span>
                          Can you run online marketing campaigns for us?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Solution Analysts welcomes you to try our services. We
                        invest the same time and energy in Pilot Projects as
                        real projects. We have always succeeded in continuing
                        the relationship after demonstration of ability in a
                        pilot project different from prototypes.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingfour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        <span className="pbmit-accordion-icon-left">
                          <span className="pbmit-accordion-icon-closed">
                            <i className="fa fa-plus" />
                          </span>
                          <span className="pbmit-accordion-icon-opened">
                            <i className="fa fa-minus" />
                          </span>
                        </span>
                        <span className="pbmit-accordion-title">
                          <span>04.</span>
                          Will I be able to access code during the development?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Solution Analysts welcomes you to try our services. We
                        invest the same time and energy in Pilot Projects as
                        real projects. We have always succeeded in continuing
                        the relationship after demonstration of ability in a
                        pilot project different from prototypes.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <span className="pbmit-accordion-icon-left">
                          <span className="pbmit-accordion-icon-closed">
                            <i className="fa fa-plus" />
                          </span>
                          <span className="pbmit-accordion-icon-opened">
                            <i className="fa fa-minus" />
                          </span>
                        </span>
                        <span className="pbmit-accordion-title">
                          <span>05.</span>I can't connect to my network drive
                          anymore, what can I do?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Solution Analysts welcomes you to try our services. We
                        invest the same time and energy in Pilot Projects as
                        real projects. We have always succeeded in continuing
                        the relationship after demonstration of ability in a
                        pilot project different from prototypes.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ end */}
        {/* FAQ */}
        <section className="section-lgb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="pbmit-heading-subheading text-center pb-3">
                  <h4 className="pbmit-subtitle">General Questions</h4>
                  <h2 className="pbmit-title">Frequently Asked Questions</h2>
                  <div className="pbmit-heading-desc">
                    You will find answers to about our security technologies and
                    security specialists service and more. Please feel free to
                    contact us if you don't get your question's answer in below.
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="accordion" id="accordionExample2">
                  <div className="accordion-item active">
                    <h2 className="accordion-header" id="headingOne1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne1"
                        aria-expanded="false"
                        aria-controls="collapseOne1"
                      >
                        <span className="pbmit-accordion-icon-left">
                          <span className="pbmit-accordion-icon-closed">
                            <i className="fa fa-plus" />
                          </span>
                          <span className="pbmit-accordion-icon-opened">
                            <i className="fa fa-minus" />
                          </span>
                        </span>
                        <span className="pbmit-accordion-title">
                          <span>01.</span>
                          How long does it take to repair my computer?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseOne1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo1"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        Solution Analysts welcomes you to try our services. We
                        invest the same time and energy in Pilot Projects as
                        real projects. We have always succeeded in continuing
                        the relationship after demonstration of ability in a
                        pilot project different from prototypes.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo1"
                        aria-expanded="false"
                        aria-controls="collapseTwo1"
                      >
                        <span className="pbmit-accordion-icon-left">
                          <span className="pbmit-accordion-icon-closed">
                            <i className="fa fa-plus" />
                          </span>
                          <span className="pbmit-accordion-icon-opened">
                            <i className="fa fa-minus" />
                          </span>
                        </span>
                        <span className="pbmit-accordion-title">
                          <span>02.</span>
                          How do we keep ourselves informed about progress?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo1"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        Solution Analysts welcomes you to try our services. We
                        invest the same time and energy in Pilot Projects as
                        real projects. We have always succeeded in continuing
                        the relationship after demonstration of ability in a
                        pilot project different from prototypes.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree1"
                        aria-expanded="false"
                        aria-controls="collapseThree1"
                      >
                        <span className="pbmit-accordion-icon-left">
                          <span className="pbmit-accordion-icon-closed">
                            <i className="fa fa-plus" />
                          </span>
                          <span className="pbmit-accordion-icon-opened">
                            <i className="fa fa-minus" />
                          </span>
                        </span>
                        <span className="pbmit-accordion-title">
                          <span>03.</span>
                          Can you run online marketing campaigns for us?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseThree1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree1"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        Solution Analysts welcomes you to try our services. We
                        invest the same time and energy in Pilot Projects as
                        real projects. We have always succeeded in continuing
                        the relationship after demonstration of ability in a
                        pilot project different from prototypes.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour1"
                        aria-expanded="false"
                        aria-controls="collapseFour1"
                      >
                        <span className="pbmit-accordion-icon-left">
                          <span className="pbmit-accordion-icon-closed">
                            <i className="fa fa-plus" />
                          </span>
                          <span className="pbmit-accordion-icon-opened">
                            <i className="fa fa-minus" />
                          </span>
                        </span>
                        <span className="pbmit-accordion-title">
                          <span>04.</span>
                          Will I be able to access code during the development?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseFour1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour1"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        Solution Analysts welcomes you to try our services. We
                        invest the same time and energy in Pilot Projects as
                        real projects. We have always succeeded in continuing
                        the relationship after demonstration of ability in a
                        pilot project different from prototypes.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive1"
                        aria-expanded="false"
                        aria-controls="collapseFive1"
                      >
                        <span className="pbmit-accordion-icon-left">
                          <span className="pbmit-accordion-icon-closed">
                            <i className="fa fa-plus" />
                          </span>
                          <span className="pbmit-accordion-icon-opened">
                            <i className="fa fa-minus" />
                          </span>
                        </span>
                        <span className="pbmit-accordion-title">
                          <span>05.</span>I can't connect to my network drive
                          anymore, what can I do?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseFive1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive1"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        Solution Analysts welcomes you to try our services. We
                        invest the same time and energy in Pilot Projects as
                        real projects. We have always succeeded in continuing
                        the relationship after demonstration of ability in a
                        pilot project different from prototypes.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ end */}
      </div>
      {/* Page Content End */}
    </>
  );
}
