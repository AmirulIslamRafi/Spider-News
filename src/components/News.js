import React, { Component } from "react";
import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import Spiner from './Spiner'

export class News extends Component {
static defaultProps = {
  country:'',
  pageSize: 6,
  category: 'general'
}
  
  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired
    }
  constructor(){
    super();
  // console.log('I am the constructor of News');
  // this.time ={
  //   date: new Date()
  // };
  this.state = {
    articles: [],
    loading: false,
    date: new Date(),
    page:1
  }
}
async componentDidMount(){
  // console.log('cdm console')
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=${this.props.language}&apiKey=6fea94ab7084404cb7d93464ebd77842&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parsedData = await data.json();
  // console.log(parsedData);
  this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading: false});

}

handlePrevClick = async ()=>{
  // console.log('this is handlePreviousClick')
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=${this.props.language}&apiKey=6fea94ab7084404cb7d93464ebd77842&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles,
    loading: false
  })
}
handleNextClick = async ()=>{
  // console.log('This is handleNextClick')
  if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
    
  
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=${this.props.language}&apiKey=6fea94ab7084404cb7d93464ebd77842&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({page: this.state.page + 1,
    articles: parsedData.articles,loading: false})
}
}
  render() {
    // console.log('Render')
    return (
      <div className="container my-5">
          <div className="cotainer" style={{marginTop: "80px"}}>
            <h1 className="text-center my-3">SpiderNews - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h1>
        <p className="text-center">{this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()} (Bangladesh) </p>
        </div>

        {this.state.loading && <Spiner/>}
        <div className="row">


        {!this.state.loading && this.state.articles.map((element)=>{

          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title:""} description ={element.description?element.description: ""} imgUrl={!element.urlToImage?"https://media.istockphoto.com/photos/news-sign-on-wall-picture-id1294294064?b=1&k=20&m=1294294064&s=170667a&w=0&h=2A1-Cr76gN_iVS0nYS0AY2ozi9CEuNLt3DMRV__LxnY=":element.urlToImage} newsUrl={element.url}/>
        </div>
        })} 
          
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
