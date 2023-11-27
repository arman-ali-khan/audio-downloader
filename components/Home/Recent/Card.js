import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";


const Card = ({ file }) => {
  const [hover, setHover] = useState(false);
  const [loading,setLoading] = useState(false)
  const categories = JSON?.parse(file?.categories)
  // const artist =  JSON?.parse(parse(file?.artist))
  // handle download 
  const handleDownload = (url) =>{
    setLoading(true)
    axios.get(`${process.env.NEXT_PUBLIC_API_PRO}/download/${file?.id}`)
    .then(res=>{
      // console.log(res.data)
      toast.success('Downloading...')
      setLoading(false)
      window.open(url, '_blank');
    })
    .catch(err=>{
      setLoading(false)
      console.error(err);
    })
}


  return (
    <div className="relative">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`w-full ${
          hover
            ? "md:h-auto backdrop-blur-lg backdrop-hue-rotate-30 backdrop-contrast-125 md:absolute"
            : "md:h-full bg-base-200"
        } rounded-md  border z-50 md:hover:scale-150 duration-300 text-info`}
      >
        <div>
          <Image width={400} height={400}
            className={`rounded-t-md ${
              hover ? "md:h-24" : "md:h-24"
            } w-full object-cover`}
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
                } leading-3 md:leading-4`}
              >
                {file?.title?.split(" ").length > 7
                  ? file?.title.split(" ").slice(0, 8).join(" ")
                  : file?.title}
              </h3>
            )}
          </Link>
          {hover && (
            <>
              {/* Artist */}
              {/* <div className="gap-2 text-xs truncate hidden md:flex">
                <p className=" text-gray-200">Artist:</p>
                {artist?.length && artist?.map((category, i) => (
                  <p key={i} className="text-blue-500" href={`/artist/${category?.value}`}>
                    {category?.value},
                  </p>
                ))}
              </div> */}
              {/* Category */}
              <div className="gap-2 text-xs hidden md:flex truncate">
                <p className=" text-gray-200">Category:</p>
                {categories?.length && categories?.map((category, i) => (
                  <Link key={i} className="text-blue-500" href={`/category/${category?.label}`}>
                    {category?.value} |
                  </Link>
                ))}
              </div>
              {/* File size */}
              <div className="gap-2 text-xs hidden md:flex">
                <p className=" text-gray-200">File size:</p>
                <p>{file?.fileSize}</p>
              </div>
              {/* Total Download */}
              <div className="gap-2 text-xs hidden md:flex">
                <p className=" text-gray-200">Downloaded:</p>
                <p>{file?.totalDownload||0}</p>
              </div>
              {/* Date */}
              <div className="gap-2 text-xs hidden md:flex">
                <p className=" text-gray-200">Date:</p>
                <p>{moment(file?.createdAt).fromNow()} </p>
              </div>
              {/* URL */}
              <div className="hidden md:flex gap-2 justify-center pb-3">
                {/* {
                  parse(file?.embedCode)
                } */}
                <button className='btn btn-xs btn-rounded rounded-full mt-4 text-white border border-blue-300  hover:bg-blue-200 hover:text-blue-600' onClick={()=>handleDownload(file?.downloadUrl)}>Download</button>
              </div>
            </>
          )}
          <span className={`text-xs ${hover && "hidden"}`}>{file?.fileSize}</span>{" "}
          <span className={`${hover && "hidden"}`}>|</span>{" "}
          <span className={`text-xs ${hover && "hidden"}`}>{moment(file?.createdAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
