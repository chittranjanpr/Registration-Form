import React from 'react';
import "./style.scss"
import TextWrapper from '../../../../Components/TextWrapper';
import { fonts, colors } from '../../../../Themes';

const SuccessPage = ( props) => {

    return( 
        <div className="success_container">
            <div className="success_container_img">
                <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/business-success-1728582-1468939.png"}  />
            </div>
            <TextWrapper
                desc={"Registeration Successfull!!"}
                fontSize={fonts.large} 
                lineHeight={3}
                textAlign={'center'}
                color={colors.black}
            />
        </div>
    )
}

export default SuccessPage;