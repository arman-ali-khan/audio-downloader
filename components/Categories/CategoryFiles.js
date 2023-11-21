import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Home/Recent/Card";

const CategoryFiles = ({ label }) => {
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
      .get(
        `${process.env.NEXT_PUBLIC_API_PRO}/categoryPosts?value=${label}&limit=10&page=${page}&sort=desc`
      )
      .then(function (response) {
        setFiles(response.data?.episodes);
        setCount(res.data?.count);
        setLoading(false);
      });
  }, [tag, page]);
  // console.log(files)
  return (
    <div>
      {/* Home tags */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {loading
          ? [...Array(size).keys()].map((number) => (
              // Loading...
              <div
                key={number}
                className="w-full h-44 rounded-md border animate-pulse bg-gray-200 relative"
              >
                <div className="h-16 rounded-md bg-gray-300 absolute bottom-0 w-full"></div>
              </div>
            ))
          : // File card
            files?.map((file, i) => <Card file={file} key={i} />)}
      </div>
      {/* pagination */}
      <div className="flex justify-center w-full my-3">
        <div className="btn-group">
          {[...Array(pages).keys()].map((item, number) => (
            <button
              disabled={page === number}
              key={number}
              onClick={() => setPage(number)}
              onClickCapture={() => setLoading(true)}
              className={`btn btn-sm md:btn-md ${
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
export default CategoryFiles;
