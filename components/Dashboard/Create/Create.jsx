import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Select from "react-select";

function Create() {

  // router
  const router = useRouter()

    const { register, handleSubmit } = useForm();
    // categories
    const [categories,setCategories] = useState([])
    // tags
    const [tags,setTags] = useState([])
    // artist
    const [artist,setArtist] = useState([])
  const handleCreateEpisode = (e) => {
    const episodeData = {
      title: e.title,
      description: e.description,
      thumbnail: e.thumbnail,
      createdAt: new Date(),
      author: "",
      updatedAt: new Date(),
      downloadUrl: e.downloadUrl,
      fileSize: e.fileSize,
      embedCode: JSON.stringify(e.embedCode),
      artist: JSON.stringify(artist),
      categories: JSON.stringify(categories),
      tags: JSON.stringify(tags),
    };
    // console.log(e);
    axios
      .post("https://apiradio.arman.top/0.1/api/posts", episodeData)
      .then((res) => {
        // console.log(res.data);
        toast.success("Episode created");
        router.push('/')
      })
      .catch(function (error) {
        console.log(error);
      });
  };
// get all categories 
const [categoriesData,setCategoriesData] = useState([])
useEffect(()=>{
  axios.get(`https://apiradio.arman.top/0.1/api/categories?limit=10&page=0`)
  .then(res=>{
    // console.log(res.data)
    setCategoriesData(res.data)
  })
},[])
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(handleCreateEpisode)} className="w-full capitalize">
        <div className="flex mx-auto flex-col w-full sm:w-96">
          <label htmlFor="title">Title</label>
          <input
            {...register("title", { required: true })}
            className="input w-full input-bordered"
            placeholder="Title"
            type="text"
            id="title"
          />
        </div>
        {/* description */}

        <div className="flex flex-col">
          <label htmlFor="description">description</label>
          <textarea
            {...register("description", { required: true })}
            className="textarea w-full textarea-bordered"
            placeholder="description"
            id="description"
          />
        </div>
        {/* thumbnail */}
        <div className="flex flex-col">
          <label htmlFor="thumbnail">thumbnail</label>
          <input
            {...register("thumbnail", { required: true })}
            className="input w-full input-bordered"
            placeholder="thumbnail"
            type="text"
            id="thumbnail"
          />
        </div>
        {/* download url */}
        <div className="flex flex-col">
          <label htmlFor="download">download url</label>
          <input
            {...register("downloadUrl", { required: true })}
            className="input w-full input-bordered"
            placeholder="download"
            type="text"
            id="download"
          />
        </div>
        {/* file size */}
        <div className="flex flex-col">
          <label htmlFor="embed">File size</label>
          <input
            {...register("fileSize", { required: true })}
            className="input w-full input-bordered"
            placeholder="File Size"
            type="text"
            id="embed"
          />
        </div>
        {/* artist */}
        <div className="flex flex-col">
          <label htmlFor="artist">artist</label>
          <Select
            onChange={(e)=>setArtist(e)}
            isMulti
            name="colors"
            options={categoriesData}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          {/* <input
            {...register("artist", { required: true })}
            className="input w-full input-bordered"
            placeholder="artist"
            type="text"
            id="artist"
          /> */}
        </div>
        {/* author */}
        {/* <div className="flex flex-col">
                <label htmlFor="title">
                author
                </label>
                    <input className="input w-full input-bordered" placeholder="Title" type="text" id="title" />
            </div> */}
        {/* Category */}
        <div className="flex flex-col">
          <label htmlFor="categories">categories</label>
          <Select
            onChange={(e)=>setCategories(e)}
            isMulti
            name="colors"
            options={categoriesData}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          {/* <input {...register('categories',{required:true})} className="input w-full input-bordered" placeholder="categories" type="text" id="categories" /> */}
        </div>
        {/* Tags */}
        <div className="flex flex-col">
          <label htmlFor="tags">tags</label>
          <Select
            onChange={(e)=>setTags(e)}
            isMulti
            name="colors"
            options={categoriesData}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          {/* <input
            {...register("tags", { required: true })}
            className="input w-full input-bordered"
            placeholder="tags"
            type="text"
            id="tags"
          /> */}
        </div>
        {/* btn */}
        <div>
          <button className="btn btn-success">Create</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
