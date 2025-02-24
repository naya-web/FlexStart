// import React from 'react'

import { Col, Container, Row } from "react-bootstrap"
import img from '../../assets/img/features.png'
import img1 from '../../assets/img/features-2.png'
import img2 from '../../assets/img/features-3.png'
import FeatureBox from '../../Components/FeaturesComponent/FeatureBox'
import { useState } from "react"
import FeatureDetails from "../../Components/FeaturesComponent/FeatureDetails"
import { FaChartLine } from "react-icons/fa6";
import { RiStackLine } from "react-icons/ri";
import { RiBrush4Line } from "react-icons/ri";
import { RiMagicLine } from "react-icons/ri";
import { LuCommand } from "react-icons/lu";
import { RiRadarLine } from "react-icons/ri";
import Feature3 from "../../Components/FeaturesComponent/Feature3"
import SectionTitle from "../../Components/allComponents/SectionTitle"

function Features() {
    const [para,setPara]=useState(<FeatureDetails 
        title={'Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.'}
        subTitle1={'Repudiandae rerum velit modi et officia quasi facilis'}
        description1={'Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et'}
        subTitle2={'Incidunt non veritatis illum ea ut nisi'}
        description2={'Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.'}
        />)
        const [active,setActive]=useState('#012970')
        const [active2,setActive2]=useState('#012970')
        const [active3,setActive3]=useState('#012970')
    const featureData=[
        {
            description:'Eos aspernatur rem',
            aosDelay: "1500",
        },
        {
            description:'Facilis neque ipsa',
            aosDelay: "1700",
        },
        {
            description:'Volup amet voluptas',
            aosDelay: "1900",
        },
        {
            description:'Rerum omnis sint',
            aosDelay: "1500",
        },
        {
            description:'Alias possimus',
            aosDelay: "1700",
        },
        {
            description:'Repellendus mollitia',
            aosDelay: "1900",
        },
    ]
    const feature3=[
        {
            icon: <FaChartLine />,
            title: 'Corporis voluptates sit',
            description: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
            aosDelay: '1500',
        },
        {
            icon: <RiStackLine />,
            title: 'Ullamco laboris nisi',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
            aosDelay: '1700',
        },
        {
            icon: <RiBrush4Line />,
            title: 'Labore consequatur',
            description: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere',
            aosDelay: '1900',
        },
        {
            icon: <RiMagicLine />,
            title: 'Beatae veritatis',
            description: 'Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta',
            aosDelay: '1500',
        },
        {
            icon: <LuCommand />,
            title: 'Molestiae dolor',
            description: 'Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte',
            aosDelay: '1700',
        },
        {
            icon: <RiRadarLine />,
            title: 'Explicabo consectetur',
            description: 'Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore',
            aosDelay: '1900',
        },
    ]
  return (
    <>
    <Container className="my-5 pt-5">
        {/* start first section in features  */}
        <Row className="mx-0">
            <Col lg='6' className="mb-4 mb-lg-0">
             <img  data-aos="fade-up" data-aos-duration="1500" className="w-100" src={img} alt="" />
            </Col>
            <Col lg='6'>
                <div className="d-md-flex flex-wrap justify-content-between ">
                    {
                        featureData.map((e,i)=>{
                            return(
                                <>
                                    <FeatureBox key={i} description={e.description} aosDelay={e.aosDelay}/>
                                
                                </>
                            )
                        })
                    }
                </div>
            </Col>
        </Row>
        {/* End first section in features  */}
        {/* start second section in features  */}
        <Row className="mx-0 py-5 my-5">
            <Col  lg='6' className="px-">
                <div data-aos="zoom-in"  data-aos-duration="1500" >
                    <h3 className="fw-bold" style={{color:'#012970',fontSize:'30px'}}>Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h3>
                    <div className="d-flex gap-5 mt-4 fw-bold" style={{color:'#012970'}}> 
                        <div onClick={()=>{
                            setPara(<FeatureDetails 
                                title={'First feature inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.'}
                                subTitle1={'Repudiandae rerum velit modi et officia quasi facilis'}
                                description1={'Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et'}
                                subTitle2={'Incidunt non veritatis illum ea ut nisi'}
                                description2={'Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.'}
                                />)
                                setActive('#4154f1 ')
                                setActive2('#012970')
                                setActive3('#012970')
                            }} 
                        style={{color: active}}>SAEPE FUGA</div>
                        <div onClick={()=>{
                            setPara(
                                <FeatureDetails 
                                title={'Second feature inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.'}
                                subTitle1={'Second rerum velit modi et officia quasi facilis'}
                                description1={'Second omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et'}
                                subTitle2={'Second non veritatis illum ea ut nisi'}
                                description2={'Second quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.'}
                                />
                            )
                            setActive2('#4154f1 ')
                            setActive('#012970')
                            setActive3('#012970')
                        }}
                        style={{color: active2}}>VOLUPTATES</div>
                        <div onClick={()=>{
                            setPara(
                                <FeatureDetails 
                                title={'Third feature inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.'}
                                subTitle1={'Third  rerum velit modi et officia quasi facilis'}
                                description1={'Third omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et'}
                                subTitle2={'Third non veritatis illum ea ut nisi'}
                                description2={'Third quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.'}
                                />
                            )
                            setActive3('#4154f1 ')
                            setActive('#012970')
                            setActive2('#012970')
                        }}
                        style={{color: active3}}>CORRUPTI</div>
                    </div>
                    <hr />
                    <p>{para}</p>
                </div>
            </Col>
            <Col data-aos="zoom-in" data-aos-duration="1500" lg='6' className="d-flex justify-content-center align-items-center mt-lg-0 mt-5">
                <img className="w-100" src={img1} alt="" />
            </Col>
        </Row>
        {/* End second section in features  */}
        {/* start third section in features  */}
            {/* <h2 className="text-center fw-bold mb-5" style={{color:'#012970'}}>Ratione mollitia eos ab laudantium rerum beatae quo</h2> */}
            <SectionTitle title={'Ratione mollitia eos ab laudantium rerum beatae quo'}/>
            <Row className="mx-0">
                <Col   lg='4'>
                    <img data-aos="zoom-in"  data-aos-duration="1500" className="w-100" src={img2} alt="" />
                </Col>
                <Col lg='8' className="d-block d-lg-flex flex-wrap mt-lg-0 mt-5 justify-content-between ps-5">
                    {
                        feature3.map((e,i)=>{
                            return(
                                <>
                                <Feature3 key={i} icon={e.icon} title={e.title} description={e.description} aosDelay={e.aosDelay}/>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
        {/* End third section in features  */}

    </Container>
    </>
  )
}

export default Features