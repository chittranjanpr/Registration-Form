import React, { Fragment} from "react";
import "./style.scss";
import TextWrapper from "../../../../Components/TextWrapper";
import { fonts, colors, Theme } from "../../../../Themes";
import InputWrapper from "../../../../Components/InputWrapper";
import Button from "../../../../Components/Button";

const SectionThree = (props) => {
  const genderList = [ "Male", "Female", "Other"];
  return (
      <Fragment>
          <TextWrapper
            desc="Enter Your OTP"
            fontSize={fonts.x_large}
            fontWeight={'bold'}
            lineHeight={2}
            textAlign={'center'}
          />
          <TextWrapper
            desc={<span>For your securit, we need to verfy your identify.We sent 5-digit code to <span style={{ fontWeight: Theme.FONT_WEIGHT}}> name@domain.com. </span> Please enter it below.</span>}
            fontSize={fonts.x_small}
            textAlign={'center'}
            marginBottom={'10px'}
          />
          <div className="section_three_container">
            <TextWrapper
                desc={"Enter your code"}
                fontSize={fonts.x_small} 
                lineHeight={3}
                color={colors.grey}
            />
                <div className="section_three_otp_cont">
                    {[1,2,3,4,5].map((data) =>(
                        <InputWrapper
                            key={data}
                            fontSize={fonts.x_small}
                            maxlength={1}
                            inputStyles={{width: "55%", outlineColor: colors.orange, textAlign: 'center'}}
                            padding={'13px'}
                            onTextChange={( val ) => console.log(val, "name")}
                        />
                    ))}
                </div>
                <div className="section-two-form-image-cont">
                        <Button
                            desc="Back"
                            fontSize={fonts.small}
                            bgColor={colors.light_grey}
                            margin={'15px 0px'}
                            handleClick={ ()=> props.handleSection(1) }
                            style={{border: 'none', borderRadius: '4px'}}
                        />
                        <Button
                            desc="Verify"
                            fontSize={fonts.small}
                            bgColor={colors.orange}
                            width={"-webkit-fill-available"}
                            margin={'15px 8px'}
                            color={colors.white}
                            handleClick={ ()=> props.handleVerify() }
                            style={{border: 'none', borderRadius: '4px'}}
                        />
                    </div>
          </div>
          <TextWrapper
            desc={<span>Didn't receive the email? check your spam filter for an email from <span style={{ fontWeight: Theme.FONT_WEIGHT, color: colors.orange}}> name@domain.com. </span></span>}
            fontSize={fonts.x_small}
            textAlign={'center'}
            marginTop={'20px'}
            marginBottom={'10px'}
          />
      </Fragment>
  )
};

export default SectionThree;
