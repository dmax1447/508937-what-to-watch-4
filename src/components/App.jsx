import React from "react";
import Main from './Main.jsx';

const App = (props) => {

  return (
    <div>
      <Main
        // eslint-disable-next-line react/prop-types
        promo={props.promo}
        films={props.films}
      />
    </div>
  );
};

export default App;
