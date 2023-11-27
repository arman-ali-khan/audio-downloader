import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Select from "react-select";
import CreatableSelect from 'react-select/creatable';

function Create() {

  // router
  const router = useRouter()

    const { register, handleSubmit } = useForm();
    // categories
    const [categories,setCategories] = useState([])
    const [ytThumb,setYTThumb] = useState('')
    // thumb
    const [thumb,setThumb] = useState('')
    // api data
    const [apiData,setApiData] = useState({})
    // tags
    const [tags,setTags] = useState([])
    // artist
    const [artist,setArtist] = useState([])
    // title
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

     // loading
     const [loading,setLoading] = useState(false)
  const handleCreateEpisode = (e) => {
    const episodeData = {
      title: e.title||title,
      videoData:apiData&&apiData?.items[0]?.snippet,
      description: e.description||description,
      thumbnail: e.thumbnail||thumb,
      createdAt: Date(),
      author: "",
      updatedAt: Date(),
      downloadUrl: e.downloadUrl,
      fileSize: e.fileSize,
      embedCode: JSON.stringify(e.embedCode),
      artist: JSON.stringify(artist),
      categories: JSON.stringify(categories),
    };
    // console.log(e);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_PRO}/posts`, episodeData)
      .then((res) => {
        // console.log(res.data);
        toast.success("Episode created");
        setLoading(!loading)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
// get all categories 
const [categoriesData,setCategoriesData] = useState([])
useEffect(()=>{
  axios.get(`${process.env.NEXT_PUBLIC_API_PRO}/categories?limit=10&page=0`)
  .then(res=>{
    // console.log(res.data)
    setCategoriesData(res.data)
  })
},[loading])
const ytthumb = ytThumb?.length && ytThumb?.split('=')[1].split('&')[0]

// get data via api
useEffect(()=>{
  setTitle('')
  setDescription('')
  axios.get(`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${ytthumb}&key=AIzaSyDRkhrFiWaeIQNSKeNkSlxI39cwLlh9l8c`)
  .then(res=>{
    setApiData(res.data)
    setTitle(ytthumb.length&&apiData?.items[0]?.snippet?.title)
    setDescription(ytthumb.length&&apiData?.items[0]?.snippet?.description)
    setTags(ytthumb.length&&apiData?.items[0]?.snippet?.tags)
  })
},[ytThumb,thumb])
console.log(ytthumb.length&&apiData?.items)


console.log(title,description)
  return (
    <div className="w-full sm:w-96 mx-auto">
      <form onSubmit={handleSubmit(handleCreateEpisode)} className="w-full capitalize">
        <div className="flex mx-auto flex-col w-full sm:w-96">
        <label htmlFor="title">Title</label>
        <p className="border truncate">{title}</p>
          <input  hidden={title?.length}
            {...register("title", { required: false })}
            className="input w-full input-bordered"
            defaultValue={title}
            type="text"
            id="title"
          />
        </div>
        {/* description */}

        <div className="flex flex-col">
          <label htmlFor="description">description</label>
          <p className="border truncate">{description}</p>
          <textarea hidden={description?.length}
            {...register("description", { required: false })}
            className="textarea w-full textarea-bordered"
          
            id="description"
          />
        </div>
        {/* thumbnail */}
        <div className="flex flex-col">
          <label htmlFor="thumbnail">thumbnail</label>
          <input
            {...register("thumbnail", { required: false })}
            className="input w-full input-bordered"
            placeholder="thumbnail"
            type="text"
            id="thumbnail"
          />
        </div>
        {/* yt thumbnail */}
        <div className="flex flex-col">
          <div className="flex justify-between my-4">

          <img onClick={()=>setThumb(`https://res.cloudinary.com/dcckbmhft/image/upload/v1700010854/bhoot.png`)} className={`w-12 ${thumb===`https://res.cloudinary.com/dcckbmhft/image/upload/v1700010854/bhoot.png` ? 'bg-white p-1':''}`} src={`https://res.cloudinary.com/dcckbmhft/image/upload/v1700010854/bhoot.png`} alt="" />

          <img onClick={()=>setThumb(`https://img.youtube.com/vi/${ytthumb}/maxresdefault.jpg`)} className={`w-12 ${thumb===`https://img.youtube.com/vi/${ytthumb}/maxresdefault.jpg` ? 'bg-white p-1':''}`} src={`https://img.youtube.com/vi/${ytthumb}/maxresdefault.jpg`} alt="" />

          <img onClick={()=>setThumb(`https://img.youtube.com/vi/${ytthumb}/hqdefault.jpg`)} className={`w-12 ${thumb===`https://img.youtube.com/vi/${ytthumb}/hqdefault.jpg` ? 'bg-white p-1':''}`} src={`https://img.youtube.com/vi/${ytthumb}/hqdefault.jpg`} alt="" />


          <img onClick={()=>setThumb(`https://img.youtube.com/vi/${ytthumb}/mqdefault.jpg`)} className={`w-12 ${thumb===`https://img.youtube.com/vi/${ytthumb}/mqdefault.jpg` ? 'bg-white p-1':''}`} src={`https://img.youtube.com/vi/${ytthumb}/mqdefault.jpg`} alt="" />
          </div>
          <label htmlFor="thumbnail">YT Thumbnail</label>
          <input
          onChange={e=>setYTThumb(e.target.value)}
            className="input w-full input-bordered"
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
            type="text"
            id="embed"
          />
        </div>
        {/* artist */}
        <div className="flex flex-col">
          {/* <label htmlFor="artist">artist</label> */}
          {/* <CreatableSelect onChange={(e)=>setArtist(e)} className="basic-multi-select" isMulti isClearable options={categoriesData} /> */}
          {/* <Select
            onChange={(e)=>setArtist(e)}
            isMulti
            name="colors"
            options={categoriesData}
            className="basic-multi-select"
            classNamePrefix="select"
          /> */}
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
        
          <CreatableSelect onChange={(e)=>setTags(e)} className="basic-multi-select" isMulti isClearable options={categoriesData} />
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
