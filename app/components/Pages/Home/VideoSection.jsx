import React from "react";

export default function VideoSection() {
  return (
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
  );
}
