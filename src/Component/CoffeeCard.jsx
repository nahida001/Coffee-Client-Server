import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,coffees,setCoffees}) => {
    const {_id,name,Quantity,price,photoUrl}=coffee;

    const handleDelete=(_id)=>{
         console.log(_id);
         Swal.fire({
             title: "Are you sure?",
          text: "You won't be able to revert this!",
           icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:3000/coffees/${_id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount){
          Swal.fire({
        title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    const remainingCoffees=coffees.filter(coff=>coff._id !== _id)
    setCoffees(remainingCoffees)
        }

    })
    
  }
});
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={photoUrl}
      alt="Movie" />
  </figure>
  <div className='flex w-full justify-around  mt-10'>
      <div >
    <h2 className="card-title">Coffee name:{name}</h2>
    <h2 className="card-title">Qunatity:{Quantity}</h2>
    <h2 className="card-title">Price:{price}</h2>
    </div>
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-3 mb-6">
 
    <Link to={`/coffee/${_id}`}>
     <button className="btn join-item">View</button>
    </Link>
  <Link to={`/updatecoffee/${_id}`}>
        <button className="btn join-item">Edit</button>
  </Link>
 
  <button onClick={()=>handleDelete(_id)} className="btn join-item">delete</button>
</div>
    </div>
  
  </div>
 
</div>
        </div>
    );
};

export default CoffeeCard;