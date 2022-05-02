"use strict"


/*******************************************************************************
* server sent event source                                                     *
*******************************************************************************/
const url = "https://nrkno-ssenotifier.nrk.no/sse/newsfeed";
const eventSource = new EventSource( url );


/*******************************************************************************
* DOM elements                                                                 *
*******************************************************************************/
const articlesElement = document.querySelector( ".articles" );
const viewElement     = document.querySelector( ".view" );


/*******************************************************************************
* global variables                                                             *
*******************************************************************************/
let articles;
let data;
let selected = 0;


/*******************************************************************************
* message recived event                                                        *
*******************************************************************************/
eventSource.onmessage = event => {
  data = JSON.parse( event.data );

  articlesElement.textContent = "";

  for ( let message of data.messages ) {
    const infoElement = document.createElement( "p" );

    infoElement.textContent  = `${message.time} ${message.title}`
    articlesElement.appendChild( infoElement );
  }
  
  articles = document.querySelectorAll( ".articles p" );
  articles[selected].classList.toggle( "selected" );
  viewArticle();
};


/*******************************************************************************
* keypress events                                                              *
*******************************************************************************/
document.addEventListener( "keydown", event => {
  switch ( event.code ) {
    case "KeyJ" : selectArticle( selected + 1 ); break;
    case "KeyK" : selectArticle( selected - 1 ); break;
  }
});


/*******************************************************************************
* highlight selected article                                                   *
*******************************************************************************/
const selectArticle = ( article ) => {
  articles[selected].classList.toggle( "selected" );

  selected = article;

  if ( selected < 0 ) {
    selected = 0;
  }

  if ( selected > articles.length - 1 ) {
    selected = articles.length - 1;
  }

  articles[selected].classList.toggle( "selected" );
  articles[selected].scrollIntoView( true );

  viewArticle();
};


/*******************************************************************************
* view selected article view at bottom of the page                             *
*******************************************************************************/
const viewArticle = () => {
  const message = data.messages[selected];
  const title = document.createElement( "h2" );
  const info  = document.createElement( "p" );
  const lead  = document.createElement( "p" );

  title.textContent = `${message.title}`;
  info.textContent  = `${message.time}`;

  if ( message.compilations ) {
    info.textContent += ` ${message.compilations[0].title}`;
  }

  lead.innerHTML = `${message.lead}`;

  viewElement.innerHTML = "";
  viewElement.appendChild( title );
  viewElement.appendChild( info );

  if ( message.attachment ) {
    const image = document.createElement( "img" );
    image.src = message.attachment.image;
    viewElement.appendChild( image );
  }

  viewElement.appendChild( lead );
};
