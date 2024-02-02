import React from 'react';
import ReactDOM from 'react-dom/client';

// ComponentComposition : Element inside a Element

// If we write {} curly braces inside JSX so we can run any javascript code insie curly braces

const ele1=(<p>This is first Element</p>);

const ele2=(<h3>
  {ele1}
  This is second element
  </h3>);


const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(ele2);