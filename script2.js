import React from 'react';
import ReactDOM from 'react-dom/client';

// Create React Element using JSX

// Parcel transpiled JSX into create.ReactElement =>React Element =>JS Object =>HTML(render)

const heading=<h1 id="heading" className="head">Hello world using JSX</h1>;

const root=ReactDOM.createRoot(document.querySelector(".root"));

root.render(heading);