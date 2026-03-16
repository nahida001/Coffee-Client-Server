import React, { use } from 'react';
import { AuthContext } from './Context/AuthContext';

const SignUp = () => {
    
    //alt+shift+f=formatting
     const {createUser}=use(AuthContext)
     console.log(createUser);
     const handleSignup=(e)=>{
        e.preventDefault()
        const form=e.target;
        const formData=new FormData(form);
       const email=formData.get('email')
        const password=formData.get('password')
        
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error => {
       console.log(error);
  });
     }
    return (
                <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
                     
                   
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <form onSubmit={handleSignup} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
                        </form>
                    </div>
                </div>
    );
};

export default SignUp;