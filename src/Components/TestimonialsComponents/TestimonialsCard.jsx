// import React from 'react'

import { Card} from "react-bootstrap"
import { FaStar } from "react-icons/fa";

function TestimonialsCard({text,img,name,job}) {
  return (
    <>  
        <Card className="shadow text-center p-5 mx-1" style={{border:'none'}}> 
            <div className="stars mb-3">
              <FaStar className="text-warning fs-5 me-1"/>
              <FaStar className="text-warning fs-5 me-1"/>
              <FaStar className="text-warning fs-5 me-1"/>
              <FaStar className="text-warning fs-5 me-1"/>
              <FaStar className="text-warning fs-5 me-1"/>
            </div>
            <p className="" style={{color:'#444444',fontSize:'18px',fontStyle:'italic'}}>{text}</p>
            <img src={img} className="w-25 mx-auto rounded-circle mt-3 mb-4" alt="" />
            <p className="fs-4 fw-bold">{name}</p>
            <p className="text-secondary">{job}</p>
        </Card>
    </>
  )
}

export default TestimonialsCard