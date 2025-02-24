import { Col } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './OurValuesCardStyle.css'

function OurValuesCard({img,title,description,dataAos}) {
  return (
    <>
    <Col lg='4' md='6' className='text-center '>    
      <Card className='value-card shadow mb-4 mb-lg-0' style={{border:'none',minHeight:'460px'}} data-aos={dataAos} data-aos-duration="1500">
        <Card.Img variant="top" className='w-75 mx-auto mb-4' src={img} />
        <Card.Body>
          <Card.Title className='fw-bold pb-3' style={{color: '#012970' , fontSize:'24px'}}>{title}</Card.Title>
        <Card.Text style={{fontSize:'18px'}}>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </>
  )
}

export default OurValuesCard