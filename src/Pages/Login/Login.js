import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const {logInUser} = useContext(AuthContext)
    
   
    const [userEmail, setUserEmail] = useState(null)
    const[token]=useToken(userEmail)
    const navigate = useNavigate();
    const location = useLocation()
    console.log(userEmail)

    const from = location.state?.from?.pathname || '/';

    useEffect(()=>{
        if (token) {
            navigate(from, { replace: true });
        }
    },[from,navigate,token])

    const handleLogin= event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setUserEmail(email)
            form.reset('');
        })
        .catch(error =>console.error(error));
    }
    return (
        <div className="hero">
            <div className="hero-content w-3/5 flex-col lg:flex-row text-[#cea274]">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-4xl text-center font-bold">Login now</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#7c7c7c] font-bold">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#7c7c7c] font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-[#cea274] hover:bg-[#749383] border-0" value="Login" />
                        </div>
                    </form>
                    <p className='text-center text-[#7c7c7c]'>Don't have any account?please <Link className='underline font-bold text-[#cea274]' to='/signin'>Sign Up.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;