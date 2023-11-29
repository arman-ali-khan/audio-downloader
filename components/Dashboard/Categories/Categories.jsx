import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  // Loading...
  const [loading, setLoading] = useState(true);

  // category
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_PRO}/categories?limit=1000&page=1`).then((res) => {
      setCategories(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
    
      {loading
        ? [...Array(12).keys()].map((num) => (
            <div
              key={num}
              className="w-full px-2 h-7 bg-gray-300 rounded-md animate-pulse my-1"
            ></div>
          ))
        : categories.map((category,i) => (
            <CategoryCard key={i} category={category} />
          ))}
    </div>
  );
};

export default Categories;
