
function BlogCategory({label,number}) {
  return (
    <>
    <div className="d-flex gap-2">
        <p style={{color:'#012970'}}>{label}</p>
        <p className="text-secondary">({number})</p>
    </div>
    </>
  )
}

export default BlogCategory