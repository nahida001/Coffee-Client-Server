import React, { use } from 'react';
import { AuthContext } from './Context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    //alt+shift+f=formatting
    const { createUser } = use(AuthContext)
    console.log(createUser);
    const handleSignup = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...userProfile } = Object.fromEntries(formData.entries())
        console.log(email, password, userProfile);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                fetch(`http://localhost:3000/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your account is created",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
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
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Enter your name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Enter your Email" />
                    <label className="label">Address</label>
                    <input type="text" name='address' className="input" placeholder="Enter your address" />

                    <label className="label">Phone</label>
                    <input type="text" name='phone' className="input" placeholder="Enter your phone" />

                    <label className="label">Photo Url</label>
                    <input type="text" name='photo' className="input" placeholder="Enter your photo uri" />

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