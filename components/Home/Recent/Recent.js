import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Recent = () => {
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState("");
  //   Loaded files
  const [files, setFiles] = useState([]);
    const [count,setCount] = useState(0)
    // pagination
    const [page,setPage] = useState(0)
    const [size,setSize] = useState(5)

    const pages = Math.ceil(count / size);
    console.log(pages)


  useEffect(() => {
    axios.get(`/api/posts?tag=${tag}&&page=${page}&&size=${size}`).then(function (response) {
      setFiles(response.data.allFiles);
      setCount(response.data.count)
      setLoading(false);
    });
  }, [tag,page]);


  return (
    <div>
      <div className="flex gap-2 flex-wrap my-2">
        <button
          onClick={() => setTag(" ")}
          className={`btn btn-xs rounded-sm ${tag === "" ? "" : "btn-outline"}`}
        >
          Recent
        </button>
        <button
          onClick={() => setTag("funny")}
          className={`btn btn-xs rounded-sm ${
            tag === "sunday" ? "" : "btn-outline"
          }`}
        >
          Sunday Suspense
        </button>
        <button
          onClick={() => setTag("thriller")}
          className={`btn btn-xs rounded-sm ${
            tag === "milan" ? "" : "btn-outline"
          }`}
        >
          Radio Milan
        </button>
        <button
          onClick={() => setTag("horror")}
          className={`btn btn-xs rounded-sm ${
            tag === "station" ? "" : "btn-outline"
          }`}
        >
          Thriller Station
        </button>
        <button
          onClick={() => setTag("bhoot")}
          className={`btn btn-xs rounded-sm ${
            tag === "bhoot" ? "" : "btn-outline"
          }`}
        >
          Bhoot.com
        </button>
        <button
          onClick={() => setTag("bhoutiggota")}
          className={`btn btn-xs rounded-sm ${
            tag === "bhoutiggota" ? "" : "btn-outline"
          }`}
        >
          Bhoutiggota
        </button>
        <button
          onClick={() => setTag("land")}
          className={`btn btn-xs rounded-sm ${
            tag === "land" ? "" : "btn-outline"
          }`}
        >
          Thriller Land
        </button>
        <button
          onClick={() => setTag("notey")}
          className={`btn btn-xs rounded-sm ${
            tag === "notey" ? "" : "btn-outline"
          }`}
        >
          Notry Gachtolar golpo
        </button>
        <button
          onClick={() => setTag("studio")}
          className={`btn btn-xs rounded-sm ${
            tag === "studio" ? "" : "btn-outline"
          }`}
        >
          Bhoot Studio
        </button>
        <button
          onClick={() => setTag("others")}
          className={`btn btn-xs rounded-sm ${
            tag === "others" ? "" : "btn-outline"
          }`}
        >
          Others
        </button>
      </div>
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="w-full h-44 rounded-md border animate-pulse bg-gray-200 relative">
            <div className="h-16 rounded-md bg-gray-300 absolute bottom-0 w-full"></div>
          </div>
          <div className="w-full h-44 rounded-md border animate-pulse bg-gray-200 relative">
            <div className="h-16 rounded-md bg-gray-300 absolute bottom-0 w-full"></div>
          </div>
          <div className="w-full h-44 rounded-md border animate-pulse bg-gray-200 relative">
            <div className="h-16 rounded-md bg-gray-300 absolute bottom-0 w-full"></div>
          </div>
          <div className="w-full h-44 rounded-md border animate-pulse bg-gray-200 relative">
            <div className="h-16 rounded-md bg-gray-300 absolute bottom-0 w-full"></div>
          </div>
          <div className="w-full h-44 rounded-md border animate-pulse bg-gray-200 relative">
            <div className="h-16 rounded-md bg-gray-300 absolute bottom-0 w-full"></div>
          </div>
          <div className="w-full h-44 rounded-md border animate-pulse bg-gray-200 relative">
            <div className="h-16 rounded-md bg-gray-300 absolute bottom-0 w-full"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {files?.map((file, i) => (
            <Card file={file} key={i} />
          ))}
        </div>
      )}

      <div className="flex justify-center w-full my-3">
        <p>{page}</p>
        {
            [...Array(pages).keys()].map(number=><button key={number} onClick={()=>setPage(number)} className={`btn ${page === number ? 'btn-primary':'btn-ghost'} border shadow-lg`}>{number+1}</button>)
        }
        {/* <div className="btn-group">
          
          <button className="btn btn-warning border shadow-lg">2</button>
          <button className="btn btn-ghost border shadow-lg">3</button>
          <button className="btn btn-ghost border shadow-lg">4</button>
        </div> */}
      </div>
    </div>
  );
};
export default Recent;
