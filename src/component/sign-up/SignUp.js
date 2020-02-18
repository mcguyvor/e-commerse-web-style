import React,{useState} from 'react';

import './sign-up.scss';

import FormInput from '../form-input/FormInput';

import CustomButton from '../custom-button/CustomButton';

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

const SignUp = () =>{

    const initialValue = {
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    };


    const [input,setInput] = useState(initialValue);

    const {displayName,email,password,confirmPassword} = input;

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = input;
        if(password!==confirmPassword){
            alert("Passwords don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});

            setInput(initialValue);

        }catch(error){
            console.log(error);
        }
    }

    const handleChange = e =>{

        const {name,value} = e.target;
        console.log(name,value);
        
        setInput({
            ...input,
            [name]: value
        })
    }

    return(

        <div className='sign-up'>
            
            <h2 className='title'>I do not have an account</h2>
            
            <span>Sign up with your email and password</span>
            
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                type='text' 
                name='displayName' 
                value={displayName} 
                onChange={handleChange}
                label='Display Name'
                required
                >
                </FormInput>

                <FormInput 
                type='text' 
                name='email' 
                value={email} 
                onChange={handleChange}
                label='email'
                required
                >
                </FormInput>

                <FormInput 
                type='pasword' 
                name='password' 
                value={password} 
                onChange={handleChange}
                label='Password'
                required
                >
                </FormInput>

                <FormInput 
                type='password' 
                name='confirmPassword' 
                value={confirmPassword} 
                onChange={handleChange}
                label='Confirm Password'
                required
                >
                </FormInput>

                <CustomButton type='submit'>SignUp</CustomButton>
            
            </form>
                
        </div>    
        
        
    )





}
export default SignUp;