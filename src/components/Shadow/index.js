import React from 'react';

const Shadow = (props) => {
  const inlineStyle = {
    boxShadow: `${props.horizontalLength}px ${props.verticalLength}px ${props.blurRadius}px ${props.spreadRadius}px ${props.rgba}`
  }
  return (
    <div style={inlineStyle} className="shadow">
      {props.children}
    </div>
  )
};
export default Shadow;