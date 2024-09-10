import AboutMeVid from '@/components/AboutMeVid'
import BusinessInNumbers from '@/components/BusinessInNumbers'
import Experience from '@/components/Experience'
import Intro from '@/components/Intro'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-[80vh]'>
      <div className='min-h-[10vh]'></div>
      <Intro/>
      <BusinessInNumbers/>
      <Experience/>
      <AboutMeVid/>
    </div>
  )
}

export default page;