import React from 'react';

const Tags = ({tag,setTag}) => {
    return (
        <div>
             <div className="flex gap-1 flex-wrap my-2">
        <button
          onClick={() => setTag("funny")}
          className={`btn btn-xs rounded-full ${tag === "" ? "" : "btn-outline"}`}
        >
          All
        </button>
        <button
          onClick={() => setTag("funny")}
          className={`btn btn-xs rounded-full ${
            tag === "sunday" ? "" : "btn-outline"
          }`}
        >
          Sunday Suspense
        </button>
        <button
          onClick={() => setTag("thriller")}
          className={`btn btn-xs rounded-full ${
            tag === "milan" ? "" : "btn-outline"
          }`}
        >
          Radio Milan
        </button>
        <button
          onClick={() => setTag("horror")}
          className={`btn btn-xs rounded-full ${
            tag === "station" ? "" : "btn-outline"
          }`}
        >
          Thriller Station
        </button>
        <button
          onClick={() => setTag("bhoot")}
          className={`btn btn-xs rounded-full ${
            tag === "bhoot" ? "" : "btn-outline"
          }`}
        >
          Bhoot.com
        </button>
        <button
          onClick={() => setTag("bhoutiggota")}
          className={`btn btn-xs rounded-full ${
            tag === "bhoutiggota" ? "" : "btn-outline"
          }`}
        >
          Bhoutiggota
        </button>
        <button
          onClick={() => setTag("land")}
          className={`btn btn-xs rounded-full ${
            tag === "land" ? "" : "btn-outline"
          }`}
        >
          Thriller Land
        </button>
        <button
          onClick={() => setTag("notey")}
          className={`btn btn-xs rounded-full ${
            tag === "notey" ? "" : "btn-outline"
          }`}
        >
          Notry Gachtolar golpo
        </button>
        <button
          onClick={() => setTag("studio")}
          className={`btn btn-xs rounded-full ${
            tag === "studio" ? "" : "btn-outline"
          }`}
        >
          Bhoot Studio
        </button>
        <button
          onClick={() => setTag("others")}
          className={`btn btn-xs rounded-full ${
            tag === "others" ? "" : "btn-outline"
          }`}
        >
          Others
        </button>
      </div>
        </div>
    );
};

export default Tags;