import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Select from "react-select";
import CreatableSelect from 'react-select/creatable';

function Update() {
    const router = useRouter()

    const {updateId} = router.query

    // get file by id
    const [file,setFiles] = useState({})

    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_API_PRO}/posts/${updateId}`)
        .then(res=>{
          setFiles(res.data)
        })
    },[updateId])


  const { register, handleSubmit } = useForm();
  // categories
  const [categories,setCategories] = useState(file?.categories)
  // tags
  const [tags,setTags] = useState(file?.tags)
  // artist
  const [artist,setArtist] = useState(file.artist)
const handleUpdateEpisode = (e) => {
  const episodeData = {
    title: e.title||file?.title,
    description: e.description||file?.description,
    thumbnail: e.thumbnail||file?.thumbnail,
    updatedAt: Date(),
    downloadUrl: e.downloadUrl||file?.downloadUrl,
    fileSize: e.fileSize||file?.fileSize,
    artist: JSON.stringify(artist||file?.artist),
    categories: JSON.stringify(categories||file?.categories),
    tags: JSON.stringify(tags||file?.tags),
  };
  // console.log(e);
  axios
    .put(`${process.env.NEXT_PUBLIC_API_PRO}/posts/${updateId}`, episodeData)
    .then((res) => {
      // console.log(res.data);
      toast.success("Episode Updated");
    })
    .catch(function (error) {
      console.log(error);
    });
};
// get all categories 
const [categoriesData,setCategoriesData] = useState([])
useEffect(()=>{
axios.get(`${process.env.NEXT_PUBLIC_API_PRO}/categories?limit=100&page=0`)
.then(res=>{
  setCategoriesData(res.data)
})
},[])
    return (
        <div>
            <div className="w-full sm:w-96 mx-auto">
      <form onSubmit={handleSubmit(handleUpdateEpisode)} className="w-full capitalize">
        <div className="flex mx-auto flex-col w-full sm:w-96">
          <label htmlFor="title">Title</label>
          <input defaultValue={file?.title}
            {...register("title", { required: false })}
            className="input w-full input-bordered"
            placeholder="Title"
            type="text"
            id="title"
          />
        </div>
        {/* description */}

        <div className="flex flex-col">
          <label htmlFor="description">description</label>
          <textarea defaultValue={file?.description}
            {...register("description", { required: false })}
            className="textarea w-full textarea-bordered"
            placeholder="description"
            id="description"
          />
        </div>
        {/* thumbnail */}
        <div className="flex flex-col">
          <label htmlFor="thumbnail">thumbnail</label>
          <input defaultValue={file?.thumbnail}
            {...register("thumbnail", { required: false })}
            className="input w-full input-bordered"
            placeholder="thumbnail"
            type="text"
            id="thumbnail"
          />
        </div>
        {/* download url */}
        <div className="flex flex-col">
          <label htmlFor="download">download url</label>
          <input defaultValue={file?.downloadUrl}
            {...register("downloadUrl", { required: false })}
            className="input w-full input-bordered"
            placeholder="download"
            type="text"
            id="download"
          />
        </div>
        {/* file size */}
        <div className="flex flex-col">
          <label htmlFor="embed">File size</label>
          <input defaultValue={file?.fileSize}
            {...register("fileSize", { required: false })}
            className="input w-full input-bordered"
            placeholder="File Size"
            type="text"
            id="embed"
          />
        </div>
        {/* artist */}
        <div className="flex flex-col">
          <label htmlFor="artist">artist</label>
          <CreatableSelect defaultValue={file?.artist} onChange={(e)=>setArtist(e)} className="basic-multi-select" isMulti isClearable options={categoriesData} />
          
        </div>
     
        {/* Category */}
        <div className="flex flex-col">
          <label htmlFor="categories">categories</label>
          <Select defaultValue={file?.categories}
            onChange={(e)=>setCategories(e)}
            isMulti
            name="colors"
            options={categoriesData}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        {/* Tags */}
        <div className="flex flex-col">
          <label htmlFor="tags">tags</label>
          <CreatableSelect defaultValue={file?.tags} onChange={(e)=>setTags(e)} className="basic-multi-select" isMulti isClearable options={categoriesData} />
          
        </div>
        {/* btn */}
        <div>
          <button className="btn btn-success">Update</button>
        </div>
      </form>
    </div>
        </div>
    );
}

export default Update;