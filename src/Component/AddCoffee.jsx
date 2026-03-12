import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleaddCoffe=(e)=>{
        e.preventDefault();
        const form=e.target;
        const formdata=new FormData(form)
        const newCoffee=Object.fromEntries(formdata.entries())
        console.log(newCoffee);

        //send coffee data to db
        fetch('http://localhost:3000/coffees' ,{
            method:'POST' ,
            headers:{
                'content-type': 'application/json',

            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{ 
           if(data.insertedId){
            Swal.fire({
              title: "Coffee added successfully!",
               icon: "success",
             draggable: true
});
           }
        })
    }
    return (
        <div className='p-24 bg-[#F4F3F0] border border-base-300 rounded-box mt-20'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl'>Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleaddCoffe} action="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5   '>
                  <fieldset className="fieldset  ">
                  <label className="label">Name</label>
                   <input type="text" name='name' className="input w-full" placeholder="Enter the coffee name" />
                  </fieldset>
                  <fieldset className="fieldset ">
                  <label className="label">Quantity</label>
                   <input type="text"  name='Quantity' className="input w-full" placeholder="Enter the coffee Quantity" />
                  </fieldset>
                  <fieldset className="fieldset">
                  <label className="label">Supplier</label>
                   <input type="text" name='supplier' className="input w-full" placeholder="Enter coffee supplier" />
                  </fieldset>
                  <fieldset className="fieldset ">
                  <label className="label">Taste</label>
                   <input type="text" name='teste' className="input w-full" placeholder="Enter coffee taste" />
                  </fieldset>
                   <fieldset className="fieldset">
                  <label className="label">Price</label>
                   <input type="text" name='Price' className="input w-full" placeholder="Enter coffee Price" />
                  </fieldset>
                  <fieldset className="fieldset ">
                  <label className="label">Details</label>
                   <input type="text" name='details' className="input w-full" placeholder="Enter coffee details" />
                  </fieldset>
                </div>
                <fieldset className="fieldset ">
                  <label className="label">Photo</label>
                   <input type="text" name='photoUrl' className="input w-full" placeholder="Enter photo URL" />
                  </fieldset>
                  <button type='submit' className="btn text-center w-full mt-6 bg-[#D2B48C]">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;