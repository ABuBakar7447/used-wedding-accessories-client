import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Private = ({children}) => {
    
    const { user,loading } = useContext(AuthContext);
        const location = useLocation();
    
        if(loading){
            return  <div className='flex justify-center my-10'><button className="btn btn-square w-32 h-20 loading"></button></div>
        }
    
        if(!user){
            return <Navigate to="/login" state={{from: location}} replace></Navigate>
        }
        return children;
};

export default Private;