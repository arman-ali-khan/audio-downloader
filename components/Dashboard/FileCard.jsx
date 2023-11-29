import axios from "axios";
import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";


const FileCard = ({ file,update,setUpdate }) => {
  const [hover, setHover] = useState(false);
// console.log(file)
  const categories = JSON.parse(file?.categories)
  // const artist = JSON.parse(file?.artist)

  // handle download 
  const handleDelete = (url) =>{
    axios.delete(`${process.env.NEXT_PUBLIC_API_PRO}/posts/${file?.id}`)
    .then(res=>{
        // console.log(res.data)
        toast.success('Deleted')
        setUpdate(!update)
    })
}

  return (
    <div className="relative">
      <div
        className={`w-full flex rounded-md  border z-50 duration-300 text-info`}
      >
        <div className="w-12 sm:w-32 h-12 sm:h-auto">
          <img
            className={`rounded-t-md w-12 h-12 sm:h-full sm:w-full`}
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
              <div className="gap-2 text-xs flex">
                <p className=" text-gray-200">Downloaded:</p>
                <p>{file?.totalDownload||0}</p>
              </div>
            </>
          <span className={`text-xs ${hover && "hidden"}`}>{file?.fileSize}</span>{" "}
          <span className={`${hover && "hidden"}`}>|</span>{" "}
          <span className={`text-xs ${hover && "hidden"}`}>{moment(file?.createdAt).fromNow()}</span>
          <div className="flex items-center gap-2">
            <Link href={`/@dashboard/update/${file?.id}`} className="px-4 py-1 rounded bg-teal-100 text-teal-600">Edit</Link>
            <div className="dropdown">
  <div tabIndex={0} role="button" className="px-4 py-1 rounded bg-rose-100 text-rose-600">Delete</div>
  <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-96 z-40 ">
    <p>If you delete this file, this file can't be restore</p>
    
  <div className="flex items-center">
  <span className="px-4 mx-12 my-3 py-1 rounded bg-teal-100 cursor-pointer text-teal-600">Cancel</span>
  <button onClick={()=>handleDelete()} className="px-4 mx-12 my-3 py-1 rounded bg-rose-100 text-rose-600">Confirm</button>
  </div>
  </ul>
</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileCard;
