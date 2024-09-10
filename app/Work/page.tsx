import FeaturedFilms from '@/components/FeaturedFilms'
import Portfolio from '@/components/Portfolio'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-[80vh]'>
      <div className='min-h-[10vh]'></div>
      <FeaturedFilms/>
      <Portfolio/>
    </div>
  )
}

export default page