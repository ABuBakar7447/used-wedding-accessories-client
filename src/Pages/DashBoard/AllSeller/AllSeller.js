import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AllSeller = () => {
    //all seller data loading ,removing seller, verification 

    const { data: userDetails = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/seller');
            const data = await res.json();
            return data;
        }
    });


    const handleUserDelete = id => {
        const proceed = window.confirm('Do you want to remove this user?');
        if (proceed) {
            fetch(`http://localhost:5000/delseller/${id}`, {
                method: 'Delete'
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('The user has been deleted successfully')
                        // const leftUser = userDetails.filter(del => del._id !== id);
                        // setUserDetails(leftUser)
                        refetch()
                    }
                })
        }
    }

    const handleVerfied = id => {
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                }
            })
    }
    return (
        <div>
            <div>
                <div className="overflow-x-auto my-10">
                    <table className="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Verification Status</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Delete</th>
                                <th>Verify</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                userDetails.map((details, index) => <tr key={details._id}>
                                    <th>{index + 1}</th>

                                    <td>
                                        <div className='flex'>
                                            {details.user_name}
                                            {details.verification === 'Verified' && 
                                            <FaCheckCircle className='mx-2 rounded text-blue-600'></FaCheckCircle>}
                                        </div>
                                    </td>

                                    <td>{details.verification}</td>
                                    <td>{details.email}</td>
                                    <td>{details.role}</td>
                                    <td>
                                        <button onClick={() => handleUserDelete(details._id)} className='btn btn-xs border-0 bg-[#e40c3a] hover:bg-[#cea274] font-bold'>
                                            Delete
                                        </button>
                                    </td>
                                    <td>{details.verification !== 'Verified' && <button onClick={() => handleVerfied(details._id)} className='btn btn-xs border-0 bg-[#cea274] hover:bg-[#749383] font-bold'>Verify</button>}</td>
                                </tr>)
                            }




                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllSeller;