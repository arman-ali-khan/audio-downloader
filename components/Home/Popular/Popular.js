import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Popular/Card";

const Popular = () => {
  const [loading, setLoading] = useState(true);
  const [populars, setPopulars] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_PRO}/popular-posts?days=15&limit=10`).then((res) => {
      setPopulars(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <div className="px-4 py-1 bg-base-200 rounded-t-md">
        <h3 className="text-lg">Popular</h3>
      </div>
      <div className="grid my-2 grid-cols-1 md:grid-cols-1 sm:grid-cols-2 px-1 gap-1">
        {loading
          ? [...Array(5).keys()].map((number) => (
              <div
                key={number}
                className="w-full rounded-md border bg-gray-300 animate-pulse"
              >
                <div className="flex w-full">
                  <div className="w-20 h-12">
                    <div className="rounded-md h-12 w-20 bg-gray-200 animate-pulse"></div>
                  </div>
                  
                </div>
              </div>
            ))
          : populars.map((popular,i) => (
              <Card key={i} popular={popular} />
            ))}
      </div>
    </div>
  );
};

export default Popular;
