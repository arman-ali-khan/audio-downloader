import axios from "axios";
import { useEffect, useState } from "react";
import FileCard from "./FileCard";

function Dashboard() {
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
    // get all episodes
    const [allEpisodes,setAllEpisodes] = useState([])
    
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_PRO}/posts?limit=${size}&page=${page}`
      )
      .then(function (response) {
        setAllEpisodes(response.data?.episodes);
        setCount(response.data?.count);
        setLoading(false);
      });
  }, [tag, page]);
    return (
        <div className="w-full">
        <div className="h-full">
          {/* Home tags */}
          {/* <Tags tag={tag} setTag={setTag} /> */}
          <div className="bg-base-200 px-2 py-2 rounded-sm mb-2">
            <h2>Recent Episodes</h2>
          </div>
          <div className="md:h-full">
            <div className="">
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
                allEpisodes?.map((file, i) => <FileCard file={file} key={i} />)}
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
}

export default Dashboard;