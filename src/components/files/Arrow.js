import React from 'react'

function Arrow({src}) {
  let imgStyles = {
    width: 100 + "%",
    height: "auto"
  };
  return (
    <div>
      <img src={src} alt="slide-img" style={imgStyles}></img>
    </div>
  )
}

export default Arrow
