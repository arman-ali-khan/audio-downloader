import Link from "next/link";
import React, { useState } from "react";

const Card = ({ file }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`w-full ${
          hover
            ? "md:h-auto backdrop-blur-lg backdrop-hue-rotate-30 md:absolute"
            : "md:h-44"
        } rounded-md  border z-50 md:hover:scale-150 duration-300 text-info`}
      >
        <div>
          <img
            className={`rounded-t-md ${
              hover ? "md:h-24" : "md:h-24"
            } w-full object-cover`}
            src={file.thumb}
            alt=""
          />
        </div>
        <div className="px-1">
          <Link className="text-blue-500" href={`/file/${file.id}`}>
            {hover ? (
              <h3
                className={`font-semibold my-1 ${
                  hover ? "text-sm md:text-xs leading-3" : "text-sm"
                } leading-3 md:leading-3 `}
              >
                {file.title}
              </h3>
            ) : (
              <h3
                className={`font-semibold my-1 ${
                  hover ? "text-sm md:text-xs leading-3" : "text-sm"
                } leading-3 md:leading-5`}
              >
                {file.title.split(" ").length > 7
                  ? file.title.split(" ").slice(0, 8).join(" ")
                  : file.title}
              </h3>
            )}
          </Link>
          {hover && (
            <>
              {/* Artist */}
              <div className="gap-2 text-xs hidden md:flex">
                <p>Artist:</p>
                <p>{file.artist}</p>
              </div>
              {/* Category */}
              <div className="gap-2 text-xs hidden md:flex">
                <p>Category:</p>
                {/* {file?.categories?.length && file?.categories?.map((category, i) => (
                  <Link key={i} className="text-blue-500" href={"#"}>
                    {category.value}
                  </Link>
                ))} */}
              </div>
              {/* File size */}
              <div className="gap-2 text-xs hidden md:flex">
                <p>File size:</p>
                <p>{file.fileSize}</p>
              </div>
              {/* Total Download */}
              <div className="gap-2 text-xs hidden md:flex">
                <p>Downloaded:</p>
                <p>{file.totalDownload}</p>
              </div>
              {/* Date */}
              <div className="gap-2 text-xs hidden md:flex">
                <p>Date:</p>
                <p>{moment(popular?.createdAt).fromNow()} </p>
              </div>
              {/* URL */}
              <div className="hidden md:flex gap-2 justify-center">
                <a
                  className="btn btn-xs btn-rounded rounded-full bg-blue-100 border border-blue-300 text-blue-600 hover:bg-blue-200 hover:text-blue-600"
                  href={file.downloadUrl}
                >
                  Download
                </a>
              </div>
            </>
          )}
          <span className={`text-xs ${hover && "hidden"}`}>12MB</span>{" "}
          <span className={`${hover && "hidden"}`}>|</span>{" "}
          <span className={`text-xs ${hover && "hidden"}`}>2 day ago</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
