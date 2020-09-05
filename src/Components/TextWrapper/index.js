import React from "react";
import "./style.scss";
import { colors } from "../../Themes";

const TextWrapper = (props) => {
    const { desc, style, fontSize, textColor } = props;
    const styles = {
        fontSize: fontSize || 19,
        color: textColor || colors.black,
        ...props
    }
  return (
      <div style={ styles } >
          { desc }
      </div>
  )
};

export default TextWrapper;
