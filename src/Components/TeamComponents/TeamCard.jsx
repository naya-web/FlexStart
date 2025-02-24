import { Card, Col } from "react-bootstrap"
import './TeamCardStyle.css'
import image from '../../assets/img/team-shape.svg'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function TeamCard({img,name,job,description}) {
  return (
    <>
    <Col lg='3' md='6'>    
      <Card data-aos="zoom-in" data-aos-duration="1500" className="text-center team-card mt-lg-0 mt-5" style={{minHeight:'520px'}}>
          <div className="card-image">
              <img className="w-100" src={img} alt="" />
              <img src={image} className="wave" alt="" />
              <div className="links">
                <i><FaTwitter /></i>
                <i><FaFacebook /></i>
                <i><FaInstagram /></i>
                <i><FaLinkedin /></i>
              </div>
          </div>
          <div className="px-3 py-4">
            <p style={{color:'#012970',fontWeight:'600',fontSize:'20px'}}>{name}</p>
            <p className="text-secondary" style={{fontSize:'15px'}}>{job}</p>
            <p style={{color:'#5e5e5e',fontSize:'14px',fontStyle:'italic'}}>{description}</p>
          </div>
      </Card>
    </Col>
    </>
  )
}

export default TeamCard