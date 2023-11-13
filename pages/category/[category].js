
// import Main from '../../Layer/Main';
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Main from '../../Layout/Main';
import Categories from '../../components/Home/Categories/Categories';
import Popular from '../../components/Home/Popular/Popular';
import Card from "../../components/Home/Recent/Card";

const category = () => {
  const router = useRouter()
  const {category} = router?.query

  const [loading, setLoading] = useState(false);
 const [categoryData,setCategoryData] = useState([])
    // Products count
    const [count, setCount] = useState(0);
    // pagination
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);
    // page count
    const pages = Math.ceil(count / size);

    useEffect(() => {
      axios
        .get(`https://apiradio.arman.top/0.1/api/categoryPosts?value=${category}&limit=10&page=${page}&sort=desc`)
        .then(function (response) {
          setCategoryData(response.data?.episodes);
          setCount(response.data?.count)
          setLoading(false);
        });
    }, [page,category]);


    // title
    const categoryTitle = category
    return (
        <Main title={`All files archived ${categoryTitle}`}>
            <div className='w-full md:flex gap-2'>
        <div className='md:w-3/12'>
          <Popular />
        </div>
       {
        categoryData.length > 0 ?  <div className='md:w-6/12'>
       
        <div>
          {/* Home tags */}
          <div className="bg-base-200 px-2 py-2 rounded-sm mb-2">
      <h2 className="capitalize">{categoryTitle?.split('-').join(' ')}</h2>
    </div>
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
              categoryData?.map((file, i) => <Card file={file} key={i} />)}
          </div>
          {/* pagination */}
          <div className="flex justify-center mt-44 w-full my-3">
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

// export async function getServerSideProps(context) {
//     const { category,page } = context.query;
//     console.log(context.query)
//     // Fetch data for the given id
//     const res = await fetch(`https://apiradio.arman.top/0.1/api/categoryPosts?value=${category}&limit=10&page=${page}&sort=desc`);
//     const data = await res.json();
  
//     return {
//       props: { data,category },
//     };
//   }