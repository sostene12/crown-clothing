import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth,signinWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.scss';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }

     handleSubmit = async (e) =>{
        e.preventDefault();

        const { email,password } = this.state;
        try {
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:'',password:''});
        } catch (error) {
            console.log(error.message)
        }
        
    }

    handleChange = (e) =>{
        const { value,name } = e.target;
        this.setState({[name]:value})

    }


    render(){
        return <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" name='email' 
                value={this.state.email} 
                handleChange={this.handleChange}
                label="Email" required />
                <FormInput type="password" name='password' 
                value={this.state.password} 
                handleChange={this.handleChange}
                label='Password' required />
                <div className="buttons">
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignin>GOOGLE SIGN IN</CustomButton>
                </div>
                
            </form>
        </div>
    }
}

export default SignIn;