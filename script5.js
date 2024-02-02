import React from 'react';
import ReactDOM from 'react-dom/client';

// ComponentComposition : Element inside a component 

// If we write {} curly braces inside JSX so we can run any javascript code insie curly braces

const ParagraphComponent=(<div>
  <p className='para'>This is paragraph component</p>
</div>);

let number =10;
const HeadingComponent = () => (< div className='heading'>
  {ParagraphComponent}
  {10+30-8}
  <br></br>
  {number}
  <br></br>
  <h1 className='name'>Functional component returning JSX code</h1>
</div>);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<HeadingComponent />);