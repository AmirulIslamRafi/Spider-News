import React, { Component } from "react";
// import PropTypes from "prop-types";

export class NewsItem extends Component {
 
  // static propTypes = {};

  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <>
        <div className="card my-3" style={{width: "18rem"}}>
            <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body  p-5">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
               Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;



