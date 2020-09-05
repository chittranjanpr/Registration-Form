import React, { Fragment } from "react";
import "./style.scss";
import { colors, fonts } from "../../Themes";
import TextWrapper from "../TextWrapper";

const InputWrapper = (props) => {
  const {
    fontSize,
    textColor,
    type,
    placeholder,
    headerText,
    padding,
    name,
    value,
    inputStyles,
    maxlength,
    isError
  } = props;

  const styles = {
    fontSize: fontSize || 19,
    color: textColor || colors.black,
    padding: padding || "6px",
  };
  
  return (
    <div className="input_cont">

      <TextWrapper
        desc={headerText}
        fontSize={fonts.x_small} 
        lineHeight={3}
        color={colors.grey} />

      <div style={{ position: "relative" }}>
        <input
          type={ type }
          value={ value }
          style={{ ...inputStyles, ...styles }}
          maxLength={ maxlength || null }
          autoComplete="off"
          placeholder={ placeholder}
          onChange={(e) => props.onTextChange(e.target.value)}
        />

        {name == "mob-number" ? (
          <span className="input_mob_add91">+91</span>
        ) : null}

      </div>
      {isError ? <Fragment>
          { value.length == 0 ?       
          <TextWrapper
            desc={"* Fill the field"}
            fontSize={fonts.x_small} 
            lineHeight={1}
            color={colors.orange} 
          />: null
          // <TextWrapper
          //   desc={"* Invalid data"}
          //   fontSize={fonts.x_small} 
          //   lineHeight={1}
          //   color={colors.orange} 
          // />
        }
      </Fragment> : null}
    </div>
  );
};

export default InputWrapper;
