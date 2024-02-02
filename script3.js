import React from 'react';
import ReactDOM from 'react-dom/client';


// functional component

//we use ParcelCase to make function name
// it is a normal function which returns JSX

// it is a normal function which return react Element or bunch of react Element

// const HeadingComponent=()=>{
//  return  <h1>Functional component returning JSX code</h1>;
// }

// const HeadingComponent=()=><h1>Functional component returning JSX code</h1>;

const HeadingComponent = () => (< div className='heading'>
  <h1 className='name'>Functional component returning JSX code</h1>
</div>);

const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(<HeadingComponent />);
root.render(<HeadingComponent />);

