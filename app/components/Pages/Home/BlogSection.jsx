import React from "react";

export default function BlogSection() {
  return (
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
                    <i className="pbmit-base-icon-calendar-2" /> Jun 03, 2020
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et…
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
                    <i className="pbmit-base-icon-calendar-2" /> Jun 03, 2020
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et…
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
                    <i className="pbmit-base-icon-calendar-2" /> Jun 03, 2020
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et…
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
