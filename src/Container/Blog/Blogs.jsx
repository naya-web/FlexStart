import { Button, Container, Row } from "react-bootstrap";
import PostCard from "../../Components/PostsComponents/PostCard";
import SectionTitle from "../../Components/allComponents/SectionTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    axios.get("/api/posts").then((res) => {
      setCardData(res.data);
    });
  });

  function Delete(id) {
    axios.delete(`/api/posts/${id}`).then(() => {
      window.location.reload();
    });
  }

  return (
    <>
      <Container className="py-5">
        <SectionTitle
          titleName={"BLOG"}
          titleDescription={"Recent posts form our Blog"}
        />
        <Row className="mx-0 my-5 blog">
          {cardData.map((e, i) => {
            return (
              <>
                <PostCard
                  handleDelete={() => {
                    Delete(e.id);
                  }}
                  key={i}
                  img={e.img}
                  date={e.date}
                  title={e.title}
                />
              </>
            );
          })}
        </Row>
        <div className="text-center">
          <Button
            onClick={() => {
              navigate("/addpost");
            }}
          >
            Add Post
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Blogs;
