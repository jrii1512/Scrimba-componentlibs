import React from "react";
import Banner from "./banner";

export default function Banners() {
  const types = ["success", "warning", "error", "neutral"];

  return (
    <section id="banner" className="banner-container">
      <div className="titles-containers">
        <h1 className="title banners-title">BANNERS</h1>
        <h3 className="title multiline-title">MULTI LINE</h3>
        <h3 className="title singleline-title">SINGLE LINE</h3>
      </div>

      <div className="multiline-banners">
        {types.map((type) => (
          <div className="banner-container">
            <h3 classnName="title type-title">{type.toUpperCase()}</h3>
            <Banner className="mult" type={type}>
              <div className="banner-children">
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid pariatur, ipsum similique veniam quo totam eius
                  aperiam dolorum.
                </p>
              </div>
            </Banner>

            <Banner className="single" type={type}>
              <div className="banner-children">
                <h5>
                  {type === "success"
                    ? "All good bro"
                    : type === "warning"
                    ? "Ouhhh"
                    : type === "error"
                    ? "Sorry bro, its not go."
                    : type === "neutral"
                    ? "Neutral"
                    : ""}
                </h5>
              </div>
            </Banner>
          </div>
        ))}
      </div>
    </section>
  );
}
