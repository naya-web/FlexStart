// import React from 'react'

function SectionTitle({titleDescription,titleName}) {
  return (
    <>
    <p className="text-center" style={{color:'#4154f1',fontSize:'15px'}}>{titleName}</p>
    <h2 className="text-center fw-bold mb-5" style={{color:'#012970'}}>{titleDescription}</h2>
    </>
  )
}

export default SectionTitle