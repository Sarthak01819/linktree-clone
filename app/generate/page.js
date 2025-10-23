import React, { Suspense } from 'react'
import GenerateClient from './GenerateClient'

export default function Page() {
    return (
        <Suspense fallback={<div className='flex items-center justify-center h-screen'>Loading...</div>}>
            <GenerateClient />
        </Suspense>
    )
}