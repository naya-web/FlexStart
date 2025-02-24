// import React from 'react'
import './Feature3Style.css'

function Feature3({icon,title,description,aosDelay}) {
  return (
    <>
    <div data-aos="fade-up" data-aos-duration={aosDelay} className="feat3 d-flex align-items-center gap-4 ">
        <div className="fs- icon mb-3">{icon}</div>
        <div>
            <h5 className='fw-bold'>{title}</h5>
            <p className='text-secondary'>{description}</p>
        </div>
    </div>
    </>
  )
}

export default Feature3