import { Button, Container } from "react-bootstrap";
import "./AddPostStyle.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddPost() {
  const [id, setId] = useState("");
  const [bloger, setBloger] = useState("");
  const [comments, setComments] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [img,setImg]=useState('');
  const navigate = useNavigate();
  function handleAdd() {
    axios
      .post("http://localhost:3000/posts", {
        id: id,
        bloger: bloger,
        comments: comments,
        description: description,
        date: date,
        title: title,
        img: img,
      })
      .then((res) => {
        navigate("/blog");
      });
  }
  return (
    <>
      <div className="add-post" style={{ padding: "90px 0 50px 0" }}>
        <Container>
          {/* <input
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
            type="file"
            placeholder="Upload Image"
          /> */}
          <input type="text" 
          placeholder="Enter image url"
          onChange={(e) =>{
            setImg(e.target.value)
          }}/>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title"
          />
          <input
            onChange={(e) => {
              setBloger(e.target.value);
            }}
            type="text"
            placeholder="Bloger Name"
          />
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="text"
            placeholder="Date"
          />
          <input
            onChange={(e) => {
              setComments(e.target.value);
            }}
            type="text"
            placeholder="Comments"
          />
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="Description"
          />
          <input
            onChange={(e) => {
              setId(e.target.value);
            }}
            type="text"
            placeholder="ID"
          />
          <div className="d-flex justify-content-center mt-4">
            <Button onClick={handleAdd}>Add Post</Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AddPost;
