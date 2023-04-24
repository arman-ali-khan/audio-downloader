import Main from '../../Layer/Main';
import Popular from '../../components/Home/Popular/Popular';
import Link from 'next/link';
import React from 'react';

const file = () => {
    return (
        <Main title={'File'}>
            <div className='md:flex w-full gap-2'>
                <div className='md:w-3/12 hidden md:block'>
                    <Popular />
                </div>
                <div className='md:w-6/12'>
                <div class="flex flex-col items-center justify-center w-full mx-auto">
    <div class="w-full h-64 bg-gray-300 bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')] rounded-lg shadow-md" ></div>

    <div class="sm:w-96 w-full mx-3 sm:mx-0 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg  dark:bg-gray-800">
        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">lorem ipsum dolor hello world</h3>

        <div class="flex flex-col gap-2 justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            {/* Title */}
           <div className='flex gap-2'>
            <p className='font-bold'>Title:</p>
            <p>lorem hello world amar sonar bangla </p>
           </div>
           {/* Artist */}
           <div className='flex gap-2'>
            <p className='font-bold'>Artist:</p>
            <p>lorem hello world amar sonar bangla </p>
           </div>
           {/* Category */}
           <div className='flex gap-2'>
            <p className='font-bold'>Category:</p>
            <Link className='text-blue-500' href={'#'}>Horror</Link>
           </div>
           {/* File size */}
           <div className='flex gap-2'>
            <p className='font-bold'>File size:</p>
            <p>lorem</p>
           </div>
           {/* Total Download */}
           <div className='flex gap-2'>
            <p className='font-bold'>Total Download:</p>
            <p>12 sonar bangla </p>
           </div>
           {/* Date */}
           <div className='flex gap-2'>
            <p className='font-bold'>Date:</p>
            <p>12 day ago </p>
           </div>
           {/* URL */}
           <div className='flex gap-2 justify-center'>
           <a className='btn btn-outline bg-blue-100 btn-sm rounded-sm text-blue-600 hover:bg-blue-200 hover:text-blue-600' href='#'>Download</a>
           </div>
            {/* Tags */}
            <div className='flex gap-2'>
            <p className='font-bold'>Tags:</p>
            <p>
                <Link className='text-blue-500' href={'#'}>Horror</Link>,
                <Link className='text-blue-500' href={'#'}>Funny</Link>,
                <Link className='text-blue-500' href={'#'}>Action</Link>,
                <Link className='text-blue-500' href={'#'}>Village</Link>,
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