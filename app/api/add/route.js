import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("srttree")
    const collection = db.collection("links")

    // If the handle is already claimed, you cannot create the Srttree
    const doc = await collection.findOne({ handle: body.handle })
    if (doc) {
        return Response.json({ success: false, error: true, message: 'This Srttree already exists!' , result: null })
    }
    
    const result = await collection.insertOne(body)
    return Response.json({ success: true, error: false, message: 'You Srttree has been generated!' , result: result })
}