import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";


const FileCard = ({ file }) => {
  const [hover, setHover] = useState(false);
// console.log(file)
  const categories = JSON.parse(file?.categories)
  const artist = JSON.parse(file?.artist)

  // handle download 
  const handleDownload = (url) =>{
    axios.get(`${process.env.NEXT_PUBLIC_API_PRO}/download/${file?.id}`)
    .then(res=>{
        // console.log(res.data)
        toast.success('Downloading...')
        window.open(url, '_blank');
    })
}

  return (
    <div className="relative">
      <div
        className={`w-full flex rounded-md  border z-50 duration-300 text-info`}
      >
        <div>
          <img
            className={`rounded-t-md w-32 h-24`}
            src={file?.thumbnail}
            alt=""
          />
        </div>
        <div className="px-1">
          <Link className="text-blue-500" href={`/file/${file?.id}`}>
            {hover ? (
              <h3
                className={`font-semibold my-1 ${
                  hover ? "text-sm md:text-xs leading-3" : "text-sm"
                } leading-3 md:leading-3 `}
              >
                {file?.title}
              </h3>
            ) : (
              <h3
                className={`font-semibold my-1 ${
                  hover ? "text-sm md:text-xs leading-3" : "text-sm"
                } leading-3 md:leading-5`}
              >
                {file?.title?.split(" ").length > 7
                  ? file?.title.split(" ").slice(0, 8).join(" ")
                  : file?.title}
              </h3>
            )}
          </Link>
        
            <>
              {/* Total Download */}
              <div className="gap-2 text-xs hidden md:flex">
                <p className=" text-gray-200">Downloaded:</p>
                <p>{file?.totalDownload||0}</p>
              </div>
            </>
          <span className={`text-xs ${hover && "hidden"}`}>{file?.fileSize}</span>{" "}
          <span className={`${hover && "hidden"}`}>|</span>{" "}
          <span className={`text-xs ${hover && "hidden"}`}>{moment(file?.createdAt).fromNow()}</span>
          <div className="flex items-center gap-2">
            <Link href={`/@dashboard/update/${file?.id}`} className="px-4 py-1 rounded bg-teal-100 text-teal-600">Edit</Link>
            <button className="px-4 py-1 rounded bg-rose-100 text-rose-600">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileCard;
