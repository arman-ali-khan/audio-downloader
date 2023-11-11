import Link from 'next/link';
import React, { useState } from 'react';
import Login from '../../Modal/Login';

const Navbar = () => {
  const [modal,setModal] = useState(false)
    return (
        <div className="navbar py-1 min-h-min bg-base-100 shadow-sm">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
            <li><Link href={'#'}>Item 1</Link></li>
            <li><Link href={'#'}>Item 3</Link></li>
            </ul>
          </div> */}
          <Link href={'/'} className="btn btn-ghost btn-sm normal-case text-xl">Logo</Link>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link className='border-b py-1 !rounded mx-1' href={'#'}>Item 1</Link></li>
            <li><Link className='border-b py-1 !rounded mx-1' href={'#'}>Item 3</Link></li>
          </ul>
        </div> */}
        <div className="navbar-end">
          <button onClick={()=>setModal(true)}  className="btn btn-sm btn-secondary rounded">Login</button>
        </div>
        <Login modal={modal} setModal={setModal} />
      </div>
    );
};

export default Navbar;