// import React from 'react'
import './PricingCardStyle.css'
import { Button, Card, Col } from "react-bootstrap"

function PricingCard({title,titleColor,price,img,description1,description2,description3,description4,description5,del4,delColor4,del5,delColor5,aosDelay,aosData}) {
  return (
    <>
    <Col lg='3' md='4' className='mt-4 mt-lg-0'>
        <Card data-aos={aosData} data-aos-duration={aosDelay} className='pricingCard py-5 text-center'>
            <p className='fw-bold fs-5' style={{color: titleColor}}>{title}</p>
            <p ><span className='fw-bold fs-1'><sup className='fw-bold fs-4'>$</sup>{price}</span><span className='text-secondary fs-4'><sub> / mo</sub></span></p>
            <img src={img} className="w-75 p-4 mx-auto mb-4" alt="" />
            <p >{description1}</p>
            <p >{description2}</p>
            <p >{description3}</p>
            <p style={{textDecorationLine: del4 ,color:delColor4}}>{description4}</p>
            <p style={{textDecorationLine: del5 ,color:delColor5}}>{description5}</p>
            <Button className='buy-btn'>Buy Now</Button>
        </Card>
    </Col>
    </>
  )
}

export default PricingCard