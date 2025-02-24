// import React from 'react'
import { IoIosCheckmark } from "react-icons/io";
import './FeatureDetailsStyle.css'


function FeatureDetails({title,subTitle1,description1,subTitle2,description2}) {
  return (
    <>
    <div className="feat-details">      
      <p>{title}</p>
      <div className="d-flex align-item-center title">
          <IoIosCheckmark  className="fs-1 "/>
          <p className="fw-bold pt-2 fs-">{subTitle1}</p>
      </div>
      <p>{description1}</p>
      <div className="d-flex align-item-center title">
          <IoIosCheckmark  className="fs-1"/>
          <p className="fw-bold pt-2 fs-">{subTitle2}</p>
      </div>
      <p>{description2}</p>
    </div>
    </>
  )
}

export default FeatureDetails