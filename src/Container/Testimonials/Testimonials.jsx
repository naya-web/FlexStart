// import React from 'react'

import { Container } from "react-bootstrap"
import TestimonialsCard from "../../Components/TestimonialsComponents/TestimonialsCard"
import SectionTitle from "../../Components/allComponents/SectionTitle"
import img1 from '../../assets/img/testimonials/testimonials-1.jpg'
import img2 from '../../assets/img/testimonials/testimonials-2.jpg'
import img3 from '../../assets/img/testimonials/testimonials-3.jpg'
import img4 from '../../assets/img/testimonials/testimonials-4.jpg'
import img5 from '../../assets/img/testimonials/testimonials-5.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import './TestimonialsStyle.css'

function Testimonials() {
    const testiCardData=[
        {
            text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
            img: img1,
            name: 'Sual Goodman',
            job: 'Ceo & Founder',
        },
        {
            text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
            img: img2,
            name: 'Sara Wilsson',
            job: 'Designer',
        },
        {
            text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
            img: img3,
            name: 'Jena Karlis',
            job: 'Store Owner',
        },
        {
            text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
            img: img4,
            name: 'Matt Brandon',
            job: 'Freelancer',
        },
        {
            text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
            img: img5,
            name: 'John Larson',
            job: 'Entrepreneur',
        },
    ];

  return (
    <>
    <div className="py-5">
        <SectionTitle titleName={'TISTIMONIALS'} titleDescription={'What people are saying about us'}/>
        <Container>
            
        <Splide options={{
                        type: 'loop',
                        autoplay: true,
                        speed: 500,
                        perPage: 3, // Default setting
                        breakpoints: {
                            640: { // Small screens
                                perPage: 1,
                            },
                            768: { // Medium screens
                                perPage: 1,
                                
                            },
                            1024: { // Large screens
                                perPage: 3,
                            },
                        },
                        focus: 'center',
                        // start : 1,
                    }}>
                        
                        {
                            testiCardData.map((e,i)=>{
                                return(
                                    <>
                                    
                                        <SplideSlide>
                                                <TestimonialsCard key={i} text={e.text} img={e.img} name={e.name} job={e.job}/>
                                        </SplideSlide>
                                    
                                    </>
                                )
                            })
                            
                        }
                        
                </Splide>
        </Container>
    </div>
    
    </>
  )
}

export default Testimonials