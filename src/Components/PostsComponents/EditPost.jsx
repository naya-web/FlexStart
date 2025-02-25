import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditPostStyle.css"; 
 
function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`/api/posts/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  const [editData, setEditData] = useState({
    img: "",
    title: "",
    bloger: "",
    date: "",
    comments: "",
    description: "",
  });
  function handleChange(e) {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  }
  function handleEdit() {
    axios
      .put(`/api/posts/${id}`, {
        img: editData.img,
        title: editData.title,
        bloger: editData.bloger,
        date: editData.date,
        comments: editData.comments,
        description: editData.description,
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/blog");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div
        className="edit d-flex justify-content-center align-items-center "
        style={{ padding: "120px 0 50px 0" }}
      >
        <div className=" w-100">
          <input
            type="text"
            name="img"
            onChange={handleChange}
            placeholder={data.img}
          />
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder={data.title}
          />
          <input
            type="text"
            name="bloger"
            onChange={handleChange}
            placeholder={data.bloger}
          />
          <input
            type="text"
            name="date"
            onChange={handleChange}
            placeholder={data.date}
          />
          <input
            type="text"
            name="comments"
            onChange={handleChange}
            placeholder={data.comments}
          />
          <input
            type="text"
            name="description"
            onChange={handleChange}
            placeholder={data.description}
          />
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary px-5 mt-4 rounded-pill"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPost;
