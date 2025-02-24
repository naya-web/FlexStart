import { Container } from "react-bootstrap"
import SectionTitle from "../../Components/allComponents/SectionTitle"

function NewsLetter() {
    return (
        <>
        <div style={{backgroundColor:'#F6F9FF'}}>
            <Container className="py-5 ">
                <SectionTitle titleDescription={'Our Newsletter'}/>
                <p className="text-center mb-5" style={{marginTop:'-40px'}}> Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <div className="input-group w-50 mx-auto d-flex flex-column flex-lg-row">
                    <input type="text"  className="form-control py-2 w-75 " aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button style={{backgroundColor:'#4154f1',color:'#fff',borderRadius:'6px'}} className="btn fs- py-2 px-4 " type="button" id="button-addon2">Subscribe</button>
                </div>
            </Container>
        </div>
        
        </>
    )
}

export default NewsLetter