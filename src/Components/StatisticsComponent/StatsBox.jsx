import { Card, Col } from "react-bootstrap"


function StatsBox({icon,boxNum,boxDescription,color,dataAos}) {
  return (
    <>
    <Col lg='3' md='6'>
        <Card className="shadow px-3 py-4 mb-lg-0 mb-4" style={{border:"none"}} data-aos={dataAos} data-aos-duration="1500">
            <div className="d-flex align-items-center justify-content-md-center" style={{gap:'22px'}}>
                <i className="pb-3" style={{color: color ,fontSize:'45px',fontWeight:'bold'}}>{icon}</i>
                <div>
                    <h1 className="fw-bold" style={{color:'#0b198f'}}>{boxNum}</h1>
                    <p style={{fontSize:'15px'}}>{boxDescription}</p>
                </div>
            </div>
        </Card>
    </Col>
    </>
  )
}

export default StatsBox