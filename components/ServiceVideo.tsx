import React from 'react'

const ServiceVideo = () => {
  return (
    <div>
        <div className="flex h-full w-full justify-end">
            <video
                autoPlay
                loop
                muted
                className="inset-0 h-[70vh] w-[70vw] object-cover"
            >
                <source src="/images/bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default ServiceVideo