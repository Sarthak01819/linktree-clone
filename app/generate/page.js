"use client"

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';

const Generate = () => {

    const searchParams = useSearchParams()

    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")

    const handleChange = (index, link, linktext) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext }
                }
                else {
                    return item
                }
            })
        })
    }

    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }


    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc": desc
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if (result.success) {
            toast.success(result.message)
            setLinks([])
            setpic("")
            sethandle("")
            setdesc("")
        }
        else {
            toast.error(result.message)
        }
    }

    return (
        <>

            <div className='grid grid-cols-2 h-screen w-full'>
                <div className="col1 flex flex-col items-center justify-center overflow-y-scroll h-[100vh] ">
                    <h1 className='font-bold text-4xl mt-48'>Create your SrtTree</h1>
                    <div className='flex flex-col gap-5 my-8 relative'>
                        <h2 className='font-semibold text-2xl'>Step 1: Claim your Handle</h2>
                        <div className="mx-4 ">
                            <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='px-4 py-2 w-full focus:outline-black border border-black rounded-xl' type="text" placeholder='Choose a handle' />
                        </div>
                        <h2 className='font-semibold text-2xl mb-40'>Step 2: Add Links</h2>
                        <div className='h-[25%] overflow-y-scroll flex flex-col gap-5 w-full absolute top-42'>
                            {links && links.map((item, index) => {
                                return <div key={index} className="mx-4 flex flex-col gap-5">
                                    <div className='w-full h-[1px]'></div>
                                    <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktext) }} className='px-4 py-2 w-full focus:outline-black border border-black rounded-xl' type="text" placeholder='Enter link' />
                                    <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link, e.target.value) }} className='px-4 py-2 w-full focus:outline-black border border-black rounded-xl' type="text" placeholder='Enter link text' />

                                </div>
                            })}
                        </div>

                        <button onClick={() => addLink()} className='text-white font-bold bg-black p-2 rounded-xl text-lg cursor-pointer mx-4'><span className='font-extrabold text-2xl'>+</span> Add Link</button>
                        <h2 className='font-semibold text-2xl'>Step 3: Add Picture and Description</h2>
                        <div className="mx-4 flex flex-col gap-5">
                            <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='px-4 py-2 w-full focus:outline-black border border-black rounded-xl' type="text" placeholder='Enter link to your picture' />
                            <input value={desc || ""} onChange={e => { setdesc(e.target.value) }} className='px-4 py-2 w-full focus:outline-black border border-black rounded-xl' type="text" placeholder='Add Description' />
                            <button disabled={pic == "" || handle == "" || links[0].linktext == ""} onClick={() => { submitLinks() }} className=' disabled:bg-slate-600 text-white font-bold bg-black p-3 w-full rounded-xl text-lg cursor-pointer'>Create your Srttree</button>
                        </div>
                    </div>
                </div>
                <div className="col2 h-[100vh] overflow-clip justify-center flex items-center">
                    <img className='w-[50vw]' src="/generate.png" alt='Image' />
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Generate