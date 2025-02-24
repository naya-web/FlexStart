// import React from 'react'

import { Container, Row } from "react-bootstrap"
import PricingCard from "../../Components/PricingComponent/PricingCard"
import SectionTitle from "../../Components/allComponents/SectionTitle"
import img1 from '../../assets/img/pricing-free.png'
import img2 from '../../assets/img/pricing-starter.png'
import img3 from '../../assets/img/pricing-business.png'
import img4 from '../../assets/img/pricing-ultimate.png'

function Pricing() {
  const pricingCardData=[
    {
      title: 'Free Plan',
      titleColor: '#07d5c0',
      price: '0',
      img: img1,
      description1: 'Aida dere',
      description2: 'Nec feugiat nisl',
      description3: 'Nulla at volutpat dola',
      description4: 'Pharetra massa',
      description5: 'Massa ultricies mi',
      del4: 'line-through',
      delColor4: 'gray',
      del5: 'line-through',
      delColor5: 'gray',
      aosData: "fade-up",
      aosDelay: "1500"
    },
    {
      title: 'Starter Plan',
      titleColor: '#65c600',
      price: '19',
      img: img2,
      description1: 'Aida dere',
      description2: 'Nec feugiat nisl',
      description3: 'Nulla at volutpat dola',
      description4: 'Pharetra massa',
      description5: 'Massa ultricies mi',
      del5: 'line-through',
      delColor5: 'gray',
      aosData: "fade-down",
      aosDelay: "1800"
    },
    {
      title: 'Business Plan',
      titleColor: '#ff901c',
      price: '29',
      img: img3,
      description1: 'Aida dere',
      description2: 'Nec feugiat nisl',
      description3: 'Nulla at volutpat dola',
      description4: 'Pharetra massa',
      description5: 'Massa ultricies mi',
      aosData: "fade-up",
      aosDelay: "1800"
    },
    {
      title: 'Ultimate Plan',
      titleColor: '#ff0071',
      price: '49',
      img: img4,
      description1: 'Aida dere',
      description2: 'Nec feugiat nisl',
      description3: 'Nulla at volutpat dola',
      description4: 'Pharetra massa',
      description5: 'Massa ultricies mi',
      aosData: "fade-down",
      aosDelay: "1500"
    },


  ]
  return (
    <>
    <SectionTitle titleName={'Pricing'} titleDescription={'Check our Pricing'} />
    <Container>      
      <Row className="mx-0 d-flex justify-content-center mb-5">
        {
          pricingCardData.map((e,i)=>{
            return(
              <>
              <PricingCard key={i} title={e.title} titleColor={e.titleColor}
                img={e.img} price={e.price} description1={e.description1} 
                description2={e.description2} description3={e.description3}
                description4={e.description4} description5={e.description5}
                del4={e.del4} delColor4={e.delColor4} del5={e.del5} delColor5={e.delColor5}
                aosData={e.aosData} aosDelay={e.aosDelay}
                />
              </>
            )
          })
        }
      </Row>
    </Container>
    </>
  )
}

export default Pricing