
import Main from '../../Layer/Main';
import Popular from '../../components/Home/Popular/Popular';
import Categories from '../../components/Home/Categories/Categories';
 import React, { useState } from "react";
import Card from "../../components/Categories/Card";

const category = ({data:category,category:title}) => {
    const [loading, setLoading] = useState(false);
    // Products count
    const [count, setCount] = useState(0);
    // pagination
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);
    // page count
    const pages = Math.ceil(count / size);
    // title
    const categoryTitle = title.split('-').join(' ').toUpperCase()
  console.log(categoryTitle)
    return (
        <Main title={`All files archived ${categoryTitle}`}>
            <div className='w-full md:flex gap-2'>
        <div className='md:w-3/12'>
          <Popular />
        </div>
       {
        category.length > 0 ?  <div className='md:w-6/12'>
       
        <div>
          {/* Home tags */}
    
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {loading
              ? [...Array(size).keys()].map((number) => (
                  // Loading...
                  <div
                    key={number}
                    className="w-full h-44 rounded-md border animate-pulse bg-gray-200 relative"
                  >
                    <div className="h-16 rounded-md bg-gray-300 absolute bottom-0 w-full"></div>
                  </div>
                ))
              : // File card
              category.map((file, i) => <Card file={file} key={i} />)}
          </div>
          {/* pagination */}
          <div className="flex justify-center w-full my-3">
            <div className="btn-group">
              {[...Array(pages).keys()].map((number) => (
                <button
                  disabled={page === number}
                  key={number}
                  onClick={() => setPage(number)}
                  onClickCapture={() => setLoading(true)}
                  className={`btn btn-xs md:btn-sm ${
                    page === number ? "btn-primary" : "btn-ghost"
                  } border shadow-lg disabled:bg-primary disabled:text-white`}
                >
                  {number + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
    
            </div>
            :
            <div className='md:w-6/12'>
                <p className='flex justify-center'>No data in {categoryTitle}</p>
            </div>
       }
        <div className='md:w-3/12'>
          <Categories />
        </div>
      </div>
        </Main>
    );
};

export default category;

export async function getServerSideProps(context) {
    const { category } = context.query;
    console.log(category)
    // Fetch data for the given id
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_PRO}/api/category/${category}`);
    const data = await res.json();
  
    return {
      props: { data,category },
    };
  }