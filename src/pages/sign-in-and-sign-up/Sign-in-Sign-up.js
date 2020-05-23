import React from 'react';

import './Sign-in-Sign-Up.scss';

import SignIn from '../../component/sign-in/SignIn';

import SignUp from '../../component/sign-up/SignUp';

const SignInSignUp = ()=>{

    



    return(

        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    
    )
}

export default SignInSignUp;