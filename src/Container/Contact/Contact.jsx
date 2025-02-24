import { Col, Container, Row } from "react-bootstrap"
import './ContactStyle.css'
import SectionTitle from "../../Components/allComponents/SectionTitle"
import { BsGeoAlt } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";
import ContactInfo from "../../Components/ContactComponent/ContactInfo";

function Contact() {
    const contactInfo = [
        {
            icon: <BsGeoAlt />,
            title: 'Address',
            description1: 'A108 Adam Street,',
            description2: 'New York, NY 535022',
        },
        {
            icon: <FiPhone />,
            title: 'Call Us',
            description1: '+1 5589 55488 55',
            description2: '+1 6678 254445 41',
        },
        {
            icon: <BsEnvelope />,
            title: 'Email Us',
            description1: 'info@example.com',
            description2: 'contact@example.com',
        },
        {
            icon: <LuClock4 />,
            title: 'Open Hours',
            description1: 'Monday - Friday',
            description2: '9:00AM - 05:00PM',
        },
    ]
    return (
        <>
        <Container className="my-5 contact">
            <SectionTitle titleName={'CONTACT'} titleDescription={'Contact Us'}/>
            <Row className="mx-0">
                <Col  lg='6' className="d-flex flex-wrap justify-content-center justify-content-lg-start">       
                    {
                        contactInfo.map((e,i)=>{
                            return(
                                <>
                                <ContactInfo key={i} icon={e.icon} title={e.title} description1={e.description1} description2={e.description2}/>
                                </>
                            )
                        })
                    }
                </Col>
                <Col lg='6' >
                    <form data-aos="fade-down" data-aos-duration="1500" action="" className="mt-3 mt-lg-2" style={{backgroundColor:'#fafbff',padding:'25px'}}>
                        <input className="me-4" style={{width:'47%'}} type="text" placeholder="Your Name" />
                        <input className="" style={{width:'48%'}} type="email" placeholder="Your Email" />
                        <input className="w-100" type="text" placeholder="Subject" />
                        <textarea className="d-block w-100" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        <div className="d-flex justify-content-center">
                            <input className="" type="submit" value={'Send Message'} />
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Contact