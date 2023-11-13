import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function CreateCategory() {
    const {handleSubmit,register,reset} = useForm()

    const handleCreateCategory = (data) =>{
        const categoryData = {
            "value":data?.value,
            "label":data?.label.split(' ').join('-').toLowerCase(),
            "count":0
        }

        axios.post(`https://apiradio.arman.top/0.1/api/category`,categoryData)
        .then(res=>{
            console.log(res.data)
            toast.success('Category Created')
            reset()
        })
    }
    return (
        <form onSubmit={handleSubmit(handleCreateCategory)} className="flex space-y-2 mt-12 mx-auto flex-col w-full sm:w-96">
             <input {...register('value',{required:true})} className="input input-bordered" placeholder="Title" type="text" id="" />
            <input {...register('label',{required:true})} className="input input-bordered" placeholder="Slug" type="text" id="" />
            <button className="btn btn-success">Create</button>
        </form>
    );
}

export default CreateCategory;