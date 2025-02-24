
import { Col, Row } from 'react-bootstrap'
import img from '../../assets/img/logo.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './FooterStyle.css'
import FooterList from '../../Components/FooterComponents/FooterList';
import img2 from '../../assets/img/footer-bg.png'

function Footer() {
  const footerLinks=[
    {
      title:'USEFUL LINKS',
      element1:'Home',
      element2:'About us',
      element3:'Services',
      element4:'Terms of service',
      element5:'Privacy policy'
    },
    {
      title:'OUR SERVICES',
      element1:'Web Design',
      element2:'Web Development',
      element3:'Product Management',
      element4:'Marketing',
      element5:'Graphic Design'
    },
  ]
  return (
    <>
    <div className=' ps-5'>
      <Row className='ps-5 mx-0' >
        <Col lg='5' className='ps-5 py-5'>
            <div className='d-flex align-items-center '>
              <img src={img} alt="" />
              <h3 className='logo pt-2 ps-1' style={{color: '#012970',fontWeight: '600',letterSpacing:' 0.6px',fontSize: '32px'}}>FlexStart</h3>
            </div>
            <p style={{fontSize:'15px',color:'#444444'}}>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus</p>
            <div className="icons">
              <i><FaTwitter /></i>
              <i><FaFacebook /></i>
              <i><FaInstagram /></i>
              <i><FaLinkedin /></i>
            </div>
        </Col>
        <Col lg='7' className='d-flex  flex-wrap justify-content-center justify-content-lg-start py-5' style={{backgroundImage:`url(${img2})`,gap:'70px'}}>
          {
            footerLinks.map((e,i)=>{
              return(
                <FooterList key={i} title={e.title} element1={e.element1} 
                element2={e.element2} element3={e.element3}
                element4={e.element4} element5={e.element5}/>
              )
            })
          }
          <div >
            <p className="fw-bold pb-3 " style={{color:'#012970'}}>CONTACT US</p>
            <div style={{fontSize:'14px',lineHeight:'.8',color:'#444444'}}>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
              <p className='pt-3'><b>Phone:</b><span>+1 5589 55488 55</span></p>
              <p><b>Email:</b><span> info@example.com</span></p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <div className='py-4 text-center lh-1' style={{backgroundColor:'#F6F9FF',color:'#012970',fontSize:'15px'}}>
        <p>&copy; Copyright <span style={{color:'#012970',fontWeight:'bold'}} >FlexStart</span> All Rights Reserved</p>
        <p>Designed by <span style={{color:'#4154f1'}}>Naya Alnakola</span></p>
    </div>
    </>
  )
}

export default Footer