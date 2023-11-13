import moment from "moment";
import Link from "next/link";
import React from "react";

const Card = ({popular}) => {
  return (
      <div className="w-full rounded-md hover:bg-base-200 border-b">
        <Link className="flex w-full" href={`/file/${popular?.id}`}>
          <div className="w-20 h-16 mr-2 overflow-hidden">
            <img
              className="rounded-md h-20 w-20 object-cover"
              src={popular?.thumbnail}
              alt=""
            />
          </div>
          <div className="px-1 w-full">
            <h3 className="font-semibold leading-4">
              {popular?.title}
            </h3>
            <span className="text-xs">{popular?.fileSize}</span> | <span className="text-xs">{moment(popular?.createdAt).fromNow()}</span>
          </div>
        </Link>
      </div>
  );
};

export default Card;
