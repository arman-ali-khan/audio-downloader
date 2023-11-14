import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Recent = () => {
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState("");
  //   Loaded files
  const [files, setFiles] = useState([]);
  // Products count
  const [count, setCount] = useState(0);
  // pagination
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(12);
  // page count
  const pages = Math.ceil(count / size);

  useEffect(() => {
    axios
      .get(
        `https://apiradio.arman.top/0.1/api/posts?limit=${size}&page=${page}&value=${tag}`
      )
      .then(function (response) {
        setFiles(response.data?.episodes);
        setCount(response.data?.count);
        setLoading(false);
      });
  }, [tag, page]);
  // console.log(files)
  return (
    <div>
      <div className="h-full">
        {/* Home tags */}
        {/* <Tags tag={tag} setTag={setTag} /> */}
        <div className="bg-base-200 px-2 py-2 rounded-sm mb-2">
          <h2>Recent Episodes</h2>
        </div>
        <div className="md:h-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {loading
              ? [...Array(size).keys()].map((number) => (
                  // Loading...
                  <div
                    key={number}
                    className="w-full h-44 rounded-md border animate-pulse bg-gray-500 relative"
                  >
                    <div className="h-16 rounded-md bg-gray-400 absolute bottom-0 w-full"></div>
                  </div>
                ))
              : // File card
                files?.map((file, i) => <Card file={file} key={i} />)}
          </div>
        </div>
      </div>
      {/* pagination */}
      <div className="flex justify-center w-full my-6">
        <div className="btn-group">
          {[...Array(pages).keys()].map((number) => (
            <button
              disabled={page === number}
              key={number}
              onClick={() => setPage(number)}
              onClickCapture={() => setLoading(true)}
              className={`btn btn-xs md:btn-sm ${
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
