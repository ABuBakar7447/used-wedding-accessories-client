import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyOrderCard from './MyOrderCard';

const MyBooking = () => {

    const { user } = useContext(AuthContext)

    const [myorders, setMyOrder] = useState([])


    // const {data: myorders = []} = useQuery({
    //     queryKey: ['myorder'],
    //     queryFn: async() =>{
    //         const res = await fetch();
    //         const data = await res.json();
    //         return data;
    //     }
    // });

    useEffect(() => {
        fetch(`http://localhost:5000/myorder?email=${user?.email}`,{
            headers: {
                authorization: `bearer ${localStorage.getItem('tokenForAccess')}`

            }
        })
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [user?.email])

    return (
        <div>
            <div>
            {
                myorders.length > 0 ?
                    <h2 className='text-center text-[#749383] text-4xl font-serif font-bold my-5'>Your Have Booked <br/> {myorders.length} Products</h2>
                    :
                    <h2 className='text-center text-[#749383] text-2xl font-bold my-10'>No Products Booked</h2>
            }

            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto my-5 '>
            
                {
                    myorders.length > 0 && myorders.map(viewOrder => <MyOrderCard
                        key={viewOrder._id}
                        viewOrder={viewOrder}
                    ></MyOrderCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default MyBooking;