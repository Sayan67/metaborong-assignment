'use client'
import LeftPage from '@/components/home/LeftPage'
import RightPage from '@/components/home/RightPage'
import React from 'react'


const page = () => {
  return (
    <div className='min-h-svh flex items-center justify-center pt-44 pb-40 gap-28 bg-bg-black'>
      <LeftPage/>
      <RightPage/>
    </div>
  )
}

export default page