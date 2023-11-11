import React from 'react';

const Login = ({modal,setModal}) => {
    return (
        <div className={`${modal ? 'w-screen fixed flex justify-center  backdrop-blur-lg z-50 h-screen left-0 top-0':'hidden'}`}>
            <button onClick={()=>setModal(false)} className='fixed top-0 left-0 w-screen h-screen  -z-10'></button>
            <div className='w-full sm:w-96 h-96 border border-secondary bg-base-200 flex items-center justify-center rounded-md'>
                <div className=' flex flex-col items-center'>
                    <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div> 
        <div className="mt-6 flex items-center gap-1">
          <button onClick={()=>setModal(false)} className="btn btn-error btn-sm rounded">Cancel</button>
          <button className="btn btn-primary btn-sm rounded">Login</button>
        </div>
                </div>
           
            </div>
        </div>
    );
};

export default Login;