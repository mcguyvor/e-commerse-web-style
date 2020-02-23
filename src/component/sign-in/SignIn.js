import React,{useState} from 'react';
import './sign-in.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import {auth ,signInWithGoogle} from '../../firebase/firebase.utils';

const SignIn = () =>{

    const initialValue = {
        email:'',
        password:''
    }

    const [emailPassword,setEmailPassword] = useState(initialValue);
    

    const handleSubmit =async(e)=>{
        e.preventDefault()
        const {email,password} = emailPassword;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            setEmailPassword(initialValue);
        }catch(err){
            console.log(err);
        }

    }

    const handleChange=(e)=>{
        setEmailPassword({...emailPassword,
            [e.target.name]:e.target.value
        })
    }
        

        return(

            <div className='sign-in'>
                
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                 
                <form onSubmit={handleSubmit}>

                    <FormInput 
                        name='email' 
                        value={emailPassword.email} 
                        handleChange={handleChange} 
                        label='email'
                        required
                        />

                    <FormInput  
                        name='password' 
                        value={emailPassword.password} 
                        handleChange={handleChange} 
                        label='password'                        
                        required
                        />

                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                        {' '}
                        Sign in with Google
                        {' '}
                        </CustomButton>
                    </div>
                    

                </form>
            
            </div>
        )
}

export default SignIn;