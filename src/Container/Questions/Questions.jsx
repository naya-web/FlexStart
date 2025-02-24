// import React from 'react'

import { Accordion, Col, Container, Row } from "react-bootstrap"
import SectionTitle from "../../Components/allComponents/SectionTitle"
import './QuestionStyle.css'

function Questions() {
  return (
    <>
    <Container className="py-5">
      <SectionTitle titleName={'F.A.Q'} titleDescription={'Frequently Asked Questions'}/>
      <Row className="mx-0">
        <Col lg='6'>
          <Accordion>
            <Accordion.Item data-aos="fade-up" data-aos-duration="1500" eventKey="0">
            <Accordion.Header>Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
              <Accordion.Body>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet
              non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor
              purus non
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" data-aos="fade-up" data-aos-duration="1700">
              <Accordion.Header>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</Accordion.Header>
              <Accordion.Body>
              Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec
              ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper
              dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" data-aos="fade-up" data-aos-duration="1900">
              <Accordion.Header>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</Accordion.Header>
              <Accordion.Body>
              Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer 
              enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis 
              convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col lg='6' className="mt-5 mt-lg-0">
          <Accordion>
            <Accordion.Item eventKey="0" data-aos="fade-up" data-aos-duration="1500">
            <Accordion.Header >Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
              <Accordion.Body>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet
              non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor
              purus non
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" data-aos="fade-up" data-aos-duration="1700">
              <Accordion.Header>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</Accordion.Header>
              <Accordion.Body>
              Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec
              ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper
              dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" data-aos="fade-up" data-aos-duration="1900">
              <Accordion.Header className="">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</Accordion.Header>
              <Accordion.Body>
              Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer 
              enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis 
              convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Questions