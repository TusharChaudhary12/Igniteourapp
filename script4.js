import React from 'react';
import ReactDOM from 'react-dom/client';

// ComponentComposition : Component inside a component 

const ParagraphComponent=()=>(<div>
  <p className='para'>This is paragraph component</p>
</div>);

const HeadingComponent = () => (< div className='heading'>
  {/* <ParagraphComponent/> */}
  {/* <ParagraphComponent></ParagraphComponent> */}
  {ParagraphComponent()}
  <h1 className='name'>Functional component returning JSX code</h1>
</div>);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<HeadingComponent />);