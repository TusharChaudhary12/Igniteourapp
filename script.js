import React from 'react';
import ReactDOM from 'react-dom/client'

// we are creating react element using react core

// React.createElement=>ReactElement-JS Object=>HTMl Element(render)

const parent=React.createElement("h1",{id:"Heading"},"Hello Javascript");

const root=ReactDOM.createRoot(document.querySelector(".root"));

root.render(parent);