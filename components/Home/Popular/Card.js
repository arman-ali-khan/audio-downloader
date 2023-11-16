import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({popular}) => {
  return (
      <div className="w-full hover:bg-base-200 border-b">
        <Link className="flex w-full h-full" href={`/file/${popular?.id}`}>
          <div className="w-20 h-full mr-1">
            <Image width={200} height={200}
              className="rounded-md h-16 w-20 object-cover"
              src={popular?.thumbnail}
              alt=""
            />
          </div>
          <div className="px-1 w-full">
            <h3 className="font-semibold leading-4">
            {popular?.title?.split(" ").length > 7
                  ? popular?.title.split(" ").slice(0, 8).join(" ")
                  : popular?.title}
            </h3>
            <span className="text-xs">{popular?.fileSize}</span> | <span className="text-xs">{moment(popular?.createdAt).fromNow()}</span>
          </div>
        </Link>
      </div>
  );
};

export default Card;
