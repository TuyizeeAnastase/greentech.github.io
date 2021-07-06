import React from'react';

const signIn=()=>{
   return (
       <div>
         <nav className="bg-green-700">
       <div className="container mx-auto px-20 py-4 md:flex md:justify-between md:items-center">
         <div className="flex justify-between items-center">
           <div>
             <a className="cursor-pointer  text-gray-300 text-xl font-bold md:text-2xl hover:text-gray-700" href="/#">Logo</a>
           </div>
         </div>
         <div className="md:flex items-center">
           <div className="flex flex-col md:flex-row md:mx-6 cursor-pointer ">
             <a className="my-1 text-md italic  text-gray-50  font-medium hover:text-indigo-50 md:mx-4 md:my-0" href="/#">Home</a>
           </div>
         </div>
       </div>
     </nav>

     <div className="flex flex-col text-center p-4">
        <h1 className="text-center p-4">Admin Panel Login</h1>
        <div className="flex flex-col p-4">
           <input className="w-1/4 h-10 bg-gray-100 mb-4 text-center" type="text" placeholder="Enter Email"></input>
           <input className="w-1/4 h-10 bg-gray-100 mb-4 text-center"  type="password" placeholder="Enter password"></input>
        </div>
        <div className="flex">
           <button className="w-20 h-10 bg-gray-100 mr-4 text-center">signIn</button>
           <button className="w-20 h-10 bg-gray-100  text-center">Cancel</button>
        </div>
     </div>

     
       </div>
   )
}

export default signIn;