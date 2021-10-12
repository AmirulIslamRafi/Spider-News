import React, { Component } from "react";
// import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";

export class News extends Component {



  articles = [
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Jon Porter",
        "title": "Snap is taking action to address fentanyl dealing on Snapchat",
        "description": "Snapchat has announced a series of measures it’s taking to crack down on drug dealing on its platform. This includes a new Heads Up educational portal, as well as increasing investment in enforcement.",
        "url": "https://www.theverge.com/2021/10/7/22714100/snapchat-fentanyl-epidemic-drug-dealer-crackdown",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/XGtLrYZcf29Nn-dZ0uBd6CDalU0=/0x66:911x543/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22907032/Heads_Up_Triptych___cropped.jpg",
        "publishedAt": "2021-10-07T10:00:00Z",
        "content": "Following an investigation into drug dealing on Snapchat \r\nUsers will be directed to an educational portal if they search for certain keywords.\r\nImage: Snapchat\r\nSnapchat has announced a series of me… [+2641 chars]"
    },
    {
        "source": {
            "id": "abc-news-au",
            "name": "ABC News (AU)"
        },
        "author": "Kate Ainsworth",
        "title": "New national food allergy guidelines recommend education instead of bans",
        "description": "A new set of guidelines will bring national consistency for schools and child care centres in their management of allergies",
        "url": "http://www.abc.net.au/news/2021-10-07/food-allergy-guidelines-recommend-education-not-bans/100520428",
        "urlToImage": "https://live-production.wcms.abc-cdn.net.au/78241a11abce9460c9cb150494436bb6?impolicy=wcms_crop_resize&cropH=1862&cropW=3310&xPos=0&yPos=724&width=862&height=485",
        "publishedAt": "2021-10-07T04:45:30Z",
        "content": "New allergy guidelines have recommended removing blanket bans on foods from schools and child care centres in favour of greater education and awareness around allergies and anaphylaxis.\r\nKey points:\r… [+4882 chars]"
    },
    {
        "source": {
            "id": "google-news-ca",
            "name": "Google News (Canada)"
        },
        "author": null,
        "title": "Lebanon’s dark days: In Beirut, blackouts and economic collapse test families’ endurance",
        "description": "Forced to choose between generator power, food, medicine and education, Lebanese families are struggling through a worsening crisis",
        "url": "https://www.theglobeandmail.com/world/article-lebanons-dark-days-in-beirut-blackouts-and-economic-collapse-test/",
        "urlToImage": "https://www.theglobeandmail.com/resizer/qob40V8-Ptmetjrb9OmbB2vjVmw=/1200x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/FGTL3RPFHREPPKD7BRLW76ZLTY.JPG",
        "publishedAt": "2021-10-07T00:06:47+00:00",
        "content": "Helene Gergi stands by the window at her candlelit apartment in central Beirut, where power is only intermittently available, usually for two- to four-hour periods. \r\nPhotography by Hasan Shaaban/The… [+10661 chars]"
    },
    {
        "source": {
            "id": "msnbc",
            "name": "MSNBC"
        },
        "author": "MSNBC",
        "title": "DeSantis' office says salaries of officials who require masks for students may be withheld",
        "description": "The office of Florida Gov. Ron DeSantis said the state board of education could withhold salaries from school superintendents and others who require masks for all.",
        "url": "https://www.nbcnews.com/news/us-news/salaries-florida-school-superintendents-who-impose-mask-rules-risk-desantis-n1276387",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_20/3476544/210520-ron-desantis-jm-2326.jpg",
        "publishedAt": "2021-08-10T02:09:00Z",
        "content": "Florida school superintendents who require masks for students without giving them a way to opt out could have their salaries withheld, Florida Gov. Ron DeSantis' office said Monday\r\nDeSantis last wee… [+3631 chars]"
    },
    {
        "source": {
            "id": "newsweek",
            "name": "Newsweek"
        },
        "author": null,
        "title": "The Best Maker School List 2021",
        "description": "This year for the first time Newsweek has teamed up with Make: to find The Best Maker Schools in Higher Education.",
        "url": "https://www.newsweek.com/best-maker-school-list-2021",
        "urlToImage": "https://d.newsweek.com/en/full/1859127/best-maker-school-list-2021.jpg",
        "publishedAt": "2021-08-04T19:22:26Z",
        "content": "The maker movement and its do-it-yourself ethic has come to higher education. For years now, empowered by the internet, inventors, artisans, tinkerers and hackers of all descriptions have been coming… [+1842 chars]"
    }
]
constructor(){
  super();
  // console.log('I am the constructor of News');
  this.state ={
    date: new Date()
  };
  this.news = {
    articles: this.articles,
    loading: false
  }
}
componentDidMount(){
  console.log('cdm console')
}

// static propTypes = {
  
  // }
  
  render() {
    console.log('Render')
    return (
      <div className="container my-4">
        <h1>SpiderNews - Education News</h1>
        <p>{this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()} (Bangladesh) </p>
        <div className="row">


        {this.news.articles.map((element)=>{

          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title.slice(0,35)} description ={element.description.slice(0,88)} imgUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })} 
          
        </div>
      </div>
    );
  }
}

export default News;
