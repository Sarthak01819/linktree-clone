"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    const showNavbar = ["/", "/generate"].includes(pathname)
    return (<>{showNavbar && <nav className='bg-white w-[90vw] mx-auto fixed z-50 top-12 right-[5vw] rounded-full flex items-center justify-between py-4 pl-11 pr-4 border border-[#e0e2d9] shadow'>
        <div className='flex items-center  gap-14'>
            <Link href={"/"}><img loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" className="h-6"></img></Link>
            <ul className='flex text-lg'>
                <Link href={"/products"}><li className='hover:bg-[#e0e2d9] py-2 px-4 rounded-lg'>Products</li></Link>
                <Link href={"/templates"}><li className='hover:bg-[#e0e2d9] py-2 px-4 rounded-lg'>Templates</li></Link>
                <Link href={"/marketplace"}><li className='hover:bg-[#e0e2d9] py-2 px-4 rounded-lg'>Marketplace</li></Link>
                <Link href={"/learn"}><li className='hover:bg-[#e0e2d9] py-2 px-4 rounded-lg'>Learn</li></Link>
                <Link href={"/pricing"}><li className='hover:bg-[#e0e2d9] py-2 px-4 rounded-lg'>Pricing</li></Link>
            </ul>
        </div>
        <div className='flex gap-2'>
            <button className="login font-semibold bg-[#efefef] py-4 px-6 text-lg rounded-lg">Log in</button>
            <button className="signup font-semibold text-white bg-black py-4 px-6 text-lg rounded-full">Sign up free</button>
        </div>
    </nav>}
    </>
    )
}

export default Navbar