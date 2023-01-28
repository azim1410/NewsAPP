import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, url, date} = this.props;
        return (
            <div>
                <div className="card my-3 "  >
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text"><small className="textDate">Last updated on {date}</small></p>
                           
                            <p className="card-text">{description}</p>
                            <a href={url} className="btn">Read News</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem