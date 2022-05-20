import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth,createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            comfirmPassword:''
        }
    }

    handleSubmit = async (e) =>{
        e.preventDefault();
        const { displayName,email,password,comfirmPassword  } = this.state;
        if(password !== comfirmPassword){
            alert("password don't match.");
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{ displayName });
            this.setState({ 
            displayName:'',
            email:'',
            password:'',
            comfirmPassword:'',
        })
        } catch (error) {
            console.log(error.message)
        }
    }

    handleChange = e =>{
        const { name,value } = e.target;
        this.setState({[name]:value},() => console.log(this.state));
    }

    render(){
        const { displayName,email,password,comfirmPassword  } = this.state;
        return <div className="sign-up">
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput type="text" name="displayName" 
            label="Display Name" value={displayName} onChange={this.handleChange} required/>
            <FormInput type="email" name="email" 
            label="Email" value={email} onChange={this.handleChange} required/>
            <FormInput type="password" name="password" 
            label="Password" value={password} onChange={this.handleChange} required/>
            <FormInput type="password" name="comfirmPassword" 
            label="Comfirm Password" value={comfirmPassword} onChange={this.handleChange} required/>
            <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
            
        </div>
    }
}

export default SignUp;
