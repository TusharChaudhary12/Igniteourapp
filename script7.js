import React from "react";
import ReactDOM from "react-dom/client";

// ComponentComposition : Element inside a component

// If we write {} curly braces inside JSX so we can run any javascript code insie curly braces

const HeadingComponent = () => (
  <h1 className="name">Functional component returning JSX code</h1>
);

const Paragraph = (
  <div>
    <p className="para">
      <HeadingComponent />
      This is paragraph component
    </p>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(Paragraph);
