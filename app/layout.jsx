// RootLayout.js
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import SearchSection from "./components/SearchSection";
import React from "react";

// inport css
import "./../public/css/aos.css";
import "./../public/css/base.css";
import "./../public/css/bootstrap.min.css";
import "./../public/css/flaticon.css";
import "./../public/css/fontawesome.css";
import "./../public/css/magnific-popup.css";
import "./../public/css/pbminfotech-base-icons.css";
import "./../public/css/responsive.css";
import "./../public/css/shortcode.css";
import "./../public/css/style.css";
import "./../public/css/swiper.min.css";
import "./../public/css/themify-icons.css";
import Head from "next/head";

// import js
// import "./../public/js/scripts.js";
// import "./../public/js/jquery-validate/jquery.validate.min.js";
import "./../public/js/aos.js";
// import "./../public/js/circle-progress.js";
// import "./../public/js/jquery.appear.js";
// import "./../public/js/jquery.magnific-popup.min.js";
// import "./../public/js/jquery.min.js";
// import "./../public/js/jquery.waypoints.min.js";
// import "./../public/js/numinate.min.js";
import "./../public/js/popper.min.js";
import "./../public/js/swiper.min.js";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <script>
          {`
          // Your JavaScript code here
          (function () {
            var js =
              "window['__CF$cv$params']={r:'801474507a92e9ab',t:'MTY5MzgxMTg2NC4yNDEwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='../cdn-cgi/challenge-platform/h/g/scripts/jsd/3e377faf/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";
            var _0xh = document.createElement("iframe");
            _0xh.height = 1;
            _0xh.width = 1;
            _0xh.style.position = "absolute";
            _0xh.style.top = 0;
            _0xh.style.left = 0;
            _0xh.style.border = "none";
            _0xh.style.visibility = "hidden";
            document.body.appendChild(_0xh);
            function handler() {
              var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;
              if (_0xi) {
                var _0xj = _0xi.createElement("script");
                _0xj.innerHTML = js;
                _0xi.getElementsByTagName("head")[0].appendChild(_0xj);
              }
            }
            if (document.readyState !== "loading") {
              handler();
            } else if (window.addEventListener) {
              document.addEventListener("DOMContentLoaded", handler);
            } else {
              var prev = document.onreadystatechange || function () {};
              document.onreadystatechange = function (e) {
                prev(e);
                if (document.readyState !== "loading") {
                  document.onreadystatechange = prev;
                  handler();
                }
              };
            }
          })();
        `}
        </script>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js/v8b253dfea2ab4077af8c6f58422dfbfd1689876627854"
          integrity="sha512-bjgnUKX4azu3dLTVtie9u6TKqgx29RBwfj3QXYt5EKfWM/9hPSAI/4qcV5NACjwAo8UtTeWefx6Zq5PHcMm7Tg=="
          data-cf-beacon='{"rayId":"801474507a92e9ab","version":"2023.8.0","r":1,"b":1,"token":"125856bf84ab44059737e93b01aa0fef","si":100}'
          crossorigin="anonymous"
        ></script>
      </Head>
      <body>
        <SearchSection />
        <Header />
        {children}
        <Footer />
      </body>
    </>
  );
}
