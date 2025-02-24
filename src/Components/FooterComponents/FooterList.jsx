import { Col } from "react-bootstrap";
import { RiArrowRightSLine } from "react-icons/ri";

function FooterList({title,element1,element2,element3,element4,element5}) {
  return (
    <>
    {/* <Col lg='2'>     */}
        <div style={{color:'#013289',lineHeight:'2'}}>
            <p className="fw-bold" style={{color:'#012970'}}>{title}</p>
            <div style={{fontSize:'15px'}}>
                <i style={{color:'#d0d4fc'}}><RiArrowRightSLine /></i>
                <span>{element1}</span>
            </div>
            <div style={{fontSize:'15px'}}>
                <i style={{color:'#d0d4fc'}}><RiArrowRightSLine /></i>
                <span>{element2}</span>
            </div>
            <div style={{fontSize:'15px'}}>
                <i style={{color:'#d0d4fc'}}><RiArrowRightSLine /></i>
                <span>{element3}</span>
            </div>
            <div style={{fontSize:'15px'}}>
                <i style={{color:'#d0d4fc'}}><RiArrowRightSLine /></i>
                <span>{element4}</span>
            </div>
            <div style={{fontSize:'15px'}}>
                <i style={{color:'#d0d4fc'}}><RiArrowRightSLine /></i>
                <span>{element5}</span>
            </div>
        </div>
    {/* </Col> */}
    </>
  )
}

export default FooterList