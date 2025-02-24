
function ContactInfo({icon,title,description1,description2}) {
  return (
    <>
    <div data-aos="fade-up" data-aos-duration="1500" className="py-4 px-4 m-2 lh-1 "  style={{color:'#444444',backgroundColor:'#fafbff',minWidth:'250px'}}>
        <i style={{color:'#4154f1',fontSize:'35px'}}>{icon}</i>
        <p className="fw-bold mt-4 fs-5" style={{color:'#012970'}}>{title}</p>
        <p style={{fontSize:'14px'}}>{description1}</p>
        <p style={{fontSize:'14px'}}>{description2}</p>
    </div>
    </>
  )
}

export default ContactInfo