import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ProductModal = ({modalData}) => {
    const { user } = useContext(AuthContext)
    const { img_url, product_name, resale_price } = modalData

    //modaldata sending
    
    const handleModal = event => {

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const productname = form.productname.value;
        const resaleprice = form.resaleprice.value;
        const phone = form.phone.value;
        const location = form.location.value;
        console.log(name, email, productname, resaleprice, phone, location);

        const book = {
            product_img: img_url,
            name: name,
            email: email,
            productname: productname,
            resaleprice: resaleprice,
            phone: phone,
            location: location
        }

        fetch('http://localhost:5000/bookdata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("You have booked this product succfully")


            })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleModal} className="">
                        <h1 className="text-4xl text-center font-bold">{product_name}</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} disabled className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' defaultValue={user?.email} disabled className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name='productname' defaultValue={product_name} disabled className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input type="text" name='resaleprice' defaultValue={resale_price} disabled className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone Number</span>
                            </label>
                            <input type="text" name='phone' placeholder='Type phone number' className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Location</span>
                            </label>
                            <input type="text" name='location' placeholder='Type your Location' className="input input-bordered" />
                        </div>









                        <div className="form-control mt-6">
                            <input htmlFor="my-modal-3" type="submit" className="btn bg-[#cea274] hover:bg-[#749383] border-0" value="Book" />
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;