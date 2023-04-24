import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Tags from "./Tags";

const Recent = () => {
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState("funny");
  //   Loaded files
  const [files, setFiles] = useState([]);
  // Products count 
  const [count, setCount] = useState(0);
  // pagination
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  // page count
  const pages = Math.ceil(count / size);

  useEffect(() => {
    axios
      .get(`/api/files?tag=${tag}&&page=${page}&&size=${size}`)
      .then(function (response) {
        setFiles(response.data.allFiles);
        setCount(response.data.count);
        setLoading(false);
      });
  }, [tag, page]);

  return (
    <div>
      {/* Home tags */}
      <Tags tag={tag} setTag={setTag} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {loading
          ? [...Array(size).keys()].map((number) => (
            // Loading...
              <div key={number} className="w-full h-44 rounded-md border animate-pulse bg-gray-200 relative">
                <div className="h-16 rounded-md bg-gray-300 absolute bottom-0 w-full"></div>
              </div>
            ))
            // File card
          : files.map((file, i) => <Card file={file} key={i} />)}
      </div>
            {/* pagination */}
      <div className="flex justify-center w-full my-3">
        <div className="btn-group">
          {[...Array(pages).keys()].map((number) => (
            <button
              disabled={page === number}
              key={number}
              onClick={() => setPage(number)}
              onClickCapture={()=>setLoading(true)}
              className={`btn ${
                page === number ? "btn-primary" : "btn-ghost"
              } border shadow-lg disabled:bg-primary disabled:text-white`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Recent;
