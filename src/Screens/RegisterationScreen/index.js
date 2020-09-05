import React, { PureComponent, Fragment } from "react";
import Header from "../../Components/Header";
import WrapperComponent from "../../Components/WrapperComponent";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SuccessPage from "./components/SuccessPage";

class RegistrationScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      section: 0,
      fullname: '',
      gender: '',
      country: '',
      state: '',
      number: '',
      companyName: '',
      email: '',
      jobTitle: '',
      experience: '',
      checkbox: false,
      isError: false
    };
  }

  handleChange = (data, id) => {
    if(id == "checkbox")
     this.setState({ checkbox: !this.state.checkbox });
    else
    this.setState({ [id]: data });
  };

  handleSection = (data) => {
    let { section } = this.state;
    let isChecked = this.validateData(section);
    if(!isChecked) {
      this.setState({isError: true})
      return null;
    }else{
      this.setState({ section: data, isError: false });
    }
  };

  validateData = () =>{
    const {section, fullname, gender, country, state, number, companyName, email, jobTitle, experience, checkbox } = this.state;
    if( section == 0){
      if( fullname.trim().length == 0 || gender.trim().length == 0 || country.trim().length == 0 ||
      state.trim().length == 0 || number.trim().length !== 10){
       return false
     }
    }else if( section == 1){
      if( companyName.trim().length == 0 || email.trim().length == 0 || jobTitle.trim().length == 0 ||
      experience.trim().length == 0 || checkbox == false){
       return false
     }
    }
    return true
  }

  handleVerify = () => {
    const { fullname, gender, country, state, number, companyName, email, jobTitle, experience, checkbox } = this.state;
    const data ={
      fullname: fullname,
      gender: gender,
      country: country,
      state: state,
      number: number,
      companyName: companyName,
      email: email,
      jobTitle: jobTitle,
      experience: experience,
      checkbox: checkbox
    }
    // localStorage.setItem("userDeatils", JSON.stringify(data))
    this.setState({section: 3})
  }

  render() {
    let { section } = this.state;
    return (
      <Fragment>
        <Header { ...this.state } />
        <WrapperComponent show={ section == 0 ? true : false }>
          <SectionOne 
            handleSection={this.handleSection } 
            handleChange={ this.handleChange }
            {...this.state} 
          />
        </WrapperComponent>
        <WrapperComponent show={ section == 1 ? true : false }>
          <SectionTwo 
            handleSection={ this.handleSection }
            handleChange={ this.handleChange } 
            {...this.state} 
          />
        </WrapperComponent>
        <WrapperComponent show={ section == 2 ? true : false }>
          <SectionThree
            handleSection={ this.handleSection } 
            handleChange={ this.handleChange }
            handleVerify={ this.handleVerify }
            {...this.state}
          />
        </WrapperComponent>
        <WrapperComponent show={ section == 3 ? true : false }>
          <SuccessPage />
        </WrapperComponent>
      </Fragment>
    );
  }
}

export default RegistrationScreen;
