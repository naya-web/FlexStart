
function RecentPosts({postImg,title,date}) {
  return (
    <>
    <div className="d-flex justify-content-between">
        <div className="mb-4" style={{width:'34%'}}>
            <img src={postImg} className="w-100" alt="" />
        </div>
        <div className="bg-" style={{width:'62%',fontSize:'16px'}}>
            <p className="  mb-1" style={{color:"#012970",fontWeight:'bold'}}>{title}</p>
            <p className="text-secondary " style={{fontSize:'14px',fontStyle:'italic'}}>{date}</p>
        </div>
    </div>
    </>
  )
}

export default RecentPosts