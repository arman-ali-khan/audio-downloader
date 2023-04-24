import Link from "next/link";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import axios from "axios";

const Categories = () => {
  // Loading...
  const [loading, setLoading] = useState(true);

  // category
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`/api/categories`).then((res) => {
      setCategories(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <div className="bg-base-200 px-4 py-1 rounded-t-md">
        <h3 className="text-lg">Categories</h3>
      </div>
      {loading
        ? [...Array(12).keys()].map((num) => (
            <div
              key={num}
              className="w-full px-2 h-7 bg-gray-300 rounded-md animate-pulse my-1"
            ></div>
          ))
        : categories.map((category) => (
            <Category key={category._id} category={category} />
          ))}
    </div>
  );
};

export default Categories;
