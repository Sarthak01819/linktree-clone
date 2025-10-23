import React from 'react'
import Image from 'next/image'

const Login = () => {
    return (
        <div className='grid grid-cols-2 min-h-screen w-full'>
            <div className="col1 flex flex-col justify-center items-center pt-30">
                <div className='flex flex-col gap-12 justify-center items-center w-full'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <h1 className='font-bold text-4xl'>Welcome Back</h1>
                        <p className='opacity-65 text-lg'>Log in to your Srttree</p>
                    </div>
                    <div className='flex flex-col gap-2 w-[60%]'>
                        <input type="text" placeholder='Email or username' className='px-3 py-3 rounded-xl bg-[#f3f3f1]' />
                        <button className='text-white font-bold bg-black p-3 rounded-xl text-lg cursor-pointer'>Continue</button>
                    </div>
                </div>
                <p className='my-4 opacity-65 text-lg'>OR</p>
                <div className='flex flex-col w-[60%] justify-center items-center gap-2'>
                    <button className='border border-[#d7d7d7] flex justify-center items-center w-full py-3 font-semibold text-md rounded-xl hover:bg-[#d7d7d7] cursor-pointer gap-2'>
                        <Image className='h-[14px]' src="/google.png" alt="google" width={18} height={18} unoptimized />
                        Continue with Google
                    </button>
                    <button className='border border-[#d7d7d7] flex justify-center items-center w-full py-3 font-semibold text-md rounded-xl hover:bg-[#d7d7d7] cursor-pointer gap-2'>
                        <Image className='h-[14px]' src="/apple.png" alt="apple" width={18} height={18} unoptimized />
                        Continue with Apple
                        </button>
                </div>
                <div className='flex gap-2 my-2 justify-center items-center'>
                    <span className='text-purple-700 font-semibold text-md cursor-pointer'>Forgot password?</span>
                    <span className='font-extrabold text-2xl flex justify-items-center pb-3'>.</span>
                    <span className='text-purple-700 font-semibold text-md cursor-pointer'>Forgot username?</span>
                </div>
                <div className='flex gap-2'>
                    <span className='opacity-65'>Don&apos;t have an account?</span>
                    <span className='text-purple-700 cursor-pointer'>Sign up</span>
                </div>
            </div>
            <div className="col2 h-[100vh] overflow-clip justify-center flex items-center">
                <Image className='w-[50vw]' src="/generate.png" alt='Image' width={800} height={600} unoptimized />
            </div>
        </div>
    )
}

export default Login