import { Card, Col } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import "./PostCardStyle.css";
// import { Link } from "react-router-dom";

function PostCard({ img, date, title ,handleDelete}) {
  return (
    <>
      <Col lg="4">
        {/* <Link to="blogSingle" style={{textDecoration:'none'}}> */}
          <Card data-aos="zoom-in" data-aos-duration="1500" className="shadow mb-5">
            <img src={img} className="w-100" alt="" />
            <div className="px-4 py-5 lh-sm">
              <p
                style={{
                  color: "rgba(1, 41, 112, 0.6)",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {date}
              </p>
                <div style={{textDecoration:'none'}}>
              <p className="fs-4 fw-bold " style={{ color: "#012970" }}>
                {title}
              </p>
            </div>
              <div className="d-flex justify-content-between align-items-center pt-3">
                <button
                  className="text-start border-0 bg-light"
                  style={{ color: "#4154f1" }}
                >
                  Read More
                  <FaArrowRightLong className="ms-2 arrow" />
                </button>
                <button 
                className="btn btn-outline-danger px-3 py-1 border-0"
                onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </Card>
        {/* </Link> */}
      </Col>
    </>
  );
}

export default PostCard;
