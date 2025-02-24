// import React from 'react'
import './MegaStyle.css'
import { Col, Container, Dropdown, NavDropdown, Row } from 'react-bootstrap'

function Mega() {
    return (
        <>
            <NavDropdown className="align-text-top px-2" title="Mega Menu" id="basic-nav-dropdown">
                <Container className="eventsNav pt-0 mt-0 shadow">
                    <Row>
                        <Col lg="3" className="text-left">
                            <Dropdown.Item>
                                <a className="nav-link" role="button">Col 1 link 1</a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a className="nav-link" role="button">Col 1 link 2</a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a className="nav-link" role="button">Col 1 link 3</a>
                            </Dropdown.Item>
                        </Col>

                        <Col lg="3" className="text-left">
                            <Dropdown.Item>
                                <a className="nav-link" role="button">Col 2 link 1</a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a className="nav-link" role="button">Col 2 link 2</a>
                            </Dropdown.Item>                
                            <Dropdown.Item>
                                <a className="nav-link" role="button">Col 2 link 3</a>
                            </Dropdown.Item>
                        </Col>

                        <Col lg="3" className="text-left">
                            <Dropdown.Item>
                                <a className="nav-link" role="button">Col 3 link 1</a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a className="nav-link" role="button">Col 3 link 2</a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a className="nav-link" role="button">Col 3 link 3</a>
                            </Dropdown.Item>
                        </Col>

                        <Col lg="3" className="text-left">
                        <Dropdown.Item>
                                <a className="nav-link" role="button">Col 4 link 1</a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a className="nav-link" role="button">Col 4 link 2</a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a className="nav-link" role="button">Col 4 link 3</a>
                            </Dropdown.Item>
                        </Col>
                    </Row>
                </Container>
            </NavDropdown>
        </>
    )
}

export default Mega
