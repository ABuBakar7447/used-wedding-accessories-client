import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
    const [value, setValue] = useState('Buyer')
    const { createUser, editUser, providerGoogleLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const [userEmail, setUserEmail] = useState('')
    // const [token] = useToken(userEmail)
    // const navigate = useNavigate();
    console.log(userEmail)

    // useEffect(() => {
    //     if (token) {
    //         navigate('/')
    //     }
    // }, [navigate, token])


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(value)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // const username = {
                //     displayName: name
                // }
                // editUser(username)
                //     .then(() => {
                //         saveUserDetails(name, email, value);
                //     })
                //     .catch(err => console.log(err));
                form.reset('');

            })
            .catch(error => console.error(error));

    }



    const handleGoogleSignIn = () => {
        providerGoogleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                // saveUserDetails(user.displayName, user.email, value)
            })
            .catch(error => console.error(error))
    }

    // const saveUserDetails = (name, email, value) => {


    //     const userInformation = {
    //         user_name: name,
    //         email: email,
    //         role: value,
    //         verification: 'not verified'
    //     }

    //     fetch('https://second-hand-product-server.vercel.app/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(userInformation)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserEmail(email);
    //         })
    // }
    return (
        <div className="hero">
            <div className="hero-content w-3/5 flex-col lg:flex-row text-[#cea274]">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-4xl text-center font-bold">Please Sign In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#7c7c7c] font-bold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#7c7c7c] font-bold">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#7c7c7c] font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>



                        <label className="block text-sm font-medium text-[#7c7c7c]">How do you want to signin as?choose below</label>
                        <div className="mt-1">
                            <select className='font-bold p-2 rounded border-2 border-black' value={value} onChange={e => setValue(e.target.value)} name="companysize" id="company-size" required>
                                <option >Buyer</option>
                                <option>Seller</option>

                            </select>
                        </div>





                        <div className="form-control mt-6">
                            <input type="submit" className="btn border-0 bg-[#cea274] hover:bg-[#749383]" value="Sign Up" />
                        </div>
                    </form>
                    <div className='mx-auto mb-5'>
                        <button onClick={handleGoogleSignIn} className='btn border-0 bg-[#cea274] hover:bg-[#749383]'>SignIn By Google <FaGoogle className='ml-2 text-[#414040] text-xl'></FaGoogle></button>
                    </div>



                    <p className='text-center text-[#7c7c7c]'>If you have an account, then <Link className='underline font-bold text-[#cea274]' to='/login'>Log In.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;