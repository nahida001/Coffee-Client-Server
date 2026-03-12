import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const {_id,name,price,Quantity,teste,photoUrl,details,supplier}=useLoaderData();
    const handleupdateCoffe= e =>{
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form)
        const updatecoffee=Object.fromEntries(formData.entries())
        console.log(updatecoffee);

        fetch(`http://localhost:3000/coffees/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'

            },
            body:JSON.stringify(updatecoffee)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.modifiedCount){
            Swal.fire({
             position: "top-end",
             icon: "success",
            title: "Coffee details Updated Successfully",
             showConfirmButton: false,
               timer: 1500
        });
           }
        })
        
    }
    return (
        <div className='p-24 bg-[#F4F3F0] border border-base-300 rounded-box mt-20'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl'>Update Existing Coffee Details</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleupdateCoffe} action="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5   '>
                  <fieldset className="fieldset  ">
                  <label className="label">Name</label>
                   <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Enter the coffee name" />
                  </fieldset>
                  <fieldset className="fieldset ">
                  <label className="label">Quantity</label>
                   <input type="text"  name='Quantity' defaultValue={Quantity} className="input w-full" placeholder="Enter the coffee Quantity" />
                  </fieldset>
                  <fieldset className="fieldset">
                  <label className="label">Supplier</label>
                   <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Enter coffee supplier" />
                  </fieldset>
                  <fieldset className="fieldset ">
                  <label className="label">Taste</label>
                   <input type="text" name='teste' defaultValue={teste} className="input w-full" placeholder="Enter coffee taste" />
                  </fieldset>
                   <fieldset className="fieldset">
                  <label className="label">Price</label>
                   <input type="text" name='Price' defaultValue={price} className="input w-full" placeholder="Enter coffee Price" />
                  </fieldset>
                  <fieldset className="fieldset ">
                  <label className="label">Details</label>
                   <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Enter coffee details" />
                  </fieldset>
                </div>
                <fieldset className="fieldset ">
                  <label className="label">Photo</label>
                   <input type="text" name='photoUrl' defaultValue={photoUrl} className="input w-full" placeholder="Enter photo URL" />
                  </fieldset>
                  <button type='submit' className="btn text-center w-full mt-6 bg-[#D2B48C]">Update Coffee Details</button>
            </form>
        </div>
    );
};

export default UpdateCoffee;