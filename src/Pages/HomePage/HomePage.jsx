import { Button, Col, Container, Row } from 'react-bootstrap'
import './HomePageStyle.css'
import img from '../../assets/img/hero-img.png'
import AboutUs from '../../Container/AboutUs/AboutUs'
import { FaArrowRightLong } from 'react-icons/fa6'
import OurValues from '../../Container/OurValues/OurValues'
import Statistics from '../../Container/Statistics/Statistics'
import Features from '../../Container/Features/Features'
import Services from '../../Container/Services/Services'
import Pricing from '../../Container/Pricing/Pricing'
import Questions from '../../Container/Questions/Questions'
import Portfolio from '../../Container/Portfolio/Portfolio'
import Testimonials from '../../Container/Testimonials/Testimonials'
import Team from '../../Container/Team/Team'
import Blogs from '../../Container/Blog/Blogs'
import Contact from '../../Container/Contact/Contact'
import { motion } from 'framer-motion';




function HomePage() {
  return (
    <>
    <div className="hero pt-5">
      {/* <NavBar/> */}
      <Container>
        <Row className='py-5 mx-0'>
          <Col lg='6' className='py-5 mt-5'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <h1 className=''>We offer modern solutions for growing your business</h1>
            <p className='pb-4'>We are team of talented designers making websites with Bootstrap</p>
            <Button className="px-4 fs-5 but" style={{backgroundColor:"#4154F1"}}>
              Get Started
              <FaArrowRightLong className="ms-2 arrow" />
            </Button>
            </motion.div>
          </Col>
          <Col lg='6' className='mt-5'>
            <img src={img} className='w-100' alt="" />
          </Col>
        </Row>
      </Container>
    </div>
    <AboutUs newText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae velit veritatis eveniet delectus, eos ut alias accusamus tempore quasi explicabo perferendis odit harum pariatur aperiam ipsam adipisci debitis ab. Debitis'} btnTitle={'Read More'}/>
    <OurValues/>
    <Statistics/>
    <Features/>
    <Services/>
    <Pricing/>
    <Questions/>
    <Portfolio/>
    <Testimonials/>
    <Team/>
    <Blogs/>
    <Contact/>
    {/* <NewsLetter/> */}
    {/* <Footer/> */}
    </>
  )
}

export default HomePage