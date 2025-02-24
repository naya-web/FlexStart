// import React from 'react'
// import GalleryWithFilter from '../../Components/PortfolioComponents/GalleryWithFilter'
import { useEffect, useState } from "react";
import "./PortfolioStyle.css";
import SectionTitle from "../../Components/allComponents/SectionTitle";
import img1 from "../../assets/img/portfolio/portfolio-1.jpg";
import img2 from "../../assets/img/portfolio/portfolio-2.jpg";
import img3 from "../../assets/img/portfolio/portfolio-3.jpg";
import img4 from "../../assets/img/portfolio/portfolio-4.jpg";
import img5 from "../../assets/img/portfolio/portfolio-5.jpg";
import img6 from "../../assets/img/portfolio/portfolio-6.jpg";
import img7 from "../../assets/img/portfolio/portfolio-7.jpg";
import img8 from "../../assets/img/portfolio/portfolio-8.jpg";
import img9 from "../../assets/img/portfolio/portfolio-9.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";

function Portfolio() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const GalleryData = [
    {
      id: 1,
      titile: "App",
      image: img1,
      number: 'App 1'
    },
    {
      id: 2,
      titile: "Web",
      image: img2,
      number: 'Web 3'
    },
    {
      id: 3,
      titile: "App",
      image: img3,
      number: 'App 2'
    },
    {
      id: 4,
      titile: "Card",
      image: img4,
      number: 'Card 2'
    },
    {
      id: 5,
      titile: "Web",
      image: img5,
      number: 'Web 2'
    },
    {
      id: 6,
      titile: "App",
      image: img6,
      number: 'App 3'
    },
    {
      id: 7,
      titile: "Card",
      image: img7,
      number: 'Card 1'
    },
    {
      id: 8,
      titile: "Card",
      image: img8,
      number: 'App 2'
    },
    {
      id: 9,
      titile: "Web",
      image: img9,
      number: 'Web 3'
    },
  ];

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.titile))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.titile == itemData);
    setData(filterData);
  };
  return (
    <>
      <div className="pt-5">
        <SectionTitle
          titleName={"PORTFOLIO"}
          titleDescription={"Check our latest work"}
        />
      </div>
      <Container className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li>
              <button onClick={() => setData(GalleryData)}>All</button>
            </li>
            {collection.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    gallery_filter(item);
                  }}
                  
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <Row className="galleryContainer mb-5 mx-0">
          {data.map((item) => (
            <Col  lg='4' md='6'  key={item.id} className="galleryItem my-2">
              <div data-aos="zoom-out" data-aos-duration="1500">
                <img src={item.image} />
                <div className="overlay">
                  <div className="overlay-content">
                    <h4>{item.number}</h4>
                    <p>{item.titile}</p>
                    <FaCirclePlus className="fs-2 mx-2" />
                    <IoLink style={{backgroundColor:'#012970'}} className="fs-2  mx-2 text-light rounded-circle p-2"/>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
