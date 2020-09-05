import React from "react";
import "./style.scss";

const WrapperComponent = (props) => {
  return ( props.show ?
      <div className="wrapper-container">
          {props.children}
      </div>
    :null)
};

export default WrapperComponent;
