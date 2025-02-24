// import React from 'react'

import { Button, Col, Container, Row } from "react-bootstrap"
// import HeroButton from "../../Components/allComponents/HeroButton"
import img from '../../assets/img/about.jpg'
// import './AboutUsStyle.css'
import { useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import Aos from "aos"
import 'aos/dist/aos.css';


function AboutUs({newText,btnTitle}) {
  const [more,setMore]=useState('Read More')
  const [text,setText]=useState('')
  Aos.init()

  return (
    <>
    <Container>
        <Row className="mx-0 py-5">
            <Col lg='6' className="py-lg-2 h-100 pe-lg-0" >
              <div data-aos="fade-up" data-aos-duration="1500"  className="pt-5 pb-4 px-5 h-75" style={{backgroundColor:"#F6F9FF"}}>
                <p className="fw-bold " style={{color:"#4154f1"}}>WHO WE ARE</p>
                <h2 className="fs-5" style={{color:"#012970",marginTop:"-10px",fontSize: '24px',fontWeight: '700'}}>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
                <p className="pb-4">Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.</p>
                <p>{text}</p>
                <Button className="px-4 fs-5 but" style={{backgroundColor:"#4154F1"}} onClick={()=>{
                  setText(text===newText ? '' : newText)
                  setMore(more===btnTitle ? 'Read Less': btnTitle)
                  }}>{more}
                  <FaArrowRightLong className="ms-2 arrow" />
                </Button>
              </div>
            </Col>
            <Col  lg='6' className="ps-lg-0">
                <img src={img} className="w-100 p-0 h-100" alt="" data-aos="fade-down" data-aos-duration="1500" />
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default AboutUs