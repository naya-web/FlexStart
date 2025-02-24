// import React from 'react'

import { Button, Card, Col } from "react-bootstrap"
import { FaArrowRightLong } from "react-icons/fa6"
import './ServicesCardStyle.css'

function ServiceCard({icon,title,description,btnTitle,color}) {
  const changeBackground = (e)=>{
    e.currentTarget.style.backgroundColor= color;
    e.currentTarget.style.color= '#fff';
  }
  const resetBackgrounColor = (e)=>{
    e.currentTarget.style.backgroundColor= '';
    e.currentTarget.style.color= '#000';
  }
  return (
    <>
    <Col lg='4'>    
      <Card  data-aos="zoom-in" data-aos-duration="2500" style={{borderBottomWidth:'4px',borderBottomStyle:"solid" ,borderBottomColor:color,minHeight:'450px',transition:'.5s'}}
            className="services-card text-center py-5 px-4 mb-4 mt-4 mt-lg-0" 
            onMouseOver={changeBackground}
            onMouseLeave={resetBackgrounColor}>
        <i className="fs-1 text-center w-25 m-auto" style={{color:color,}}>{icon}</i>
        <p className="fw-bold fs-3">{title}</p>
        <p>{description}</p>
        <Button className="services-btn" style={{color:color,background:'none',border:'none'}}>
          {btnTitle}
          <FaArrowRightLong className="ms-2 arrow" />
        </Button>
      </Card>
    </Col>
    </>
  )
}

export default ServiceCard