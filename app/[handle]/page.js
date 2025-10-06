import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
    const { handle } = await params
    const client = await clientPromise
    const db = client.db("srttree")
    const collection = db.collection("links")

    // If the handle is already claimed, you cannot create the Srttree
    const item = await collection.findOne({ handle: handle })
    if (!item) {
        return notFound()
    }
    const item2 = {
        "_id": {
            "$oid": "68e3b7cb4ad76b7b842f3833"
        },
        "links": [
            {
                "link": "https://www.instagram.com/codewithharry/?hl=en",
                "linktext": "Instagram"
            },
            {
                "link": "https://www.codewithharry.com",
                "linktext": "Website"
            },
            {
                "link": "https://www.facebook.com",
                "linktext": "Facebook"
            }
        ],
        "pic": "https://stickerrs.com/wp-content/uploads/2024/03/Cat-Meme-Stickers-Featured.png"
    }
    return <div className="flex min-h-screen justify-center items-start py-10">
        {item && <div className="photo flex flex-col items-center justify-center gap-2">
            <img className="h-30 rounded-full aspect-square" src={item.pic} alt="pfp" />
            <span className="font-bold text-black text-xl">@{handle}</span>
            <span className="description text-center px-4 mx-auto max-w-[60%]">{item.desc}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return <Link key={index} href={item.link} ><div className="p-4 min-w-96 shadow-lg bg-black rounded-lg my-2 flex justify-center items-center font-bold text-lg text-white">
                        {item.linktext}
                    </div></Link>
                })}
            </div>
        </div>}
    </div>
}