import React from "react";
import Banner from "./banner";

export default function Banners() {
  const types = ["success", "warning", "error", "neutral"];

  return (
    <div className="banners">
      <h1 className="banner-title">Banners</h1>
      <h3 className="banner-multiline">Text and title</h3>

      <div className="multiline-banners">
        {types.map((type) => (
          <div className="banner-container">
            <h3 classnName="title banner-containter-title">
              {type.toUpperCase()}
            </h3>
            <Banner className="mult" type={type}>
              <div className="banner-container-text">
                <h5>
                  {type === "success"
                    ? "Congratulation"
                    : type === "warning"
                    ? "Warning"
                    : type === "error"
                    ? "Error"
                    : type === "neutral"
                    ? "It is ok ... really is"
                    : ""}
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
              </div>
            </Banner>
          </div>
        ))}
      </div>
    </div>
  );
}
