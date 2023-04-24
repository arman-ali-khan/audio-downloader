import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Card from '../Popular/Card';
import axios from 'axios';

const Popular = () => {
    const [populars,setPopulars] = useState([])
    useEffect(()=>{
        axios.get('/api/popular')
        .then(res=>{
            setPopulars(res.data)
        })
    },[])
    console.log(populars)
    return (
        <div>
            <div className='px-4 py-1 bg-base-200 rounded-t-md'>
                <h3 className='text-lg'>Popular</h3>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 px-1 gap-1'>
            {
                populars.map(popular=><Card key={popular._id} popular={popular}/>)
            }
           </div>
        </div>
    );
};

export default Popular;