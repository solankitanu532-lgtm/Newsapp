
const NewsItem =(props)=> {
    let {title, description,url,newsUrl ,author,date ,source} = props;
    return (
      <div className="my-3">
          <div className="card" style={{display:"contents"}}>
            <div style={{ display:"flex", justifyContent : "flex-end", postion: "absolute", right:"0"
             }}>
            <span className="badge rounded-pill bg-danger">{source}
                 </span></div>
                <img src={!url?"https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":url} className="card-img-top" alt="..."/>
                <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author?"unknown": author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  }
export default NewsItem
