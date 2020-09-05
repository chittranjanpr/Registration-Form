import React from "react";
import "./style.scss";
import TextWrapper from "../../../../Components/TextWrapper";
import { fonts, colors } from "../../../../Themes";
import InputWrapper from "../../../../Components/InputWrapper";
import DropDown from "../../../../Components/DropDown";
import { countryList } from "../../../../utils/constants";
import Button from "../../../../Components/Button";
import { PLACEHOLDER_IMAGE } from "../../../../assets/images";

const SectionTwo = (props) => {
  const genderList = [ "Male", "Female", "Other"];
  return (
      <div className="section-one-container">
          <TextWrapper
            desc="Add your company details"
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
              <div className="section-two-form-image-cont">
                  <div className="section-two-form-image">
                     <img src={ PLACEHOLDER_IMAGE}  />
                  </div>
                  <TextWrapper
                    desc="Upload your company logo"
                    fontSize={fonts.small}
                    textAlign={'center'}
                    color={colors.orange}
                    marginBottom={'10px'}
                    alignSelg={'center'}
                    marginLeft={'30px'}
                />
              </div>
                <InputWrapper
                    headerText="Company Name"
                    placeholder="Enter company Name"
                    fontSize={fonts.x_small}
                    type="text"
                    isError={props.isError}
                    value={props.companyName || ""}
                    inputStyles={{width: "-webkit-fill-available", outlineColor: colors.orange }}
                    onTextChange={( val ) => props.handleChange(val, "companyName")}
                />
                <InputWrapper
                    headerText="Email Id"
                    placeholder="Enter Email-Id"
                    fontSize={fonts.x_small}
                    type="text"
                    isError={props.isError}
                    value={props.email || ""}
                    inputStyles={{width: "-webkit-fill-available", outlineColor: colors.orange }}
                    onTextChange={( val ) => props.handleChange(val, "email")}
                />
                <InputWrapper
                    headerText="Job Title"
                    placeholder="Enter title"
                    fontSize={fonts.x_small}
                    type="text"
                    isError={props.isError}
                    value={props.jobTitle || ""}
                    inputStyles={{width: "-webkit-fill-available", outlineColor: colors.orange }}
                    onTextChange={( val ) => props.handleChange(val, "jobTitle")}
                />
                <InputWrapper
                    headerText="Years of Experience"
                    fontSize={fonts.x_small}
                    type="text"
                    isError={props.isError}
                    value={props.experience || ""}
                    inputStyles={{width: "-webkit-fill-available", outlineColor: colors.orange }}
                    onTextChange={( val ) => props.handleChange(val, "experience")}
                />
                <div className="section-two-form-image-cont">
                    <InputWrapper
                        type="checkbox"
                        isError={props.isError}
                        value={''}
                        inputStyles={{marginTop: '10px' }}
                        onTextChange={(val) => props.handleChange(val , "checkbox")}
                    />   
                     <TextWrapper
                        desc="I accept the"
                        fontSize={fonts.x_small}
                        lineHeight={2}
                        marginRight={'4px'}
                        textAlign={'center'}
                        />
                    <TextWrapper
                        desc="Terms and Condition"
                        fontSize={fonts.x_small}
                        lineHeight={2}
                        color={colors.orange}
                        textAlign={'center'}
                    />
                </div>
                <div className="section-two-form-image-cont">
                    <Button
                        desc="Back"
                        fontSize={fonts.small}
                        bgColor={colors.light_grey}
                        margin={'15px 0px'}
                        handleClick={ ()=> props.handleSection(0) }
                        style={{border: 'none', borderRadius: '4px'}}
                    />
                    <Button
                        desc="Next"
                        fontSize={fonts.small}
                        bgColor={colors.orange}
                        width={"-webkit-fill-available"}
                        margin={'15px 8px'}
                        disabled={!props.checkbox}
                        color={colors.white}
                        handleClick={ ()=> props.handleSection(2) }
                        style={{border: 'none', borderRadius: '4px'}}
                    />
                </div>
          </div>
      </div>
  )
};

export default SectionTwo;
