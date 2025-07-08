import AboutMeVid from '@/components/AboutMeVid'
import BusinessInNumbers from '@/components/BusinessInNumbers'
import Experience from '@/components/Experience'
import Intro from '@/components/Intro'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-[80vh] bg-black max-w-7xl mx-auto'>
      <div className='bg-black min-h-[10vh]'></div>
      <Intro />
      <BusinessInNumbers />
      <Experience />
      <AboutMeVid />
    </div>
  )
}

export default page;