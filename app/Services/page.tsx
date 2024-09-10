import ServiceContact from '@/components/ServiceContact'
import ServiceInfo from '@/components/ServiceInfo'
import ServiceVideo from '@/components/ServiceVideo'
import WhyBookService from '@/components/WhyBookService'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-[80vh]'>
      <div className='min-h-[10vh]'></div>
      <ServiceInfo/>
      <ServiceContact/>
      <ServiceVideo/>
      <WhyBookService/>
    </div>
  )
}

export default page