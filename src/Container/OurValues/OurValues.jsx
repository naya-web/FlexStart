// import React from 'react'

import { Container, Row } from "react-bootstrap"
import OurValuesCard from "../../Components/OurValuesComponents/OurValuesCard"
import img1 from '../../assets/img/values-1.png'
import img2 from '../../assets/img/values-2.png'
import img3 from '../../assets/img/values-3.png'
import SectionTitle from "../../Components/allComponents/SectionTitle"

function OurValues() {
    const OurValuesCardData=[
        {
          img: img1,
          title:'Ad cupiditate sed est odio',
          description:'Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.',
          dataAos:'fade-up',
        },
        {
          img: img2,
          title:'Voluptatem voluptatum alias',
          description:'Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.',
          dataAos: "zoom-in",
        },
        {
          img: img3,
          title:'Fugit cupiditate alias nobis.',
          description:'Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.',
          dataAos:'fade-down',
        },
      ]
  return (
    <>
    <Container>
      <div className="Our-Values py-5">
        <SectionTitle titleName={'OUR VALUES'}  titleDescription={''}/>
        <Row className="mx-0 mt-5 justify-content-center">
          {
              OurValuesCardData.map((e,i)=>{
                  return(
                      <>
                      <OurValuesCard key={i} img={e.img} title={e.title} description={e.description} dataAos={e.dataAos}/>
                      </>
                  )
              })
          }
        </Row>
      </div>
    </Container>
    </>
  )
}

export default OurValues