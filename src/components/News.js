import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export class News extends Component {
  articles =
    [
      {
        "source": { "id": null, "name": "BBC News" },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Tanks for Ukraine: Polish PM urges German bravery on Leopard 2 decision - BBC",
        "description": "The request comes as Germany says allies can train Ukrainian troops on Leopard tanks.",
        "url": "https://www.bbc.com/news/world-europe-64385210",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A35A/production/_128381814_gettyimages-1437048297.jpg",
        "publishedAt": "2023-01-24T16:22:03Z",
        "content": "Poland has officially asked Germany for permission to export a host of Leopard 2 battle tanks to Ukraine, ${this.props.country} a move which raises pressure on Berlin.\r\nThe German government told the BBC it had receive… [+2546 chars]"
      },
      {
        "source": { "id": "abc-news", "name": "ABC News" },
        "author": "Teddy Grant, Bill Hutchinson",
        "title": "2023 'Doomsday Clock' moved 10 seconds closer to catastrophe - ABC News",
        "description": "The announcement is the first since Russia's invasion of Ukraine.",
        "url": "https://abcnews.go.com/US/2023-doomsday-clock-announcement-expect/story?id=96495463",
        "urlToImage": "https://s.abcnews.com/images/US/doomsday-clock-unveil-ht-ps-22014_1674573534713_hpMain_16x9_992.jpg",
        "publishedAt": "2023-01-24T16:18:45Z",
        "content": "Scientists revealed on Tuesday that the \"Doomsday Clock\" has been moved up to 90 seconds before midnight -- the closest humanity has ever been to armageddon.\r\nBulletin of the Atomic Scientists moved … [+3948 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Holly Yan, Aya Elamroussi",
        "title": "7 killed ${this.props.country} Half Moon Bay as California is shocked by 3 mass shootings ${this.props.country} 44 hours - CNN",
        "description": "As Californians grapple with three deadly mass shootings over three days, investigators near San Francisco are trying to figure out why a 66-year-old man may have killed seven people ${this.props.country} a massacre that has devastated the Asian American community once again.",
        "url": "https://www.cnn.com/2023/01/24/us/half-moon-bay-california-shootings-tuesday/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230124112717-half-moon-bay-shooting-0124.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-01-24T16:16:00Z",
        "content": "As Californians grapple with three deadly mass shootings over three days, investigators near San Francisco are trying to figure out why a 66-year-old man may have killed seven people ${this.props.country} a massacre th… [+4396 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Nicole Goodkind",
        "title": "Trading briefly halted for many New York Stock Exchange-listed stocks - CNN",
        "description": "Trading for dozens of companies on the New York Stock Exchange was briefly halted Tuesday just after the market opened.",
        "url": "https://www.cnn.com/2023/01/24/investing/nyse-halt-stocks/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230124094619-nyse-011923.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-01-24T16:10:00Z",
        "content": "Trading for dozens of companies on the New York Stock Exchange was briefly halted Tuesday just after the market opened. \r\nMajor names impacted included Verizon, McDonalds, Morgan Stanley, AT&amp;T an… [+1266 chars]"
      },
      {
        "source": { "id": null, "name": "The Guardian" },
        "author": "Isobel Koshiw",
        "title": "Zelenskiy ramps up anti-corruption drive as 15 Ukrainian officials exit - The Guardian",
        "description": "Key officials have been dismissed or resigned since Saturday, with six facing corruption allegations",
        "url": "https://www.theguardian.com/world/2023/jan/24/zelenskiy-anti-corruption-drive-15-ukrainian-officials-exit",
        "urlToImage": "https://i.guim.co.uk/img/media/df51c18d662004fc5a8090caebb67e9f9464dd5e/79_0_2247_1350/master/2247.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f566e086f5d918e44ecf52e559caf420",
        "publishedAt": "2023-01-24T15:22:00Z",
        "content": "A number of Ukrainian officials have been dismissed or resigned over the last four days amid corruption allegations as Ukraines president, Volodymyr Zelenskiy, attempts to take a zero-tolerance appro… [+5859 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Lisa Respers France",
        "title": "'Everything Everywhere All at Once' leads Oscar nominations with 11 - CNN",
        "description": "The strange and sentimental film \"Everything Everywhere All at Once\" led among the films nominated for the 95th Academy Awards on Tuesday, scoring 11 nominations. \"All Quiet on the Western Front\" and \"The Banshees of Inisherin\" followed with nine nominations …",
        "url": "https://www.cnn.com/2023/01/24/entertainment/oscar-nominations-list-2023/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/210425223946-oscars.jpg?q=x_3,y_267,h_1684,w_2993,c_crop/w_800",
        "publishedAt": "2023-01-24T15:22:00Z",
        "content": "The strange and sentimental film Everything Everywhere All at Once led among the films nominated for the 95th Academy Awards on Tuesday, scoring 11 nominations. All Quiet on the Western Front and The… [+4284 chars]"
      },
      {
        "source": { "id": null, "name": "ESPN" },
        "author": "Mike Reiss",
        "title": "Sources - Bill O'Brien returns to New England Patriots as OC - ESPN",
        "description": "Bill O'Brien will return to the Patriots after agreeing to a deal Tuesday to become New England's next offensive coordinator, sources told ESPN's Adam Schefter and Chris Low.",
        "url": "https://www.espn.com/nfl/story/_/id/35516310/sources-bill-obrien-returns-new-england-patriots-oc",
        "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1205%2Fr946931_1296x729_16%2D9.jpg",
        "publishedAt": "2023-01-24T14:34:08Z",
        "content": "FOXBOROUGH, Mass. -- Bill O'Brien will return to the New England Patriots after agreeing to a deal Tuesday to become their next offensive coordinator, sources told ESPN's Adam Schefter and Chris Low.… [+2670 chars]"
      },
      
      // { "source": { "id": "techcrunch", "name": "TechCrunch" }, "author": "Natasha Lomas", "title": "Elon Musk's Twitter hit with holocaust denial hate speech lawsuit ${this.props.country} Germany", "description": "Twitter owner and self-proclaimed \"free speech absolutist\", Elon Musk, is facing a legal challenge ${this.props.country} Germany over how the platform deals with antisemitic hate speech.", "url": "https://techcrunch.com/2023/01/25/elon-musk-twitter-antisemitic-hate-speech-lawsuit-germany/", "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/elon-musk-thinks-twitter.jpg?resize=1200,645", "publishedAt": "2023-01-25T17:15:58Z", "content": "Twitter owner and self-proclaimed “free speech absolutist“, Elon Musk, is facing a legal challenge ${this.props.country} Germany over how the platform handles antisemitic hate speech.\r\nThe lawsuit, which was filed yest… [+12039 chars]" }, { "source": { "id": "techcrunch", "name": "TechCrunch" }, "author": "Lauren Forristal", "title": "Valiant Hearts mobile game sequel is set to launch on Netflix Games on Jan 31", "description": "The mobile game Valiant Hearts: Coming Home by Ubisoft will launch exclusively on Netflix Games on January 31.", "url": "https://techcrunch.com/2023/01/25/valiant-hearts-mobile-game-launches-on-netflix-games-on-jan-31/", "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/01/Screen-Shot-2023-01-25-at-12.05.39-PM.png?resize=1200,644", "publishedAt": "2023-01-25T17:13:58Z", "content": "The mobile game Valiant Hearts: Coming Home by Ubisoft will launch exclusively on Netflix Games on January 31.\r\nPreviously announced ${this.props.country} September 2022, Netflix and Ubisoft announced the official rele… [+1851 chars]" }, { "source": { "id": "techcrunch", "name": "TechCrunch" }, "author": "Sarah Perez", "title": "App downloads were stagnant ${this.props.country} the fourth quarter, new analysis finds", "description": "The global app economy slowed for the first time last year, as consumer spending on apps dropped 2% to $167 billion, according to a recent annual report put out by data.ai. At the same time, downloads were up 11% year-over-year — a seemingly positive indicati…", "url": "https://techcrunch.com/2023/01/25/app-downloads-were-stagnant-${this.props.country}-the-fourth-quarter-new-analysis-finds/", "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/app-store-ios-2022.jpg?resize=1200,675", "publishedAt": "2023-01-25T16:39:39Z", "content": "The global app economy slowed for the first time last year, as consumer spending on apps dropped 2% to $167 billion, according to a recent annual report put out by data.ai. At the same time, download… [+5689 chars]" }, { "source": { "id": "techcrunch", "name": "TechCrunch" }, "author": "Anna Heim", "title": "The rise of product-led sales, or why product-led growth requires a sales makeover", "description": "When the customer relationship starts with the product rather than ending with it, what does it mean for sales teams?", "url": "https://techcrunch.com/2023/01/25/the-rise-of-product-led-sales-or-why-product-led-growth-requires-a-sales-makeover/", "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/GettyImages-652146145.jpg?resize=1200,851", "publishedAt": "2023-01-25T16:25:05Z", "content": "B2B is looking a lot more than B2C these days: From Figma to Slack, individuals and teams can sign up for tools that their entire organization will end up adopting. This concept is also known as prod… [+804 chars]" }, { "source": { "id": "techcrunch", "name": "TechCrunch" }, "author": "Aisha Malik", "title": "Fortnite on iOS and Google Play will be 18+ starting on January 30", "description": "Starting January 30, v13.40 of Fortnite on iOS and Google Play will become unavailable to players under 18, Epic Games has announced.", "url": "https://techcrunch.com/2023/01/25/fortnite-on-ios-and-google-play-will-be-18-starting-on-january-30/", "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/08/epic-fortnite-GettyImages-1149627286.jpg?resize=1200,800", "publishedAt": "2023-01-25T16:17:05Z", "content": "Starting January 30, v13.40 of Fortnite on iOS and Google Play will become unavailable to players under 18, Epic Games has announced. Although Fortnite was removed from the iOS, macOS and Google Play… [+2061 chars]" }, { "source": { "id": "techcrunch", "name": "TechCrunch" }, "author": "Ram Iyer", "title": "Dear Sophie: How do I change my L-1B to an H-1B through the lottery?", "description": "Can I change my L-1B visa to an H-1B with a different company? I understand that L visas restrict you to working only with the issuing company.", "url": "https://techcrunch.com/2023/01/25/dear-sophie-how-do-i-change-my-l-1b-to-an-h-1b-through-the-lottery/", "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/01/dear-sophie-immigration-maze-3.jpg?resize=1200,675", "publishedAt": "2023-01-25T13:52:56Z", "content": "More posts by this contributor\r\nHere’s another edition of “Dear Sophie,” the advice column that answers immigration-related questions about working at technology companies.\r\n“Your questions are vital… [+2202 chars]" }, { "source": { "id": "techcrunch", "name": "TechCrunch" }, "author": "Ingrid Lunden", "title": "After inking its OpenAI deal, Shutterstock rolls out a generative AI toolkit to create images based on text prompts", "description": "Customers of Shutterstock's Creative Flow online design platform will now be able to create images based on text prompts, powered by OpenAI and Dall-E 2", "url": "https://techcrunch.com/2023/01/25/after-inking-its-openai-deal-shutterstock-rolls-out-a-generative-ai-toolkit-to-create-images-based-on-text-prompts/", "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/01/shutterstock-ai.jpg?resize=1200,709", "publishedAt": "2023-01-25T12:55:13Z", "content": "When Shutterstock and OpenAI announced a partnership to help develop OpenAI’s Dall-E 2 artificial intelligence image-generating platform with Shutterstock libraries to train and feed the algorithm, t… [+3859 chars]" }, { "source": { "id": "techcrunch", "name": "TechCrunch" }, "author": "Frederic Lardinois", "title": "Google's Flutter showcases new graphics capabilities, WebAssembly and RISC-V support", "description": "Flutter, Google's framework for building multi-platform apps, is showcasing its latest updates at its Flutter Forward event today.", "url": "https://techcrunch.com/2023/01/25/googles-flutter-showcases-new-graphics-capabilities-webassembly-and-risc-v-support/", "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/01/Untitled-21.png?resize=1200,842", "publishedAt": "2023-01-25T06:23:01Z", "content": "Flutter, Google’s open-source framework for building multi-platform apps for mobile, web and desktop, is hosting its Flutter Forward event ${this.props.country} Nairobi, Kenya today. As the name implies, the team is us… [+4766 chars]" }, { "source": { "id": "techcrunch", "name": "TechCrunch" }, "author": "Natasha Mascarenhas", "title": "All is fair ${this.props.country} love and moderation", "description": "Equity's Natasha Mascarenhas interviews Sarah Oh, Twitter's former Human Rights advisor and the co-founder of T2.", "url": "https://techcrunch.com/2023/01/25/twitter-t2-human-rights-and-future-of-trust/", "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/07/equity-podcast-2019-phone.jpg?resize=1200,675", "publishedAt": "2023-01-25T02:39:37Z", "content": "Hello and welcome back to Equity, a podcast about the ${this.props.category} of startups, where we unpack the numbers and nuance behind the headlines.\r\nThis is our Wednesday show, where we niche down to a single p… [+1046 chars]" }, { "source": { "id": "techcrunch", "name": "TechCrunch" }, "author": "Kyle Wiggers", "title": "Crowdbotics raises $40M to help devs build apps from modular code", "description": "Crowdbotics, a startup building a platform based around the idea of modular code packages, has raised $40 million ${this.props.country} fresh funding.", "url": "https://techcrunch.com/2023/01/25/crowdbotics-raises-40m-to-help-devs-build-apps-from-modular-code/", "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/GettyImages-1346698461-1.jpg?resize=1200,800", "publishedAt": "2023-01-20T05:07:36Z", "content": "Crowdbotics, a software development platform with a library of prebuilt app architectures, today announced that it raised $40 million ${this.props.country} a Series B round led by NEA with participation from Homebrew, … [+4879 chars]" }
    ]

  static defaultProps = {
    country: '${this.props.country}',
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    
  }

  constructor() {
    super();
    console.log("this is constructer")
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1

    }
  }

  async componentDidMount() {
    console.log("cdm");
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=879682ed52824f7f800f0c13878a07d9&page=1pageSize=20`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(80);
    this.setState({ articles: parsedData.articles })
    this.props.setProgress(100);
  }

  handlePrevClick = async () => {
    console.log("prev");
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=879682ed52824f7f800f0c13878a07d9&page=${this.state.page - 1}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(70);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
    this.props.setProgress(100);


  }
  handleNextClick = async () => {
    console.log("next");
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=879682ed52824f7f800f0c13878a07d9&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(60);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
    this.props.setProgress(100);

  }
  // handleCountryIndia = async()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1pageSize=20`
  // }
  // handleCountryUSA = async()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1pageSize=20`
  // }


  render() {
    return (
      <div className='container' my-3 >
        <h1 className="text-center">Top Headings</h1>
        
        <div className='row'>
          {this.state.articles.map((element) => {
            return <div className='col-md-3' key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} url={element.url} date={element.publishedAt.slice(0, 10)} />
            </div>

          })}


        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" class="btnd btn-light" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" class="btnd btn-light" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
        <br />

      </div>
    )
  }
}

export default News