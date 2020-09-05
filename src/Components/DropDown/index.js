import React, { Fragment } from "react";
import "./style.scss";
import { colors, fonts } from "../../Themes";
import TextWrapper from "../TextWrapper";

const DropDown = (props) => {
    const { listData, keepDefault, value } = props;
    const { desc, style, fontSize, textColor, type, placeholder, headerText, padding, isError } = props;
    const styles = {
        fontSize: fontSize || 19,
        color: textColor || colors.black,
        padding: padding || '6px',
        border: '1px solid #CBCBCB',
        ...props
    }
  return (
      <Fragment>
        <TextWrapper
            desc={headerText}
            fontSize={fonts.x_small}
            lineHeight={3}
            color={colors.grey}
        />
        <div style={ styles } className="dropdown">
            {keepDefault ? (
                <div style={props.style} className="dropdown__button">
                { value && value ? value : "" } <i className="dropdown__arrow__down"></i>
                </div>
            ) : (
                <div style={props.style}>   { value && value ? value : placeholder }</div>
            )}
            <div className="dropdown-content">
                {listData && listData.map((data, index) => (
                <div key={index} className="dropdown-content-list" onClick={() => props.handleClick(data.text)}>
                {data.text}
                </div>
                ))}
            </div>
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
        }</Fragment> : null}
      </Fragment>
  )
};

export default DropDown;