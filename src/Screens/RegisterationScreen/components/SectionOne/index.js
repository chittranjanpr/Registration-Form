import React from "react";
import "./style.scss";
import TextWrapper from "../../../../Components/TextWrapper";
import { fonts, colors } from "../../../../Themes";
import InputWrapper from "../../../../Components/InputWrapper";
import DropDown from "../../../../Components/DropDown";
import { countryList, stateList } from "../../../../utils/constants";
import Button from "../../../../Components/Button";

const SectionOne = (props) => {
  const genderList = [ "Male", "Female", "Other"];
  return (
      <div className="section-one-container">
          <TextWrapper
            desc="Add your personal details"
            fontSize={fonts.x_large}
            fontWeight={'bold'}
            lineHeight={2}
            textAlign={'center'}
          />
          <TextWrapper
            desc="Loren Ipsum is simply dummy textof the priting and typetesting industry."
            fontSize={fonts.x_small}
            textAlign={'center'}
            marginBottom={'10px'}
          />
          <div className="section-one-form-container">
                <InputWrapper
                    headerText="Full Name"
                    placeholder="Enter the Full Name"
                    fontSize={fonts.x_small}
                    type="text"
                    inputStyles={{width: "-webkit-fill-available",outlineColor: colors.orange, }}
                    value={props.fullname || ""}
                    onTextChange={( val ) => props.handleChange(val, "fullname")}
                    isError={props.isError}
                />
                <div className="section-one-gender-cont">
                  <TextWrapper
                      desc={"Gender"}
                      fontSize={fonts.x_small}
                      lineHeight={3}
                      color={colors.grey}
                  />
                    <div className="section-one-gender">
                      {genderList.map((data, index)=>(
                        <button key={index}
                         className={`section-one-gender-button ${props.gender == data ? `section-one-gender-button-active` : "" }`}
                         onClick={() => props.handleChange(data, "gender")}
                      >{data}</button>
                      ))}
                      {props.isError && props.gender.length == 0 ? <TextWrapper
                          desc={"* Fill the field"}
                          fontSize={fonts.x_small} 
                          lineHeight={1}
                          color={colors.orange} 
                        /> : null}
                    </div>
                </div>
                <DropDown
                    headerText="Country"
                    fontSize={fonts.x_small}
                    width={"-webkit-fill-available"}
                    outlineColor={colors.orange}
                    listData={ countryList }
                    keepDefault={false}
                    marginBottom={'8px'}
                    placeholder="Select Country"
                    value={ props.country}
                    isError={props.isError}
                    handleClick={(val) => props.handleChange(val, "country") }
                />
                <DropDown
                    headerText="State"
                    fontSize={fonts.x_small}
                    width={"-webkit-fill-available"}
                    outlineColor={colors.orange}
                    listData={ stateList }
                    keepDefault={false}
                    placeholder="Select State"
                    marginBottom={'8px'}
                    isError={props.isError}
                    value={ props.state }
                    handleClick={(val) => props.handleChange(val, "state") }
                />
                <InputWrapper
                    headerText="Phone"
                    placeholder="Enter Mobile Number"
                    fontSize={fonts.x_small}
                    name="mob-number"
                    value={props.number || ""}
                    padding={'6px 6px 6px 41px'}
                    inputStyles={{width: "-webkit-fill-available", outlineColor: colors.orange }}
                    type="number"
                    isError={props.isError}
                    onTextChange={( val ) => props.handleChange(val, "number")}
                />
                <Button
                    desc="Next"
                    fontSize={fonts.small}
                    bgColor={colors.orange}
                    width={"-webkit-fill-available"}
                    margin={'15px 0px'}
                    handleClick={ ()=> props.handleSection(1) }
                    color={colors.white}
                    style={{border: 'none', borderRadius: '4px'}}
                />
          </div>
          <div className="section-one-account">
            <TextWrapper
              desc="Already Have an account?"
              fontSize={fonts.x_small}
              lineHeight={2}
              textAlign={'center'}
            />
            <TextWrapper
              desc="Log In"
              fontSize={fonts.x_small}
              lineHeight={2}
              marginLeft={'6px'}
              textAlign={'center'}
              color={colors.orange}
            />
          </div>

      </div>
  )
};

export default SectionOne;
