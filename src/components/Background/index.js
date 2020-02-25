import React from "react";
import "./style.css";

function Background(props) {
    return (
      <div className="background" {...props}>
        {props.children}
      </div>
    );
  }
  
  export default Background;