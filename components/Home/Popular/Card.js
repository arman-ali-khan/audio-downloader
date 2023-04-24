import Link from "next/link";
import React from "react";

const Card = ({popular}) => {
  return (
      <div className="w-full rounded-md hover:bg-base-200 border">
        <Link className="flex w-full" href={"#"}>
          <div className="w-20 h-12">
            <img
              className="rounded-md h-12 w-20 object-cover"
              src={popular.thumb}
              alt=""
            />
          </div>
          <div className="px-1 w-full">
            <h3 className="font-semibold leading-4">
              {popular.title}
            </h3>
            <span className="text-xs">{popular.fileSize}</span> | <span className="text-xs">{popular.date}</span>
          </div>
        </Link>
      </div>
  );
};

export default Card;
