"use strict"


/*******************************************************************************
* Article class                                                                *
*******************************************************************************/
class Article {
  constructor({ id, lead, time, title, compilations, attachment }) {
    this.id = id;

    this.listEl = document.createElement( "p" );
    this.listEl.textContent = `${time} ${title}`;

    this.articleEl = document.createElement( "article" );
    const titleEl  = document.createElement( "h2"      );
    const infoEl   = document.createElement( "p"       );
    const leadEl   = document.createElement( "p"       );
    const imageEl  = document.createElement( "img"     );

    this.articleEl.textContent = "";
    titleEl.textContent = title;
    leadEl.innerHTML    = lead;
    leadEl.innerHTML    = leadEl.textContent;
    infoEl.textContent  = `${time}`;

    if ( compilations )
      infoEl.textContent += ` ${compilations[0].title}`;

    this.articleEl.append( titleEl );
    this.articleEl.append( infoEl );

    if ( attachment ) {
      imageEl.src = attachment.image;
      this.articleEl.append( imageEl );
    }

    this.articleEl.append( leadEl );
  }

  select()   { this.listEl.classList.add(    "selected" ); }
  unselect() { this.listEl.classList.remove( "selected" ); }
}


/*******************************************************************************
* ArticleList class                                                            *
*******************************************************************************/
class ArticleList {
  constructor() {
    this.articles = [];
    this.selected = 0;

    this.articlesEl = document.createElement( "div" );
    this.articlesEl.classList.add( "articles" );
    document.body.append( this.articlesEl );

    this.viewEl = document.createElement( "article" );
    this.viewEl.classList.add( "view" );
    document.body.append( this.viewEl );
  }

  get length() { return this.articles.length }

  push({ messages }) {
    messages.forEach( article => {
      if ( !this.articles.find( a => a.id === article.id ) )
        this.articles.push( new Article( article ));
    });

    this.articlesEl.textContent = "";
    this.articles.forEach( article => this.articlesEl.append( article.listEl ) );
    this.selectFirst();
  }

  selectFirst() { this.select( 0 ); };
  selectLast()  { this.select( this.length - 1 ); };
  selectNext()  { this.select( this.selected + 1 ); };
  selectPrev()  { this.select( this.selected - 1 ); };

  select( next ) {
    this.articles[ this.selected ].unselect();

    this.selected = next;

    if ( this.selected < 0 ) this.selected = 0;
    if ( this.selected > this.length - 1 ) this.selected = this.length - 1;

    this.articles[ this.selected ].select();

    this.viewEl.textContent = "";
    this.viewEl.append( this.articles[ this.selected ].articleEl );
  }
}


/*******************************************************************************
* server sent event source                                                     *
*******************************************************************************/
const url = "https://nrkno-ssenotifier.nrk.no/sse/newsfeed";
const eventSource = new EventSource( url );
const articleList = new ArticleList();


/*******************************************************************************
* message recived event                                                        *
*******************************************************************************/
eventSource.onmessage = event => articleList.push( JSON.parse( event.data ) );


/*******************************************************************************
* keypress events                                                              *
*******************************************************************************/
document.addEventListener( "keydown", ({ key }) => {
  switch ( key ) {
    case "g" : articleList.selectFirst(); break;
    case "G" : articleList.selectLast();  break;
    case "j" : articleList.selectNext();  break;
    case "k" : articleList.selectPrev();  break;
  }
});
