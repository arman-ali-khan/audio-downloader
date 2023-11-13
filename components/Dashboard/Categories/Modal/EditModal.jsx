import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function EditModal({editId,setEditId}) {
    const {handleSubmit,register} = useForm()

    // get category data by id
    const [editData,setEditData]  = useState({})
    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_API_PRO}/category/${editId}`)
        .then(res=>{
            setEditData(res.data)
        })
    },[editId])
console.log(editData)
    // handle update
    const handleUpdateCategory = (data) =>{
    console.log(data)
    }
    return (
        <div>
{/* Put this part before </body> tag */}
<input type="checkbox" id="edit_modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="text-lg font-bold">{editData?.value}</h3>
    <form onSubmit={handleSubmit(handleUpdateCategory)} className="py-4 flex flex-col space-y-2">
        <input className="input input-bordered" {...register('value',{required:true})} defaultValue={editData?.value} type="text" />
        <input className="input input-bordered" {...register('label',{required:true})} defaultValue={editData?.label} type="text" />
        <input className="input input-bordered" {...register('count',{required:true})} defaultValue={editData?.count} type="number" />
        <button className="btn btn-success">Update</button>
    </form>
  <label onClick={()=>setEditId('')} className="modal-backdrop btn" htmlFor="edit_modal">Close</label>
  </div>
</div>
        </div>
    );
}

export default EditModal;