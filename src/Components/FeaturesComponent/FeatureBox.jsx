// import React from 'react'
// import { CiSquareCheck } from "react-icons/ci";
import { IoIosCheckmark } from "react-icons/io";
import './FeatureBoxStyle.css'

function Feature({description,aosDelay}) {
  return (
    <>
    <div data-aos="fade-up" data-aos-duration={aosDelay} className=" shadow d-flex  align-items-center my-4  py-2 px-4 feature" style={{minWidth:'48%'}}>
        <i className="fs-2 d-flex me-2 " style={{backgroundColor:'#ecf3ff'}}><IoIosCheckmark /></i>
        <p className="pt-3" style={{color:'#012970',fontSize:'18px',fontWeight:'700'}}>{description}</p>
    </div>
    </>
  )
}

export default Feature