import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Categories from "../Home/Categories/Categories";
import Popular from "../Home/Popular/Popular";

function SingleEpisode({file}) {
    const categories = file?.categories&&JSON.parse(file?.categories)
    const tags =file?.tags&& JSON.parse(file?.tags)
    // const artist = file?.artist&&JSON.parse(file?.artist)

    // router
    const router = useRouter()
    console.log(file,'videoData')


    // handle download 
    const handleDownload = (url) =>{
        axios.get(`${process.env.NEXT_PUBLIC_API_PRO}/download/${file?.id}`)
        .then(res=>{
            // console.log(res.data)
            toast.success('Downloading...')
            window.open(url, '_blank');
        })
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
    return (
        <div className='md:flex w-full gap-2'>
                <div className='md:w-3/12 hidden md:block'>
                    <Popular />
                </div>
                <div className='md:w-6/12'>
                <div  className="flex flex-col items-center justify-center w-full mx-auto">
    <div style={{backgroundImage:`url(${file?.thumbnail})`}} className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" ></div>

    <div className="sm:w-[550px] w-full mx-3 sm:mx-0 -mt-10 overflow-hidden bg-base-200 p-4 rounded-lg shadow-lg">
        <h3 className="py-2 font-bold tracking-wide text-center  uppercase ">{file?.title}</h3>

        <div className="flex flex-col gap-2 justify-between  px-3 py-2 ">
            {/* Title */}
           <div className='flex gap-2'>
            <p className='font-bold'>Title:</p>
            <p>{file?.title}</p>
           </div>
          
           {/* Artist */}
           {/* <div className='flex gap-2'>
            <p className='font-bold'>Artist:</p>
            {artist?.length ?
                artist?.map((category,i)=><p key={i} className='text-blue-500' href={`/category/${category?.value}`}>{category?.label},</p>):''
            }
           </div> */}
           {/* Category */}
           <div className='flex gap-2'>
            <p className='font-bold'>Category:</p>
            {categories?.length ?
                categories?.map((category,i)=><Link key={i} className='text-blue-500' href={`/category/${category?.label}`}>{category?.value}</Link>):''
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
            <p>{moment(file?.createdAt).calendar()}</p>
           </div>
           {/* URL */}
           <div className='flex gap-2 justify-center'>
           {/* {
                  parse(file?.embedCode)
                } */}
           <button className='btn btn-outline  btn-sm rounded-sm text-blue-600 hover:bg-blue-200 hover:text-blue-600' onClick={()=>handleDownload(file?.downloadUrl)}>Download</button>
           </div>
            {/* Tags */}
            <div className='flex gap-2'>
            <p className='font-bold'>Tags:</p>
            <div className="flex items-center flex-wrap gap-1">
                {tags?.length ?
                    tags?.map((tag,i)=><p key={i} className='text-blue-500' href={`/tag/${tag?.value}`}>{tag?.value ? tag?.value:tag}<span className='text-black'>,</span></p>):''
                }
            </div>
           </div>
             {/* Description */}
             <div className='flex gap-2'>
            <p className='font-bold'>Description:</p>
            <p>{file?.description}</p>
           </div>
        </div>
    </div>
</div>
                </div>
                <div className='md:w-3/12'>
                    <Categories />
                </div>
            </div>
    );
}

export default SingleEpisode;