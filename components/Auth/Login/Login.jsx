
import { useRouter } from 'next/router';
import passwordHash from 'password-hash';
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Login() {
    const {register,handleSubmit} = useForm()
    const [loading,setLoading] = useState(false)


const router = useRouter()
      
    const handleLogin =async (data) =>{
        setLoading(true)
        const encryptedEmail = passwordHash.generate(data?.email);
        const encryptedPassword = passwordHash.generate(data?.password);
        
        if(process.env.NEXT_PUBLIC_ADMIN_EMAIL===data?.email&&process.env.NEXT_PUBLIC_ADMIN_PASSWORD===data?.password){
            typeof window!=='undefined' && localStorage.setItem('login',JSON.stringify({data:encryptedEmail,local:encryptedPassword}))
            toast.success('Login success')
            setLoading(false)
            router.push('/@dashboard')
        }else{
            toast.error('Enter valid email or password')
            setLoading(false)
        }
    }


      
     return (
        <div>
            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col items-center space-y-2 w-full sm:w-96 mx-auto">
                <input {...register('email',{required:true})} className="px-4 py-2 border " type="email" id="" />
                <input {...register('password',{required:true})} className="px-4 py-2 border " type="password" id="" />
                <button className="px-4 py-2 border ">{loading?'Loading...':'Login'}</button>
            </form>
        </div>
    );
}

export default Login;