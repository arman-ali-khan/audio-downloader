import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function DeleteModal({deleteId,setDeleteId}) {
     // get category data by id
     const [editData,setEditData]  = useState({})
     useEffect(()=>{
         axios.get(`${process.env.NEXT_PUBLIC_API_PRO}/category/${deleteId}`)
         .then(res=>{
             setEditData(res.data)
         })
     },[deleteId])

     const handleDelete = () =>{
        axios.delete(`${process.env.NEXT_PUBLIC_API_PRO}/category/${deleteId}`)
        .then(res=>{
            toast.success('Deleted')
        })
     }
    return (
        <div>
<input type="checkbox" id="delete_modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Confirm !</h3>
    <button onClick={()=>handleDelete()} className="btn btn-error">Confirm</button>
  <label onClick={()=>setDeleteId('')} className="modal-backdrop btn" htmlFor="delete_modal">Close</label>
  </div>
</div>
        </div>
    );
}

export default DeleteModal;