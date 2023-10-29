import React from "react";
import Banner from "./banner";

export default function Banners() {
  return (
    <div>
      <h1 className="banner-title">Banners</h1>
      <h3 className="banner-multiline">Text and title</h3>

      <div>
        <h3 className="banner-success-title">Success</h3>

        <div className="banner-container">
          <div className="banner-container-title">title</div>
          <br/>
          <div className="banner-container-text">text</div>
        </div>
      </div>
    </div>
  );
}
