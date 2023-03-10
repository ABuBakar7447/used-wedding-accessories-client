import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useSeller from '../../Hooks/useSeller';

const SellerPrivate = ({children}) => {
    
    const { user,loading } = useContext(AuthContext);
    const [isSeller,sellerLoading] = useSeller(user?.email)
    
        const location = useLocation();
    
        if(loading || sellerLoading){
            return  <div className='flex justify-center my-10'><button className="btn btn-square w-32 h-20 loading"></button></div>
        }
    
        // if(!user & !isSeller){
        //     return <Navigate to="/login" state={{from: location}} replace></Navigate>
        // }
        // return children;


        if (user && isSeller) {
            return children;
        }
    
        return <Navigate to="/login" state={ { from: location } } replace></Navigate>;
};

export default SellerPrivate;