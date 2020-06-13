import React from "react";
import Main from './Main.jsx';

const App = (props) => {

  return (
    <div>
      <Main
        // eslint-disable-next-line react/prop-types
        promo={props.promo}
      />
    </div>
  );
};

export default App;
