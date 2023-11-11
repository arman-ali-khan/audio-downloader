
import parse from 'html-react-parser';
import Link from 'next/link';
import React from 'react';
import Main from '../../Layout/Main';
import Popular from '../../components/Home/Popular/Popular';

const file = ({data:file}) => {
    const categories = JSON.parse(file?.categories)
    const tags = JSON.parse(file?.tags)
    return (
        <Main title={file?.title} description={`Download ${file?.title}`} thumb={file?.thumbnail} >
            <div className='md:flex w-full gap-2'>
                <div className='md:w-3/12 hidden md:block'>
                    <Popular />
                </div>
                <div className='md:w-6/12'>
                <div  class="flex flex-col items-center justify-center w-full mx-auto">
    <div style={{backgroundImage:`url(${file?.thumbnail})`}} class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" ></div>

    <div class="sm:w-96 w-full mx-3 sm:mx-0 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg  dark:bg-gray-800">
        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{file?.title}</h3>

        <div class="flex flex-col gap-2 justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            {/* Title */}
           <div className='flex gap-2'>
            <p className='font-bold'>Title:</p>
            <p>{file?.title}</p>
           </div>
           {/* Artist */}
           <div className='flex gap-2'>
            <p className='font-bold'>Artist:</p>
            <p>{file?.artist}</p>
           </div>
           {/* Category */}
           <div className='flex gap-2'>
            <p className='font-bold'>Category:</p>{file?.categories}
            {categories?.length ?
                categories?.map((category,i)=><Link key={i} className='text-blue-500' href={`/category/${category.label}`}>{category.value}</Link>):''
            }
           </div>
           {/* File size */}
           <div className='flex gap-2'>
            <p className='font-bold'>File size:</p>
            <p>{file?.fileSize}</p>
           </div>
           {/* Total Download */}
           <div className='flex gap-2'>
            <p className='font-bold'>Total Download:</p>
            <p>{file?.totalDownload||0}</p>
           </div>
           {/* Date */}
           <div className='flex gap-2'>
            <p className='font-bold'>Date:</p>
            <p>{file?.createdAt}</p>
           </div>
           {/* URL */}
           <div className='flex gap-2 justify-center'>
           {
                  parse(file?.embedCode)
                }
           <a target='_blank' className='btn btn-outline bg-blue-100 btn-sm rounded-sm text-blue-600 hover:bg-blue-200 hover:text-blue-600' href={file?.downloadUrl}>Download</a>
           </div>
            {/* Tags */}
            <div className='flex gap-2'>
            <p className='font-bold'>Tags:</p>{file?.tags}
            <p>
                {tags?.length ?
                    tags?.map((tag,i)=><Link key={i} className='text-blue-500' href={`/tag/${tag.label}`}>{tag.value}<span className='text-black'>,</span></Link>):''
                }
            </p>
           </div>
        </div>
    </div>
</div>
                </div>
                <div className='md:w-3/12'>
                    <Popular />
                </div>
            </div>
        </Main>
    );
};

export default file;

export async function getServerSideProps(context) {
    const { file } = context.query;
    console.log(file)
    // Fetch data for the given id
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_PRO}/posts/${file}`);
    const data = await res.json();
  
    return {
      props: { data },
    };
  }