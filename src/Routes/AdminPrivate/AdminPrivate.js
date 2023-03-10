import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const AdminPrivate = ({children}) => {
    
    const { user,loading } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email)
    
        const location = useLocation();
    
        if(loading || adminLoading){
            return  <div className='flex justify-center my-10'><button className="btn btn-square w-32 h-20 loading"></button></div>
        }
    
        // if(!user && !isAdmin){
        //     return <Navigate to="/login" state={{from: location}} replace></Navigate>
        // }
        // return children;

        if (user && isAdmin) {
            return children;
        }
    
        return <Navigate to="/login" state={ { from: location } } replace></Navigate>;
};

export default AdminPrivate;