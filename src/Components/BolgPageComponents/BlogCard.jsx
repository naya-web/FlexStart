import { Button } from "react-bootstrap"
import { IoPersonOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { FaRegCommentDots } from "react-icons/fa6";


function BlogCard({img,title,bloger,date,comments,description,handleDelete,handleEdit}) {
  return (
    <>
    <div className="shadow w-100 mb-5">
        <img src={img} className="w-100 " alt="" />
        <div className="p-4">
            <h4 style={{color:'#012970',fontWeight:'bold'}}>{title}</h4>
            <div className="d-flex gap-5 py-3">
                <div>
                    <i><IoPersonOutline style={{color:'#4084fd',fontSize:'16px',marginBottom:'7px'}}/></i>
                    <span style={{color:'#777777',paddingLeft:'10px'}}>{bloger}</span>
                </div>
                <div>
                    <i><GoClock style={{color:'#4084fd',fontSize:'16px'}}/></i>
                    <span style={{color:'#777777',paddingLeft:'10px'}}>{date}</span>
                </div>
                <div>
                    <i><FaRegCommentDots style={{color:'#4084fd',fontSize:'16px',marginBottom:'7px'}}/></i>
                    <span style={{color:'#777777',paddingLeft:'10px'}}>{comments}</span>
                </div>
            </div>
            <p style={{color:'#444444'}}>{description}</p>
            <div className="d-flex justify-content-end pt-3">
                <Button className="px-4 py-2" 
                style={{backgroundColor:'#4154f1',fontSize:'14px'}}
                onClick={handleEdit}>Edit</Button>
                <Button 
                className="px-5 py-2 ms-3" 
                style={{backgroundColor:'#d71d1d',fontSize:'14px',border:'none'}}
                onClick={handleDelete}>Delete</Button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default BlogCard