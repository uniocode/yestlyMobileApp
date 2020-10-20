import React from 'react';
import { NonScrollContainer } from '../../atoms/NonScrollContainer';
import { BigText } from '../../atoms/TextAtoms';


const LoginScreen = () => {
    return ( 
        <NonScrollContainer justify="flex-start" paddingTop="150px">
            <BigText> Welcome to Yestly!</BigText>
        </NonScrollContainer>
     );
}
 
export default LoginScreen;