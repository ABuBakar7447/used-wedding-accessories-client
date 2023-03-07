import React from 'react';

const Blogs = () => {
    return (
        <div>



        <div className='w-3/5 mx-auto my-16 '>

            <h1 className='text-[#cea274] lg:text-4xl md:text-3xl text-3xl font-bold my-10'>Some Helpful Answer For You</h1>


            <div className="collapse collapse-arrow my-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-serif font-bold bg-[#749383] rounded">
                1. Difference between SQL and NoSQL?
                </div>
                <div className="collapse-content bg-white rounded">
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
            </div>


            <div className="collapse collapse-arrow my-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-serif font-bold bg-[#749383] rounded">
                2. What is JWT, and how does it work?
                </div>
                <div className="collapse-content bg-white rounded">
                    <p>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).Apr</p>
                </div>
            </div>

            <div className="collapse collapse-arrow my-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-serif font-bold bg-[#749383] rounded">
                3. What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content bg-white rounded">
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
            </div>


            <div className="collapse collapse-arrow my-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-serif font-bold bg-[#749383] rounded">
                4.How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content bg-white rounded">
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>




            <div className='my-16 w-full flex justify-center'>
            <div className="">
            <div className="flex-col lg:flex-row-reverse">
                
                <div className="flex-shrink-0 w-full">

                <h1 className="text-3xl lg:text-4xl md:text-3xl text-center text-[#cea274] font-bold my-10">Wants To Ask Something!</h1>

                <form className=""action="https://formspree.io/f/mjvdgrqj" method="POST">
                
                    

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-[#cea274]">Email</span>
                    </label>
                    <input type="email" name="email" className='border border-black text-black p-2 rounded text-sm'/>
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-[#cea274]">Message</span>
                    </label>
                    <textarea name="message" className='border border-black rounded p-8'></textarea>
                    
                    </div>
                    <div className="form-control mt-6">
                    <button  type="submit" className="btn border-white bg-[#cea274]">Submit</button>
                    </div>
                </form>


                
                </div>
            </div>
            </div>
    </div>


        </div>

    </div>
);
};

export default Blogs;