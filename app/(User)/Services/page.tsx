import ServiceContact from '@/components/ServiceContact'
import ServiceInfo from '@/components/ServiceInfo'
import WhyBookService from '@/components/WhyBookService'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-[80vh] bg-black'>
      <div className='bg-black min-h-[10vh]'></div>
      <ServiceInfo/>
      <ServiceContact/>
      <WhyBookService/>
    </div>
  )
}

export default page