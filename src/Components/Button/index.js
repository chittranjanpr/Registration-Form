import React, { Fragment } from "react";
import "./style.scss";
import { colors, fonts } from "../../Themes";
import TextWrapper from "../TextWrapper";

const Button = (props) => {
  const {
    style,
    fontSize,
    textColor,
    type,
    desc,
    padding,
    bgColor,
    handleClick,
    disabled
  } = props;
  const styles = {
    fontSize: fontSize || 19,
    color: textColor || colors.black,
    padding: padding || "6px",
    backgroundColor: bgColor || '#fff',
    cursor: 'pointer',
    opacity: disabled ? '0.6' : '',
    ...props.style,
    ...props,
  };
  return (
    <Fragment>
        <button onClick={ handleClick} style={styles}>{desc}</button>
    </Fragment>
  );
};

export default Button;
