// import React from 'react'; JXS imports react already.
import { StrictMode } from "react";
import { render } from "react-dom";
import Calculator from "./Calculator";

// JSX version of above.
const App = () => {
  return (
    <div>
      <Calculator />
    </div>
  );
};

// Renders app. StrictMode enforces safe code/apis from react.
render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

