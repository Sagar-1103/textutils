import React from "react";
// import { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#374259",
    backgroundColor: props.mode === "dark" ? "#374259" : "white",
  };
  return (
    <div className="container" style={{color: props.mode === "dark" ? "white" : "#374259"}}>
      <h1 className="my-2">About Us</h1>
      <div className="box rounded" style={{ borderColor:props.mode==="dark"?"white":"black",border:"2px solid",}}>
      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
        style={myStyle}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={myStyle}
            >
              <strong>Newsletter Subscription</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Stay up-to-date with all the exciting developments by subscribing
              to our newsletter. Get exclusive content, special offers, and
              early access to resources delivered right to your inbox.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={myStyle}
            >
              <strong>Community Support</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Being part of a like-minded community is essential for personal
              and professional growth. Connect with other individuals who share
              your interests, exchange ideas, and learn from each other in our
              vibrant community forum.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={myStyle}
            >
              <strong>Interactive Tools</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              To make your journey even more engaging and effective, we offer
              interactive tools and features that will assist you in [Describe
              what kind of tools or features you provide]. These tools are
              designed to simplify complex processes and help you achieve your
              goals with ease.
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
