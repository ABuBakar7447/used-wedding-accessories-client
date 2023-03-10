import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useBuyer from '../../Hooks/useBuyer';

const BuyerPrivate = ({children}) => {
    
    const { user,loading } = useContext(AuthContext);
    const [isBuyer,buyerLoading] = useBuyer(user?.email)
    
        const location = useLocation();
    
        if(loading || buyerLoading){
            return  <div className='flex justify-center my-10'><button className="btn btn-square w-32 h-20 loading"></button></div>
        }
    
        // if(!user & !isSeller){
        //     return <Navigate to="/login" state={{from: location}} replace></Navigate>
        // }
        // return children;


        if (user && isBuyer) {
            return children;
        }
    
        return <Navigate to="/login" state={ { from: location } } replace></Navigate>;
};


export default BuyerPrivate;