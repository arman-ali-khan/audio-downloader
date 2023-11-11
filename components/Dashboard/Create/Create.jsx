import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Select from "react-select";

function Create() {

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
      embedCode: JSON.stringify(e.embedCode),
      artist: JSON.stringify(artist),
      categories: JSON.stringify(categories),
      tags: JSON.stringify(tags),
    };
    console.log(e);
    axios
      .post("http://localhost:4000/0.1/api/posts", episodeData)
      .then((res) => {
        console.log(res.data);
        toast.success("Episode created");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <form onSubmit={handleSubmit(handleCreateEpisode)} className="w-full">
        <div className="flex mx-auto flex-col w-96">
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
        {/* embed code */}
        <div className="flex flex-col">
          <label htmlFor="embed">embed code</label>
          <input
            {...register("embedCode", { required: true })}
            className="input w-full input-bordered"
            placeholder="embed"
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
            options={options}
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
            options={options}
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
            options={options}
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
