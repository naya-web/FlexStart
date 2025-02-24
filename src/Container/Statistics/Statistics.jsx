// import React from 'react'

import { Container, Row } from "react-bootstrap"
import StatsBox from "../../Components/StatisticsComponent/StatsBox"
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BsJournalRichtext } from "react-icons/bs";
import { MdHeadsetMic } from "react-icons/md";
import { BsPeople } from "react-icons/bs";




function statistics() {
    const boxData=[
        {
            icon: <HiOutlineEmojiHappy />            ,
            number:'232',
            description:'Happy Clients',
            color:'blue',
            dataAos: "fade-down",
        },
        {
            icon: <BsJournalRichtext />            ,
            number:'521',
            description:'Projects',
            color:'red',
            dataAos: "fade-down",
        },
        {
            icon: <MdHeadsetMic />,
            number:'1463',
            description:'Hours Of Support',
            color:'green',
            dataAos: "fade-up",
        },
        {
            icon: <BsPeople />,
            number:'15',
            description:'Hard worker',
            color:'#bb0852',
            dataAos: "fade-up",
        },
    ]
  return (
    <>
    <Container className="py-5 mt-5">
        <Row className="mx-0">
            {
                boxData.map((e,i)=>{
                    return(
                        <>
                        <StatsBox key={i} icon={e.icon} boxNum={e.number} boxDescription={e.description} color={e.color} dataAos={e.dataAos}/>
                        </>
                    )
                })
            }
            {/* <StatsBox/> */}
        </Row>
    </Container>
    </>
  )
}

export default statistics