import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext)

    const handleLogout = () => {
        userLogOut()
            .then()
            .catch()
    }
    return (
        <div>
            <div className="navbar bg-[] text-[#cea274] font-serif text-[18px] font-bold ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            {
                                user?.email ?
                                    <><li><Link to='/dashboard'>DashBoard</Link></li>
                                        <li>
                                            <button onClick={handleLogout}>Log Out</button>
                                        </li>
                                    </>
                                    :
                                    <li><Link to='/login'>Login</Link></li>
                            }

                            <li><Link to='/signin'>SignUp</Link></li>
                            <li tabIndex={0}>
                                <Link to='' className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2">
                                    <li><Link to=''>Submenu 1</Link></li>
                                    <li><Link to=''>Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li><Link to=''>Item 3</Link></li>
                        </ul>
                    </div>
                    <Link to='' className="btn btn-ghost normal-case text-xl">WedRoad</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                            user?.email ?
                                <><li><Link to='/dashboard'>DashBoard</Link></li>
                                    <li>
                                        <button onClick={handleLogout}>Log Out</button>
                                    </li>
                                </>
                                :
                                <li><Link to='/login'>Login</Link></li>
                        }
                        <li><Link to='/signin'>SignUp</Link></li>

                        {/* <li tabIndex={0}>
                            <Link to=''>
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link to=''>Submenu 1</Link></li>
                                <li><Link to=''>Submenu 2</Link></li>
                            </ul>
                        </li> */}
                        {/* <li><Link to=''>Item 3</Link></li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='' className="btn">Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;