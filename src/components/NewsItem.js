import React  from 'react'

const NewsItem=(props)=> {
  
  
    let { title, description,imageUrl,newsUrl,author,date } = props;
    return (
      <div className="container my-3" style={{marginTop:'80px'}}>
        
        <div className="card" >
          <img src={!imageUrl?"https://i.pinimg.com/originals/26/99/81/2699815cc29b5b98a544f87ef54fa192.png":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on { new  Date(date).toTimeString()}</small></p>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
