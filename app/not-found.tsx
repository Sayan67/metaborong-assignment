import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className='h-screen flex flex-col gap-8 items-center justify-center'>
        <div className='flex flex-col items-center'>
            <h1 className='text-9xl font-neue-bold'>404</h1>
            <p className='text-3xl font-neue-medium'>Page not found</p>
        </div>
        <Link href={'/'} className='border border-white rounded-xl px-6 py-2 hover:bg-white/30 text-xl'>Take me Home!</Link>
    </div>
  )
}

export default notFound