import React, { Component } from 'react'
export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, publishedAt, author, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text" style={{opacity: 0.7}}> by {!author?"unkonwn": author} on {publishedAt}</p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  } 
}

export default NewsItem
