import react from 'react';

const boxSize = "60px";
var backColor = "white";


export default function Box({w, success}) {
  var textColor = "white";
  if(success === "g") {
    backColor = "#6aaa64";
  } else if(success === "y") {
    backColor = "#c9b458";
  } else if(success ==="n") {
    backColor = "#787c7e";
  } else {
    backColor = "white";
    textColor = "black";
  }

  var boxStyle = {
    border: "solid black 1px",
    width: boxSize,
    height: boxSize,
    backgroundColor: backColor,
    fontSize: "40px",
    color: textColor,
    fontWeight: "bold"
  }
  return (
    <div style={boxStyle}>
      {w}
    </div>
  )
}
