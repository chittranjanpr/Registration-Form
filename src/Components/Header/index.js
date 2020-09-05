import React, { Fragment} from 'react';
import './style.scss';

const Header = ( props ) =>{
    return(
        <div className="header__container">
            <div>
               {props.section == 0 ?
                 <span className="header__container_number_active">1</span>
                 :
                <Fragment>
                 <span className="header__container_number">1</span>
                </Fragment>
               }
               <span className={props.section == 0 ? "header__container_text_active" : "header__container_text"}> Personal Details </span>  
            </div>
            <div>
               {props.section == 1 ?
                 <span className="header__container_number_active">2</span>
                 :
                <Fragment>
                    {props.section > 1 ?
                     <span className="header__container_number">2</span>
                    : <span className="header__container_number">2</span>}
                </Fragment>
               }
               <span className={props.section == 1 ? "header__container_text_active" :"header__container_text" }>Comapny Details</span>  
            </div>
            <div>
            {props.section == 2 ?
                 <span className="header__container_number_active">3</span>
                 :
                <Fragment>
                    {props.section > 2 ?
                     <span className="header__container_number">3</span>
                    : <span className="header__container_number">3</span>}
                </Fragment>
             }
               <span className={props.section == 2 ? "header__container_text_active" :"header__container_text"}>Email Verification</span> 
            </div>
        </div>
    )
}

export default Header;