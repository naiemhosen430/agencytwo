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
                  <h1 className="pbmit-tbar-title">Blog</h1>
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
                      Blog Classic
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Title Bar End*/}
      {/*Page Content */}
      <div className="page-content">
        {/* Blog Classic  */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 blog-right-col">
                <div className="row">
                  <div className="col-md-12">
                    <article className="post blog-classic">
                      <div className="pbmit-featured-img-wrapper">
                        <a href="blog-single-details.html">
                          <img
                            src="images/blog/blog-01.jpg"
                            className="img-fluid w-100"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="pbmit-blog-classic-inner">
                        <div className="pbmit-post-date">
                          <span className="pbmit-meta pbmit-meta-date">
                            <a href="blog-single-details.html" rel="bookmark">
                              <i className="pbmit-base-icon-calendar-2" />
                              <time
                                className="entry-date published"
                                dateTime="2020-06-03T04:47:45+00:00"
                              >
                                June 3, 2020
                              </time>
                              <time
                                className="updated pbmit-hide"
                                dateTime="2020-10-14T11:23:17+00:00"
                              >
                                October 14, 2020
                              </time>
                            </a>
                          </span>
                        </div>
                        <div className="pbmit-blog-meta pbmit-blog-meta-top">
                          <span className="pbmit-meta pbmit-meta-author">
                            <a
                              className="pbmit-author-link"
                              href="blog-classic.html"
                            >
                              <i className="pbmit-base-icon-user-1" />
                              admin
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-cat">
                            <i className="pbmit-base-icon-folder-open-empty" />
                            <a href="blog-classic.html" rel="category tag">
                              Business
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                            <i className="pbmit-base-icon-chat-2" /> 2 Comments
                          </span>
                        </div>
                        <h3 className="pbmit-post-title">
                          <a href="blog-single-details.html">
                            How to become a successful businessman
                          </a>
                        </h3>
                        <div className="pbmit-entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. quis nostrud exercitation
                            laboris nisi ut aliquip extra consequat as opposed
                            to using 'Content here, content here', making it
                            look like…
                          </p>
                          <div className="pbmit-read-more-link">
                            <a href="blog-single-details.html">
                              <span>Read More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="post blog-classic">
                      <div className="pbmit-featured-img-wrapper">
                        <a href="blog-single-details.html">
                          <img
                            src="images/blog/blog-02.jpg"
                            className="img-fluid w-100"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="pbmit-blog-classic-inner">
                        <div className="pbmit-post-date">
                          <span className="pbmit-meta pbmit-meta-date">
                            <a href="blog-single-details.html" rel="bookmark">
                              <i className="pbmit-base-icon-calendar-2" />
                              <time
                                className="entry-date published"
                                dateTime="2020-06-03T04:47:45+00:00"
                              >
                                June 3, 2020
                              </time>
                              <time
                                className="updated pbmit-hide"
                                dateTime="2020-10-14T11:23:17+00:00"
                              >
                                October 14, 2020
                              </time>
                            </a>
                          </span>
                        </div>
                        <div className="pbmit-blog-meta pbmit-blog-meta-top">
                          <span className="pbmit-meta pbmit-meta-author">
                            <a
                              className="pbmit-author-link"
                              href="blog-classic.html"
                            >
                              <i className="pbmit-base-icon-user-1" />
                              admin
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-cat">
                            <i className="pbmit-base-icon-folder-open-empty" />
                            <a href="blog-classic.html" rel="category tag">
                              Creative Invention
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                            <i className="pbmit-base-icon-chat-2" /> No Comments
                          </span>
                        </div>
                        <h3 className="pbmit-post-title">
                          <a href="blog-single-details.html">
                            10 Efficient &amp; Measurable Benefits of Software
                          </a>
                        </h3>
                        <div className="pbmit-entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. quis nostrud exercitation
                            laboris nisi ut aliquip extra consequat as opposed
                            to using 'Content here, content here', making it
                            look like…
                          </p>
                          <div className="pbmit-read-more-link">
                            <a href="blog-single-details.html">
                              <span>Read More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="post blog-classic">
                      <div className="pbmit-featured-img-wrapper">
                        <a href="blog-single-details.html">
                          <img
                            src="images/blog/blog-03.jpg"
                            className="img-fluid w-100"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="pbmit-blog-classic-inner">
                        <div className="pbmit-post-date">
                          <span className="pbmit-meta pbmit-meta-date">
                            <a href="blog-single-details.html" rel="bookmark">
                              <i className="pbmit-base-icon-calendar-2" />
                              <time
                                className="entry-date published"
                                dateTime="2020-06-03T04:47:45+00:00"
                              >
                                June 3, 2020
                              </time>
                              <time
                                className="updated pbmit-hide"
                                dateTime="2020-10-14T11:23:17+00:00"
                              >
                                October 14, 2020
                              </time>
                            </a>
                          </span>
                        </div>
                        <div className="pbmit-blog-meta pbmit-blog-meta-top">
                          <span className="pbmit-meta pbmit-meta-author">
                            <a
                              className="pbmit-author-link"
                              href="blog-classic.html"
                            >
                              <i className="pbmit-base-icon-user-1" />
                              admin
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-cat">
                            <i className="pbmit-base-icon-folder-open-empty" />
                            <a href="blog-classic.html" rel="category tag">
                              Professionals
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                            <i className="pbmit-base-icon-chat-2" /> No Comments
                          </span>
                        </div>
                        <h3 className="pbmit-post-title">
                          <a href="blog-single-details.html">
                            Exploring Latest Web Design Together With Theme
                          </a>
                        </h3>
                        <div className="pbmit-entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. quis nostrud exercitation
                            laboris nisi ut aliquip extra consequat as opposed
                            to using 'Content here, content here', making it
                            look like…
                          </p>
                          <div className="pbmit-read-more-link">
                            <a href="blog-single-details.html">
                              <span>Read More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="post blog-classic">
                      <div className="pbmit-featured-img-wrapper">
                        <a href="blog-single-details.html">
                          <img
                            src="images/blog/blog-04.jpg"
                            className="img-fluid w-100"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="pbmit-blog-classic-inner">
                        <div className="pbmit-post-date">
                          <span className="pbmit-meta pbmit-meta-date">
                            <a href="blog-single-details.html" rel="bookmark">
                              <i className="pbmit-base-icon-calendar-2" />
                              <time
                                className="entry-date published"
                                dateTime="2020-06-03T04:47:45+00:00"
                              >
                                May 26, 2020
                              </time>
                              <time
                                className="updated pbmit-hide"
                                dateTime="2020-10-14T11:23:17+00:00"
                              >
                                October 14, 2020
                              </time>
                            </a>
                          </span>
                        </div>
                        <div className="pbmit-blog-meta pbmit-blog-meta-top">
                          <span className="pbmit-meta pbmit-meta-author">
                            <a
                              className="pbmit-author-link"
                              href="blog-classic.html"
                            >
                              <i className="pbmit-base-icon-user-1" />
                              admin
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-cat">
                            <i className="pbmit-base-icon-folder-open-empty" />
                            <a href="blog-classic.html" rel="category tag">
                              Professionals
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                            <i className="pbmit-base-icon-chat-2" /> No Comments
                          </span>
                        </div>
                        <h3 className="pbmit-post-title">
                          <a href="blog-single-details.html">
                            Tips to Protecting Your Business and Family
                          </a>
                        </h3>
                        <div className="pbmit-entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. quis nostrud exercitation
                            laboris nisi ut aliquip extra consequat as opposed
                            to using 'Content here, content here', making it
                            look like…
                          </p>
                          <div className="pbmit-read-more-link">
                            <a href="blog-single-details.html">
                              <span>Read More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="post blog-classic">
                      <div className="pbmit-featured-img-wrapper">
                        <a href="blog-single-details.html">
                          <img
                            src="images/blog/blog-05.jpg"
                            className="img-fluid w-100"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="pbmit-blog-classic-inner">
                        <div className="pbmit-post-date">
                          <span className="pbmit-meta pbmit-meta-date">
                            <a href="blog-single-details.html" rel="bookmark">
                              <i className="pbmit-base-icon-calendar-2" />
                              <time
                                className="entry-date published"
                                dateTime="2020-06-03T04:47:45+00:00"
                              >
                                May 26, 2020
                              </time>
                              <time
                                className="updated pbmit-hide"
                                dateTime="2020-10-14T11:23:17+00:00"
                              >
                                October 14, 2020
                              </time>
                            </a>
                          </span>
                        </div>
                        <div className="pbmit-blog-meta pbmit-blog-meta-top">
                          <span className="pbmit-meta pbmit-meta-author">
                            <a
                              className="pbmit-author-link"
                              href="blog-classic.html"
                            >
                              <i className="pbmit-base-icon-user-1" />
                              admin
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-cat">
                            <i className="pbmit-base-icon-folder-open-empty" />
                            <a href="blog-classic.html" rel="category tag">
                              Creative Invention
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                            <i className="pbmit-base-icon-chat-2" /> No Comments
                          </span>
                        </div>
                        <h3 className="pbmit-post-title">
                          <a href="blog-single-details.html">
                            5 creative ways to address gaps in IT resources and
                            talent
                          </a>
                        </h3>
                        <div className="pbmit-entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. quis nostrud exercitation
                            laboris nisi ut aliquip extra consequat as opposed
                            to using 'Content here, content here', making it
                            look like…
                          </p>
                          <div className="pbmit-read-more-link">
                            <a href="blog-single-details.html">
                              <span>Read More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="post blog-classic">
                      <div className="pbmit-featured-img-wrapper">
                        <a href="blog-single-details.html">
                          <img
                            src="images/blog/blog-06.jpg"
                            className="img-fluid w-100"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="pbmit-blog-classic-inner">
                        <div className="pbmit-post-date">
                          <span className="pbmit-meta pbmit-meta-date">
                            <a href="blog-single-details.html" rel="bookmark">
                              <i className="pbmit-base-icon-calendar-2" />
                              <time
                                className="entry-date published"
                                dateTime="2020-06-03T04:47:45+00:00"
                              >
                                June 29, 2019
                              </time>
                              <time
                                className="updated pbmit-hide"
                                dateTime="2020-10-14T11:23:17+00:00"
                              >
                                October 14, 2020
                              </time>
                            </a>
                          </span>
                        </div>
                        <div className="pbmit-blog-meta pbmit-blog-meta-top">
                          <span className="pbmit-meta pbmit-meta-author">
                            <a
                              className="pbmit-author-link"
                              href="blog-classic.html"
                            >
                              <i className="pbmit-base-icon-user-1" />
                              admin
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-cat">
                            <i className="pbmit-base-icon-folder-open-empty" />
                            <a href="blog-classic.html" rel="category tag">
                              Marketing Growth
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                            <i className="pbmit-base-icon-chat-2" /> 3 Comments
                          </span>
                        </div>
                        <h3 className="pbmit-post-title">
                          <a href="blog-single-details.html">
                            Monthly Web Development To Update React Hooks Cons
                          </a>
                        </h3>
                        <div className="pbmit-entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. quis nostrud exercitation
                            laboris nisi ut aliquip extra consequat as opposed
                            to using 'Content here, content here', making it
                            look like…
                          </p>
                          <div className="pbmit-read-more-link">
                            <a href="blog-single-details.html">
                              <span>Read More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="post blog-classic">
                      <div className="pbmit-featured-img-wrapper">
                        <a href="blog-single-details.html">
                          <img
                            src="images/blog/blog-07.jpg"
                            className="img-fluid w-100"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="pbmit-blog-classic-inner">
                        <div className="pbmit-post-date">
                          <span className="pbmit-meta pbmit-meta-date">
                            <a href="blog-single-details.html" rel="bookmark">
                              <i className="pbmit-base-icon-calendar-2" />
                              <time
                                className="entry-date published"
                                dateTime="2020-06-03T04:47:45+00:00"
                              >
                                June 18, 2019
                              </time>
                              <time
                                className="updated pbmit-hide"
                                dateTime="2020-10-14T11:23:17+00:00"
                              >
                                October 14, 2020
                              </time>
                            </a>
                          </span>
                        </div>
                        <div className="pbmit-blog-meta pbmit-blog-meta-top">
                          <span className="pbmit-meta pbmit-meta-author">
                            <a
                              className="pbmit-author-link"
                              href="blog-classic.html"
                            >
                              <i className="pbmit-base-icon-user-1" />
                              admin
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-cat">
                            <i className="pbmit-base-icon-folder-open-empty" />
                            <a href="blog-classic.html" rel="category tag">
                              Business
                            </a>
                          </span>
                        </div>
                        <h3 className="pbmit-post-title">
                          <a href="blog-single-details.html">
                            The security risks of changing package owners
                          </a>
                        </h3>
                        <div className="pbmit-entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. quis nostrud exercitation
                            laboris nisi ut aliquip extra consequat as opposed
                            to using 'Content here, content here', making it
                            look like…
                          </p>
                          <div className="pbmit-read-more-link">
                            <a href="blog-single-details.html">
                              <span>Read More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="post blog-classic">
                      <div className="pbmit-featured-img-wrapper">
                        <a href="blog-single-details.html">
                          <img
                            src="images/blog/blog-08.jpg"
                            className="img-fluid w-100"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="pbmit-blog-classic-inner">
                        <div className="pbmit-post-date">
                          <span className="pbmit-meta pbmit-meta-date">
                            <a href="blog-single-details.html" rel="bookmark">
                              <i className="pbmit-base-icon-calendar-2" />
                              <time
                                className="entry-date published"
                                dateTime="2020-06-03T04:47:45+00:00"
                              >
                                June 10, 2019
                              </time>
                              <time
                                className="updated pbmit-hide"
                                dateTime="2020-10-14T11:23:17+00:00"
                              >
                                October 14, 2020
                              </time>
                            </a>
                          </span>
                        </div>
                        <div className="pbmit-blog-meta pbmit-blog-meta-top">
                          <span className="pbmit-meta pbmit-meta-author">
                            <a
                              className="pbmit-author-link"
                              href="blog-classic.html"
                            >
                              <i className="pbmit-base-icon-user-1" />
                              admin
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-cat">
                            <i className="pbmit-base-icon-folder-open-empty" />
                            <a href="blog-classic.html" rel="category tag">
                              Creative Invention
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                            <i className="pbmit-base-icon-chat-2" /> No Comments
                          </span>
                        </div>
                        <h3 className="pbmit-post-title">
                          <a href="blog-single-details.html">
                            Tips to make your workforce a security front line
                          </a>
                        </h3>
                        <div className="pbmit-entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. quis nostrud exercitation
                            laboris nisi ut aliquip extra consequat as opposed
                            to using 'Content here, content here', making it
                            look like…
                          </p>
                          <div className="pbmit-read-more-link">
                            <a href="blog-single-details.html">
                              <span>Read More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="post blog-classic">
                      <div className="pbmit-featured-img-wrapper">
                        <a href="blog-single-details.html">
                          <img
                            src="images/blog/blog-09.jpg"
                            className="img-fluid w-100"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="pbmit-blog-classic-inner">
                        <div className="pbmit-post-date">
                          <span className="pbmit-meta pbmit-meta-date">
                            <a href="blog-single-details.html" rel="bookmark">
                              <i className="pbmit-base-icon-calendar-2" />
                              <time
                                className="entry-date published"
                                dateTime="2020-06-03T04:47:45+00:00"
                              >
                                May 8, 2019
                              </time>
                              <time
                                className="updated pbmit-hide"
                                dateTime="2020-10-14T11:23:17+00:00"
                              >
                                October 14, 2020
                              </time>
                            </a>
                          </span>
                        </div>
                        <div className="pbmit-blog-meta pbmit-blog-meta-top">
                          <span className="pbmit-meta pbmit-meta-author">
                            <a
                              className="pbmit-author-link"
                              href="blog-classic.html"
                            >
                              <i className="pbmit-base-icon-user-1" />
                              admin
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-cat">
                            <i className="pbmit-base-icon-folder-open-empty" />
                            <a href="blog-classic.html" rel="category tag">
                              Marketing Growth
                            </a>
                          </span>
                          <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                            <i className="pbmit-base-icon-chat-2" /> No Comments
                          </span>
                        </div>
                        <h3 className="pbmit-post-title">
                          <a href="blog-single-details.html">
                            Efficient &amp; Measurable Benefits of Software
                          </a>
                        </h3>
                        <div className="pbmit-entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. quis nostrud exercitation
                            laboris nisi ut aliquip extra consequat as opposed
                            to using 'Content here, content here', making it
                            look like…
                          </p>
                          <div className="pbmit-read-more-link">
                            <a href="blog-single-details.html">
                              <span>Read More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 blog-left-col">
                <aside className="sidebar">
                  <aside className="widget widget-search">
                    <form className="search-form">
                      <input
                        type="search"
                        className="search-field form-control"
                        placeholder="Search …"
                        defaultValue=""
                      />
                      <button type="submit" className="search-submit" />
                    </form>
                  </aside>
                  <aside className="widget widget-recent-post">
                    <h2 className="widget-title">Recent posts</h2>
                    <ul className="recent-post-list">
                      <li className="recent-post-list-li">
                        <a
                          className="recent-post-thum"
                          href="blog-single-details.html"
                        >
                          <img
                            src="images/recent-post/blog-01.jpg"
                            className="img-fluid"
                            alt=""
                          />
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
                      <li className="recent-post-list-li">
                        <a
                          className="recent-post-thum"
                          href="blog-single-details.html"
                        >
                          <img
                            src="images/recent-post/blog-02.jpg"
                            className="img-fluid"
                            alt=""
                          />
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
                      <li className="recent-post-list-li">
                        <a
                          className="recent-post-thum"
                          href="blog-single-details.html"
                        >
                          <img
                            src="images/recent-post/blog-03.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <span className="pbmit-rpw-content">
                          <span className="pbmit-rpw-title">
                            <a href="blog-single-details.html">
                              Exploring Latest Web Design Together With Theme
                            </a>
                          </span>
                          <span className="pbmit-rpw-date">
                            <a href="blog-single-details.html">June 3, 2020</a>
                          </span>
                        </span>
                      </li>
                      <li className="recent-post-list-li">
                        <a
                          className="recent-post-thum"
                          href="blog-single-details.html"
                        >
                          <img
                            src="images/recent-post/blog-04.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <span className="pbmit-rpw-content">
                          <span className="pbmit-rpw-title">
                            <a href="blog-single-details.html">
                              Tips to Protecting Your Business and Family
                            </a>
                          </span>
                          <span className="pbmit-rpw-date">
                            <a href="blog-single-details.html">May 26, 2020</a>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </aside>
                  <aside className="widget widget-categories">
                    <h3 className="widget-title">Categories</h3>
                    <ul>
                      <li>
                        <a href="blog-classic.html">
                          Business<span>2</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-classic.html">
                          Creative Invention<span>3</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-classic.html">
                          Marketing Growth<span>2</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-classic.html">
                          Professionals<span>2</span>
                        </a>
                      </li>
                    </ul>
                  </aside>
                  <aside className="widget single-service-contact">
                    <div className="single-service-contact-inner">
                      <p>
                        <img
                          src="images/service/img-01.png"
                          className="img-fluid"
                          alt=""
                        />
                      </p>
                      <h5>Managed It services</h5>
                      <p>
                        <strong>Call:</strong> (800) 456-1234 <br />{" "}
                        <strong>Mail:</strong>
                        <a
                          href="https://itinc-demo.pbminfotech.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="8de4f9e4e3eecde8f5ece0fde1e8a3eee2e0"
                        >
                          [email&nbsp;protected]
                        </a>
                      </p>
                      <ul className="pbmit-social-links">
                        <li className="pbmit-social-li pbmit-social-facebook">
                          <a href="#" target="_blank" rel="noopener">
                            <span>
                              <i className="pbmit-base-icon-facebook-squared" />
                            </span>
                          </a>
                        </li>
                        <li className="pbmit-social-li pbmit-social-twitter">
                          <a href="#" target="_blank" rel="noopener">
                            <span>
                              <i className="pbmit-base-icon-twitter" />
                            </span>
                          </a>
                        </li>
                        <li className="pbmit-social-li pbmit-social-linkedin">
                          <a href="#" target="_blank" rel="noopener">
                            <span>
                              <i className="pbmit-base-icon-linkedin-squared" />
                            </span>
                          </a>
                        </li>
                        <li className="pbmit-social-li pbmit-social-youtube">
                          <a href="#" target="_blank" rel="noopener">
                            <span>
                              <i className="pbmit-base-icon-youtube-play" />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                  <aside className="widget widget-tag-cloud">
                    <h3 className="widget-title">Tag Cloud</h3>
                    <div className="tagcloud">
                      <ul className="wp-tag-cloud">
                        <li>
                          <a href="project-style-1.html">Development</a>
                        </li>
                        <li>
                          <a href="project-style-1.html">IT Security</a>
                        </li>
                        <li>
                          <a href="project-style-1.html">Management</a>
                        </li>
                        <li>
                          <a href="project-style-1.html">Product</a>
                        </li>
                        <li>
                          <a href="project-style-1.html">Strategies</a>
                        </li>
                        <li>
                          <a href="project-style-1.html">Web Design</a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </aside>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Classic  End */}
      </div>
      {/* Page Content End */}
    </>
  );
}
