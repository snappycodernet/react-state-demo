import React from 'react';

const ValidationComponent = (props) => {

  return ( 
    <div>
      {props.textLength >= 5 ? <h2>Text is long enough! <p>Length: {props.textLength}</p></h2> : <h2>Text is too short!<p>Length: {props.textLength}</p></h2>}
    </div>
  );

};

export default ValidationComponent;