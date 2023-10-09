import React from "react";

export default function SearchSection() {
  return (
    <div className="pbmit-search-overlay">
      <div className="pbmit-icon-close">
        <i className="pbmit-base-icon-cancel" />
      </div>
      <div className="pbmit-search-outer">
        <form className="pbmit-site-searchform">
          <input
            type="search"
            className="form-control field searchform-s"
            name="s"
            placeholder="Write Search Keyword & Press Enter"
          />
        </form>
      </div>
    </div>
  );
}
