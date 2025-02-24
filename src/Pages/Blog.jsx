import { Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/img/blog/blog-1.jpg";
import img2 from "../assets/img/blog/blog-2.jpg";
import img3 from "../assets/img/blog/blog-3.jpg";
import img4 from "../assets/img/blog/blog-4.jpg";
import BlogCard from "../Components/BolgPageComponents/BlogCard";
import { IoSearchSharp } from "react-icons/io5";
import BlogCategory from "../Components/BolgPageComponents/BlogCategory";
import postImg1 from "../assets/img/blog/blog-recent-1.jpg";
import postImg2 from "../assets/img/blog/blog-recent-2.jpg";
import postImg3 from "../assets/img/blog/blog-recent-3.jpg";
import postImg4 from "../assets/img/blog/blog-recent-4.jpg";
import postImg5 from "../assets/img/blog/blog-recent-5.jpg";
import RecentPosts from "../Components/BolgPageComponents/RecentPosts";
import BlogTag from "../Components/BolgPageComponents/BlogTag";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Blog() {
  const [BlogCardData, setBlogCardData] = useState([]);
  useEffect(() => {
    axios.get("/api/posts").then((res) => {
      setBlogCardData(res.data);
    });
  });
  // const BlogCardData = [
  //   {
  //     img: img1,
  //     title:
  //       "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia",
  //     bloger: "John Doe",
  //     date: "jan 1 , 2020",
  //     comments: "12 Comments",
  //     description:
  //       "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.",
  //   },
  //   {
  //     img: img2,
  //     title:
  //       "Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.",
  //     bloger: "Bill nove",
  //     date: "Feb 12,2020 ",
  //     comments: "20 Comments",
  //     description:
  //       "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.",
  //   },
  //   {
  //     img: img3,
  //     title:
  //       "Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.",
  //     bloger: "Roy jeda",
  //     date: "Oct 5, 2020",
  //     comments: "10 Comments",
  //     description:
  //       "Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.",
  //   },
  //   {
  //     img: img4,
  //     title:
  //       "Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.",
  //     bloger: "Jena Ferd",
  //     date: "Des 5, 2020",
  //     comments: "10 Comments",
  //     description:
  //       "Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.",
  //   },
  // ];
  const blogCategoryData = [
    {
      label: "General",
      number: "25",
    },
    {
      label: "LifeStyle",
      number: "12",
    },
    {
      label: "Travel",
      number: "5",
    },
    {
      label: "Design",
      number: "22",
    },
    {
      label: "Creative",
      number: "8",
    },
    {
      label: "Education",
      number: "14",
    },
  ];
  const recentPostsData = [
    {
      postImg: postImg1,
      title: "Nihil blanditiis at in nihil autem",
      date: "Jan 1, 2020",
    },
    {
      postImg: postImg2,
      title: "Quidem autem et impedit",
      date: "Jan 1, 2020",
    },
    {
      postImg: postImg3,
      title: "Id quia et et ut maxime similique occaecati ut",
      date: "Jan 1, 2020",
    },
    {
      postImg: postImg4,
      title: "Laborum corporis quo dara net para",
      date: "Jan 1, 2020",
    },
    {
      postImg: postImg5,
      title: "Et dolores corrupti quae illo quod dolor",
      date: "Jan 1, 2020",
    },
  ];
  const blogTagsData = [
    {
      title: "App",
    },
    {
      title: "IT",
    },
    {
      title: "Business",
    },
    {
      title: "Mac",
    },
    {
      title: "Design",
    },
    {
      title: "Office",
    },
    {
      title: "Creative",
    },
    {
      title: "Studio",
    },
    {
      title: "Smart",
    },
    {
      title: "Tips",
    },
    {
      title: "Marketing",
    },
  ];
  const navigate = useNavigate();

  function Delete(id) {
    axios.delete(`/api/posts/${id}`).then(() => {
      window.location.reload();
    });
  }
  return (
    <>
      <div
        className="pb-1 pt-3 text-white"
        style={{ backgroundColor: "#012970", marginTop: "80px" }}
      >
        <Container>
          <p>
            Home <span> / </span> Blog
          </p>
          <h3>Blog</h3>
        </Container>
      </div>
      <Container>
        <Row className="mx-0 mt-5">
          <Col lg="8">
            {BlogCardData.map((e, i) => {
              return (
                <>
                  <BlogCard
                    key={i}
                    img={e.img}
                    title={e.title}
                    bloger={e.bloger}
                    date={e.date}
                    comments={e.comments}
                    description={e.description}
                    handleDelete={() => {
                      Delete(e.id);
                    }}
                    handleEdit={() => {
                      navigate(`/editPost/${e.id}`);
                    }}
                  />
                </>
              );
            })}
          </Col>
          <Col lg="4">
            <div className="px-4 py-3 shadow">
              <h4 style={{ color: "#012970", marginBottom: "15px" }}>Search</h4>
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2 w-75 "
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  style={{
                    backgroundColor: "#4154f1",
                    color: "#fff",
                    borderRadius: "6px",
                  }}
                  className="btn fs-5 "
                  type="button"
                  id="button-addon2"
                >
                  <IoSearchSharp />
                </button>
              </div>
              <h4
                style={{
                  color: "#012970",
                  marginTop: "30px",
                  marginBottom: "15px",
                }}
              >
                Categories
              </h4>
              {blogCategoryData.map((e, i) => {
                return (
                  <>
                    <BlogCategory key={i} label={e.label} number={e.number} />
                  </>
                );
              })}
              <h4
                style={{
                  color: "#012970",
                  marginBottom: "15px",
                  marginTop: "20px",
                }}
              >
                Recent Posts
              </h4>
              {recentPostsData.map((e, i) => {
                return (
                  <>
                    <RecentPosts
                      key={i}
                      postImg={e.postImg}
                      title={e.title}
                      date={e.date}
                    />
                  </>
                );
              })}
              <h4
                style={{
                  color: "#012970",
                  marginBottom: "15px",
                  marginTop: "20px",
                }}
              >
                Recent Posts
              </h4>
              <div className="d-flex flex-wrap justify-content- column-gap-4">
                {blogTagsData.map((e, i) => {
                  return (
                    <>
                      <BlogTag key={i} btnTitle={e.title} />
                    </>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blog;
