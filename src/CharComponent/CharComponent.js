import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
  
  return (
    <div className="charComp" onClick={() => props.handleRemoveChar(props.id)}>
      <p>{props.letter}</p>
    </div>
  );

};

export default CharComponent;